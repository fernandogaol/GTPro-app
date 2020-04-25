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
  postList(newList) {
    return fetch(`${config.API_ENDPOINT}/lists`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newList),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteListById(listId) {
    return fetch(`${config.API_ENDPOINT}/lists/${listId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default ListApiService;
