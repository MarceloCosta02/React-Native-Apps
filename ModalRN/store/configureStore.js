import { createStore, combineReducers } from 'redux';
import corReducer from '../reducers/colorReducer';
const rootReducer = combineReducers(
    { cor: corReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;