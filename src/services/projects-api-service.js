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
  postProject(project) {
    return fetch(`${config.API_ENDPOINT}/projects`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(project),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default ProjectApiService;
