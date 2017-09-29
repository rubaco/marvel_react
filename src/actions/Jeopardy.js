import request from 'superagent';

const baseUrl = 'http://jservice.io/api/random';



export function getQuersion(){

  return dispatch => {
    request.get(`${baseUrl}`).end(
      (error, response) => {
        if(!error) {
          dispatch({ type: `GET_QUESTION`, questions: response.body.data.results});
        }
      }
    );
  };
}