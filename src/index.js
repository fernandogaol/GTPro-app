import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import { ProjectListProvider } from './context/ProjectListContext';
import { ListProvider } from './context/ListContext';

ReactDOM.render(
  <BrowserRouter>
    <ListProvider>
      <ProjectListProvider>
        <App />
      </ProjectListProvider>
    </ListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
