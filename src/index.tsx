import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import { setSearches } from './store/actions/searchAction';
import { readCookie } from './utils';
import { COOKIES } from './constants/cookies';

const setSearchingHistory = () => {
  const searchCookie = readCookie(COOKIES.SEARCHES);
  if(searchCookie){
    store.dispatch(setSearches(searchCookie.split(',')));
  }
  else {
    store.dispatch(setSearches([]));
  }
}

setSearchingHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
