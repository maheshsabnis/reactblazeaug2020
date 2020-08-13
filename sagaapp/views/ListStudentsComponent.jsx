// component that will show the received students

import * as React from 'react';
import { connect } from 'react-redux';

// componen t that will accept the props as
// students 
const ListStudentComponent = ({ students }) => 
   students ? (
      <div className="container">
         <table className="table table-bordered table-striped table-dark">
           <thead>
             <tr>
               <th>Student Id</th>
               <th>Student Name</th>
               <th>University</th>
               <th>Course</th>
               <th>Fees</th>
             </tr>
           </thead>
           <tbody>
             {
               students.map((s,i)=>(
                 <tr key={i}>
                    {
                      Object.keys(s).map((v,j)=>(
                        <td key={j}>{s[v]}</td>
                      ))
                    }
                 </tr>
               ))
             }
           </tbody>
         </table>
      </div>
   ):null;


// implement mapStateToProps that will read the students data
// from state and will pass that data to the 'students' props
// of the ListStudentComponent

const mapStateToProps = state => ({
    // props: the studnets from store that will be set by reducer
    // see reducer.js and its STUDENTS_RECEIVED_SUCCESS 
    students: state.students
});

export default connect(mapStateToProps, null)(ListStudentComponent);