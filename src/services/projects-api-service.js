import TokenService from '../services/token-service';
import config from '../config';

const ProjectApiService = {
  getProjects() {
    return fetch(`${config.API_ENDPOINT}/projects`, {
      headers: {
        authorization: `basic ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getProject(userId) {
    return fetch(`${config.API_ENDPOINT}/projects/user/${userId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postProject(newProject) {
    return fetch(`${config.API_ENDPOINT}/projects`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newProject),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteProject(projectId) {
    return fetch(`${config.API_ENDPOINT}/projects/${projectId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
  },
};

export default ProjectApiService;
