import React, {Component} from 'react';
class SecondComponent extends Component {

    render(){
        return (
            <div>
               <strong> Data Received from First Component </strong>
               <strong>
                  {this.props.name1} {this.props.name2}
               </strong>
            </div> 
        );
    }
} 

export default SecondComponent;