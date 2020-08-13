import React, { Component } from 'react';

// imporing the action so that it can be dispatched by the
// current component
import {getStudents} from './../actions/actions';
// connect the props for the current component
// with the actions being dispatched
import {connect} from 'react-redux';

class GetStudentsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="container">
        <button onClick={this.props.getStudents}>Get Students</button>
      </div>
    );
  }
}
 
// implement mapdispatchToProps. 
// this will displatch an action from the current 
// component and will be a reason for using
// the saga middleware for profming async operations
// and then reducer will modify the state

const  mapDispatchToProps =  {
  // props:action to be dispatched
  getStudents: getStudents // action to be dispatced
};
// the props of the component will result into
// dispatching the action
export default connect(null, mapDispatchToProps)(GetStudentsComponent);