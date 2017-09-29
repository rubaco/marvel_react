import _ from 'lodash';

//puts things in and out of the store
const characters = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CHARACTERS': {
      const nextState = _.merge({}, state);
      nextState.characters = action.characters;
      return nextState;
    }
    default:
      return state
  }
}

export default characters