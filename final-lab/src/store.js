import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers';
import promiseMW from 'redux-promise';
// import { applyMiddleware } from 'redux';

const initialState = {};

//const middlewares = [thunk,promiseMW];

//Create Store
export default createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware( thunk  , promiseMW ) //...middlewares , )
  )
);
