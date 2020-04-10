import config from '../config';

const ListApiService = {
  getList(projectId) {
    return fetch(`${config.API_ENDPOINT}/lists/project/${projectId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        // authorization: `basic ${TokenService.getAuthToken()}`
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default ListApiService;
