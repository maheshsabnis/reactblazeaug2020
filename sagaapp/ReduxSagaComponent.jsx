import React, { Component } from 'react';
import GetStudentsComponent from './views/AddStudentComponent';
import ListStudentComponent from './views/ListStudentsComponent';

const ReduxSagaComponent=() =>(
    <div className="container">
        <GetStudentsComponent/>
        <br/>
        <ListStudentComponent/>
    </div>
);

export default ReduxSagaComponent; 