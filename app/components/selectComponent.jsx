import React, { Component } from 'react';
class SelectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    // function that will be executed at component level
    // this should emit data to parent
    // use props to emit data to parent
    handleChange =(evt) => {
        // method that will be emitted to parent
        // when an event is raised on child
        this.props.selectedValue(evt.target.value);
    }
    render() {
        return (
            <div className="container">
              <select className="form-control" value={this.props.data}
               onChange={this.handleChange.bind(this)}>
                   {
                       this.props.dataSource.map((v,idx)=> (
                            <option key={idx} value={v}>{v}</option>
                       ))
                   } 
              </select>
            </div>
        );
    }
}

export default SelectComponent;