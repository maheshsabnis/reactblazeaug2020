// create a ES 6 class
import React, { Component } from 'react';
import SecondComponent from './seconfComponent';
class FirstComponent extends Component {
    // parameterized ctor with paarmeter as 'props'
    // props, the data that will be received from the parent
    constructor(props) {
        super(props);
        this.state = {
            fname:'Mahesh',
            lname: 'Sabnis'
        };
    }

    // contains the HTML template that will be mounted
    render(){
        return(
            <div>
                <h2>The First Component</h2>  
                <div>
                    <strong>
                       {this.props.data}
                    </strong>
                   
                </div>
                <hr/>
                <div>
                   <strong>{this.state.fname} {this.state.lname}</strong>
                </div>
                <hr/>
                <div>Displaying the SecodComponent as Child</div>
                <SecondComponent name1={this.state.fname} name2={this.state.lname}/>
            </div>
        );
    }
}






// export the current component as module
// ES 6 export default means the self generated instance 
export default FirstComponent;