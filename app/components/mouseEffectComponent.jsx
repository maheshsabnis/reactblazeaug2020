import React, { Component } from 'react';
class MouseMoveComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            x:0,
            y:0
        }
    }

    detectMousePosition = (evt) => {
        this.setState({ x: evt.clientX });
        this.setState({ y: evt.clientY });
        console.log(`x = ${this.state.x} y = ${this.state.y}` );
    }

    componentDidMount = () => {
        window.addEventListener('mousemove', this.detectMousePosition);
    };
    componentWillUnmount=() => {
        // window.removeEventListener('mousemove', this.detectMousePosition);
    }
    render() { 
        return (  <div>
            X - {this.state.x} Y - {this.state.y}
        </div>);
    }
}
 
export default MouseMoveComponent;