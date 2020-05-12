import { SING_UP, LOGIN, SHORTEN, DELETE_SHORTEN } from '../../reducers/types/userTypes';

export const createUser = (formValues) => (dispatch) => {
  fetch('http://localhost:3001/users/sing-up', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formValues),
  })
    .then(async (data) => {
      const user = await data.json();
      console.log(user);
      dispatch({
        type: SING_UP,
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const shorten = (shortenLink) => (dispatch) => {
  dispatch({
    type: SHORTEN,
    payload: shortenLink,
  });
};

export const deleteLink = (newLinksArray) => (dispatch) => {
  dispatch({
    type: DELETE_SHORTEN,
    payload: newLinksArray,
  });
};
