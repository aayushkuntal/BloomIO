import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; // Make sure you import 'thunk' if it's not already imported.

import authReducer from "../reducers/authReducer";

const persistedState = loadFromLocalStorage();

const reducers = combineReducers({
  auth: authReducer,
  // chat: chatReducer, 
});

const store = configureStore({
  reducer: reducers,
  preloadedState: persistedState,
  middleware: [thunk],
  devtools: process.env.NODE_ENV !== 'production',
});

//save the state to local storage every time the state changes
store.subscribe(() => saveToLocalStorage(store.getState()));


function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    console.log(serializedState);
    window.localStorage.setItem('store', serializedState);
  } catch(e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = window.localStorage.getItem('store');
    if(serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch(e) {
    console.log(e);
    return undefined;
  }
}

export default store;
