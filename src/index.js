import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import { ProjectListProvider } from './context/ProjectListContext';
import { ListProvider } from './context/ListContext';
import { UserProvider } from './context/ProjectsForUserContext';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ListProvider>
        <ProjectListProvider>
          <App />
        </ProjectListProvider>
      </ListProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
