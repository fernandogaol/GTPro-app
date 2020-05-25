import config from '../config';
import TokenService from './token-service';

const UsersApiService = {
  // WILL BE USED IN THE FUTURE
  // updateUser(username, updatedUser) {
  //   return fetch(`${config.API_ENDPOINT}/users/${username}`, {
  //     method: 'PATCH',
  //     headers: {
  //       authorization: `bearer ${TokenService.getAuthToken()}`,
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify(updatedUser),
  //   }).then((res) =>
  //     !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  //   );
  // },
};

export default UsersApiService;
