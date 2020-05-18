import { COLOR_CHANGE } from '../constants';

const initialState = {
  cor: ''
};

const corReducer = (state = initialState, action) => {
  switch(action.type) {
    case COLOR_CHANGE:
      return {
        ...state,
        cor:action.payload
      };
    default:
      return state;
  }
}

export default corReducer;