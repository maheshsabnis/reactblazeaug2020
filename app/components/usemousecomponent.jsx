import React, { Component } from 'react';
import  MouseMoveComponent from './mouseEffectComponent'; 
class UsingMouseMoveComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
    }
    showComponent =() => {
        this.setState({'display': false});
    }
    render() {
        let view;
        if(this.state.display) {
            view = <MouseMoveComponent/>
        } else {
            view = <h1>dddddddd</h1>
        }
        return (
            <div>
                <input type="button" value="Load" onClick={this.showComponent}/>
                <hr/>
                {view}
            </div>
        )
        
    }
}

export default UsingMouseMoveComponent;