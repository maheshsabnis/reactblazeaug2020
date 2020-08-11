import React, { Component } from 'react';
class ValidationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            PersonId: 0,
            PersonName: '',
            isPersonIdValid: true,
            isPersonNameValid: true,
            isFormValid: true
        };
    }

    handleChange=(evt)=>{
        this.setState({[evt.target.name]:evt.target.value});
        this.validateForm(evt.target.name, evt.target.value);
    }

    // a method for validations
    // name :-> name of the UI element that will be updating the state
    // value :-> value of the state that will be set/changed when UI eleemnt is updates 
    validateForm(name,value){
        if(name === 'PersonId') {
            if(parseInt(value) < 0 || value.length > 5) {
                this.setState({isPersonIdValid:false});
                this.setState({isFormValid:false});
            } else {
                this.setState({isPersonIdValid:true});
                this.setState({isFormValid:true});
            }
        }  

        if(name === 'PersonName') {
            if(value === '' || value.length > 20) {
                this.setState({isPersonNameValid:false});
                this.setState({isFormValid:false});
            } else {
                this.setState({isPersonNameValid:true});
                this.setState({isFormValid:true});
            }
        }  
    }

    render() { 
        return ( 
            <div className="container">
               <h2>React validations</h2>
               <div className="form-group">
                 <label htmlFor="PersonId"> Person Id</label>
                 <input name="PersonId" type="text" className="form-control"
                  value={this.state.PersonId}
                  onChange={this.handleChange.bind(this)}/>
                  <div hidden={this.state.isPersonIdValid} className="alert alert-danger">Person Id is Must</div>
               </div>
               <div className="form-group">
                 <label htmlFor="PersonName"> Person Name</label>
                 <input type="text" name="PersonName" className="form-control"
                 value={this.state.PersonName}
                 onChange={this.handleChange.bind(this)}/>
                 <div hidden={this.state.isPersonNameValid} className="alert alert-danger">Person Name is Must</div>
               </div>
               <div className="form-group">
                 <input type="button" value="Save"  disabled={!this.state.isFormValid} className="btn btn-success"/>
               </div>
            </div>
        );
    }
}
 
export default ValidationComponent;