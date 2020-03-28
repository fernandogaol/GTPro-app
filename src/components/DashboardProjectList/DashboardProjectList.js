import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import './DashboardProjects.css';

export default class DashboardProjectList extends Component {
  render() {
    const { project } = this.props;

    return (
      <section className='DashboardProjectList'>
        {/* <Link to={'/dashboard'}>{project.title}</Link> */}
        <li>{project.title}</li>
        <h3>NOTHING?? NO ANSWER?</h3>
        <li>ohosahsoiahsaioshiohoi</li>
      </section>
    );
  }
}
