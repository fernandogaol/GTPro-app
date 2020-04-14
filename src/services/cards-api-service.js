import config from '../config';
// import TokenService from './token-service';

const CardsApiService = {
  //   getUsers() {
  //     return fetch(`${config.API_ENDPOINT}/users`, {
  //       method: 'GET',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //     }).then((res) =>
  //       !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  //     );
  //   },
  getCards() {
    return fetch(`${config.API_ENDPOINT}/cards/`, {
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },



  //   updateUser(username, updatedUser) {
  //     return fetch(`${config.API_ENDPOINT}/users/${username}`, {
  //       method: 'PATCH',
  //       headers: {
  //         authorization: `bearer ${TokenService.getAuthToken()}`,
  //         'content-type': 'application/json',
  //       },
  //       body: JSON.stringify(updatedUser),
  //     }).then((res) =>
  //       !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  //     );
  //   },
};

export default CardsApiService;
