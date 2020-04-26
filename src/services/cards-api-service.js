import config from '../config';
// import TokenService from './token-service';

const CardsApiService = {
  getCards() {
    return fetch(`${config.API_ENDPOINT}/cards`, {
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postCard(newCard) {
    return fetch(`${config.API_ENDPOINT}/cards`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCard),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteCardById(cardId) {
    return fetch(`${config.API_ENDPOINT}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
  },
};

export default CardsApiService;
