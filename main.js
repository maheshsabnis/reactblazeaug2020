// 1. Import React Object model
import React from "react";
// 2. Import ReactDOM for rendering React Component in DOM
import ReactDom from "react-dom";
// 3. Import bootstrap
import "!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css";

// import ans use the React-Redux object model for the application 

// 1. import createStore object from redux
import { createStore } from 'redux';
// 2. import reducer,  this will monitor the store updares
import reducer from './app/reduxapp/reducers/reducer';
// 3. import Provider from react-redux taht will
// provide a singleton instance to the ReactCOmponent so that the componene will
// use the store
import { Provider } from 'react-redux';

// define a store object using the createStore() menthod and pass reducer to it

let store = createStore(reducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import ReduxMainComponent from './app/reduxapp/ReduxComponent';
// render the React Component inside the Provider that is using the store object

ReactDom.render(<Provider store={store}>
       <ReduxMainComponent/>
    </Provider>   , document.getElementById("app"));