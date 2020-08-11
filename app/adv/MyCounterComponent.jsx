import React, { Component } from 'react';

// create an errorboundry component
class MyCustomErrorBoundryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            errorMessage: ''
        };
    }
    // fake logger
    fakeLoggerService = console.log;
    
    static getDerivedStateFromError(error){
        return {errorMessage: error.toString()}
    }

    // handle the error that occures in any component loaded as pernent or child

    componentDidCatch(error,info) {
        this.fakeLoggerService(error.toString(), info.componentStack);
    }

    render() { 
             if(this.state.errorMessage) {
                 return (
                     <div>
                       <strong>
                         {this.state.errorMessage}
                       </strong>
                     </div>
                 );
             }
             return this.props.children; // read all props from the children components 
    }
}
 
 


class MyCounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter:0
         };
    }

    handleClick=()=>{
        this.setState({counter: this.state.counter +1});
    }
    render() { 
        if(this.state.counter === 6) {
             throw new Error('The Component is crashing,,,,');
        }
        return (  
            <div className="container">
               <h1>{this.state.counter}</h1>
              <button onClick={this.handleClick.bind(this)}>Click Me</button>
            </div>
        );
    }
}
 
const ContainerComponent =() => {
    // execute the logic for the fallback UI
    const refreshPage = () => {
        // maintain the history for current UI and load it if error occure 
        // by executing this function
        history.go(0); // manage the hostory for executing component and load it
    }

    return (
        <div className="container">
           <MyCustomErrorBoundryComponent>
             <MyCounterComponent/>
           </MyCustomErrorBoundryComponent>
           <hr/>
           <button onClick={refreshPage}>Reload Page / Refresh it</button>
        </div>
    );
} 

export default ContainerComponent;