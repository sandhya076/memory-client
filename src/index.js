import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore ,applyMiddleware,compose} from "redux";
import App from './App';
import InputForm from "./components/InputForm/InputForm.js";
import thunk from "redux-thunk";
import reducers from "./reducers";
import UpdateForm from './components/UpdateForm/UpdateForm';
import Home from './components/Home/Home';

const store = createStore(reducers, compose(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
     <App />
     {/* <InputForm/> */}
     {/* <UpdateForm/> */}
     {/* <Home/> */}
  </Provider>,
   
  
  document.getElementById('root')
);
