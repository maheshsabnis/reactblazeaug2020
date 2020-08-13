import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';

// import createStore
// applyMiddleware: Used to configure
// the Saga or Thunk middleware for the store 
import { createStore, applyMiddleware } from 'redux';
// the Provider will provide teh store to all components
// scoped with it.
import { Provider } from 'react-redux';
import {logger} from  'redux-logger';
import rootSaga from './sagaapp/sagas/index';

import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import reducer from './sagaapp/reducers/reducers';
import ReduxSagaComponent from './sagaapp/ReduxSagaComponent';
 
// create a middleware object using redux-saga sagaMiddleware object 
const sagaMiddleware = createSagaMiddleware();
 
// create a store using reducer and sagaMiddleware object
// store known all actions to be displatched
// and the middleware that is handling all async calls  

let store = createStore(reducer, 
    applyMiddleware(sagaMiddleware,logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 // initial the sagaMiddeware using rootSaga
 sagaMiddleware.run(rootSaga);
    
ReactDOM.render( <Provider store={store}>
            < ReduxSagaComponent / >
    </Provider> , document.getElementById('root'));

 
serviceWorker.unregister();