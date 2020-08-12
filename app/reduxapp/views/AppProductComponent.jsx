import React, { Component } from 'react';   
class AddProductComponent extends Component {
    constructor(props) {
        super(props);
        
    }

    handleSave=()=> {
        let prd = {
            ProductId: this.refs.ProductId.value,
            ProductName: this.refs.ProductName.value
        };

        // some logic for the dispatch of the action
        this.props.AddClick(prd);

        // clear state 
        this.refs.ProductId.value = 0;
        this.refs.ProductName.value = '';
    }
    render() { 
        return ( 
            <div className="container">
            <div className="form-group">
            <label htmlFor="ProductId"> Product Id</label>
            <input name="ProductId" ref="ProductId" type="text" className="form-control"
              />
          </div>
          <div className="form-group">
            <label htmlFor="ProductName"> Product Name</label>
            <input type="text" ref="ProductName" name="ProductName" className="form-control"
            />
          </div>
          <div className="form-group">
            <input type="button" value="Save" onClick={this.handleSave.bind(this)} className="btn btn-success"/>
          </div>
        </div>
         );
    }
}
 
export default AddProductComponent;