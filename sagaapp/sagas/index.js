// the file that will implement saga generators
// this provides operators and effects to mange yield
// and external async operations respectively
// import all operatotrs from effects to read the data using yield
// all --> used to monitor all watchers
// takelatest --> used to process a latest response received from
// promise subscription
// takeEvery --> used to yield each record from promise response
// call --> make a call to the Promise subscription
// so that it will be resolved and data can be yield from it
// put --> will return an output action for input action
// e.g. GET_STUDENTS will return either GET_STUDENTS_SUCCESS 
// or GET_STUDENTS_FAIL 
import { put, all, takeLatest, takeEvery, call } from 'redux-saga/effects';

import HttpService from './../../services/httpservice';
// the method that will return the promise resolve
// containing data to be send back to the action
function getStudentsData() {
    let serv = new HttpService();
    // malke call to service and receive the promise object
    const response = serv.getStudents()
        .then((result) => result.data.data);
    // resolve the promise object, so that the
    // data can be read from it
    return Promise.resolve(response);
}

// SAGA infrastructure that will yield the response
// and read data from it

function* fetchStudents() {
    let students = [];
    console.log('In a fetchStudents generator');
    // call the method that returns a promise object
    // this method must subscribe to the method
    // that resolves the promise object and has 
    // capacility to provide the response data
    const request = yield call(getStudentsData);
    console.log(`Fetch Students ${request}`);
    // return the response action either success or failed
    yield put({
        type: 'STUDENTS_RECEIVED_SUCCESS',
        students: request || [{ error: 'Error Occured' }]
    });
}

// write a method that will yield the fetchStudents
// so that the root saga can collect response and
// provide it to the reducer so that reducer can update the 
// state in the store
// this generator will be invoked 
// by the root saga when the GET_STUDENTS action will
// be dispatched
function* actionWatcherForGetStudents() {
    yield takeLatest("GET_STUDENTS", fetchStudents);
}

// create a SAGA root method that will be send to createStore()
// so that the store object will know when to use SAGA gerators
// for a action to be dispatched
export default function* rootSaga() {
    // an array of all watchers those 
    // are an infrsatructure methods those
    // will be used for performing
    // REST API calls get/post/put/delete
    yield all([actionWatcherForGetStudents()]);
}