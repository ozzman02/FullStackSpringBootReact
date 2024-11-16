import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from "redux";
import userReducer from "./reducers/user-reducer";

const reducers = combineReducers({
    user: userReducer
});

const store = createStore(reducers);

export default store;