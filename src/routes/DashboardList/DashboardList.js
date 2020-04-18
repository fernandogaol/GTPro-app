import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../../context/ProjectsForUserContext';
import ListApiService from '../../services/lists-api-service';
import Lists from '../../components/Lists/Lists';

import './DashboardList.css';

export default class DashboardList extends Component {
  static contextType = userContext;

  static defaultProps = {
    match: { params: {} },
  };
  componentDidMount() {
    let project_id = this.props.match.params.id;
    const { list } = this.context;
    this.context.clearError();
    ListApiService.getList(project_id)
      .then(this.context.setList)
      .catch(this.context.setError);
    console.log('List:', list);
  }
  renderLists() {
    const { list = [] } = this.context;

    return list.map((list) => <Lists list={list} key={list.id} />);
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { title } = ev.target;
    let project_id = this.props.match.params.id;

    this.setState({ error: null });

    ListApiService.postList({
      title: title.value,
      project_id: project_id,
    })
      .then((newList) => {
        title.value = '';

        const { list } = this.context;
        this.setState({
          list: [...this.state.list, list],
        });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };
  render() {
    const { error } = this.context;
    return (
      <section className='List'>
        <Link to='/projects'>Go back</Link>
        <h1>Lists</h1>
        {error ? (
          <p className='red'> There was an error, please try again</p>
        ) : (
          this.renderLists()
        )}
        <form onSubmit={this.handleSubmit}>
          <input name='title'></input>
          <button>Add List +</button>
        </form>
      </section>
    );
  }
}
