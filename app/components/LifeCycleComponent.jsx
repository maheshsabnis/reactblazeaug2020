import React, { Component, Children } from 'react';
class LifeCycleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            pValue: 0
        };
    }
    componentDidMount=()=> {
         console.log(`LifeCylce Parent Component is mounted`);
    }
    componentWillMount=()=> {
        console.log(`LifeCylce Parent Component is Will Mount`);
   }
   componentDidUpdate=()=> {
     console.log(`LifeCylce Parent Component Did Update`);
    }
    render() {
        if(this.state.pValue % 2 == 0){
            return (  
                <div className="container">
                    <h2>The Parent Component</h2>
                    <input type="text" value={this.state.pValue}
                     onChange={(evt)=> this.setState({pValue: evt.target.value})}/>
                    <ChildComponent data={this.state.pValue}/>
                </div> 
            );
        } else {
            return (  
                <div className="container">
                    <h2>The Parent Component</h2>
                    <input type="text" value={this.state.pValue}
                     onChange={(evt)=> this.setState({pValue: evt.target.value})}/>
                    <ChildComponent1 data={this.state.pValue}/>
                </div> 
            );
        }
      
    }
}
 
class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            x1:0,
            y1:0
        };
    }
    detectMousePosition=(evt) => {
        this.setState({'x1':evt.clientX});
        this.setState({'y1':evt.clientY});
        console.log(`x = ${this.state.x1} , y = ${this.state.y1}`);
    }

    // all AJAX
    componentDidMount=()=> {
        console.log(`ChildComponent Component is mounted`);
        window.addEventListener('mousemove', this.detectMousePosition);
   }
   componentWillMount=()=> {
       console.log(`ChildComponent Component is Will Mount`);
  }
  componentDidUpdate=()=> {
    console.log(`ChildComponent Component Did Update`);
   }
   // All Cleanup
   componentWillUnmount=()=> {
    console.log(`ChildComponent Component will unmount`);
    // EventQ, removing an event from event Q
    window.removeEventListener('mousemove', this.detectMousePosition);
   }
    render() { 
        return (  
            <div className="container">
            <h2>The Child Component </h2>
            <h3>Value from the Parent = {this.props.data}</h3>
            X- {this.state.x1}  -- Y - {this.state.y1}
            </div>
        );
    }
}
 

class ChildComponent1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            x:10
        };
    }

    componentDidMount=()=> {
        console.log(`ChildComponent1 Component is mounted`);
   }
   componentWillMount=()=> {
       console.log(`ChildComponent1 Component is Will Mount`);
  }
  componentDidUpdate=()=> {
    console.log(`ChildComponent1 Component Did Update`);
   }

    componentWillUnmount=()=> {
    console.log(`ChildComponent1 Component will unmount`);
   }
    render() { 
        return ( 

            <div className="container">
                <h2>This is Child COmponent 1 </h2>
                <div>{this.props.data}</div>
            </div> 
         );
    }
}
 
 

export default LifeCycleComponent;