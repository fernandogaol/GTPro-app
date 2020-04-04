import config from '../config';

const ListApiService = {
  getLists() {
    return fetch(`${config.API_ENDPOINT}/lists/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
        // authorization: `basic ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default ListApiService;
