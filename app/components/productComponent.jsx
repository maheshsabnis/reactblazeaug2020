import React, { Component } from 'react';
import SelectComponent from './selectComponent';
class ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductRowId: 0,
            ProductId:  '',
            ProductName: '',
            CategoryName: '',
            Manufacturer: '',
            Description: '',
            BasePrice: 0,
            Categories: ['Electronics', 'Electrical', 'Food'],
            Manufacturers: ['IBM', 'Bajaj', 'Parle', 'HP'],
            Products:[]
        };
    }
    // ES 6 syntax of function expression

    // update the ProductRowId state property
    handleChange=(evt)=> {
      //  this.setState({'ProductRowId': evt.target.value});
      // detect change event for each elemane based on name
      // and read value for each element and update
      // the state property match to the name of HTML element
       this.setState({[evt.target.name]: evt.target.value});
    }

    clearValues=() => {
        this.setState({'ProductRowId': 0});
        this.setState({'ProductId': ''});
        this.setState({'ProductName': ''});
        this.setState({'CategoryName': ''});
        this.setState({'Manufacturer': ''});
        this.setState({'Description': ''});
        this.setState({'BasePrice': 0});
    }

    getCategory=(val)=>{
        this.setState({'CategoryName':val});
    }

    getManufacturer=(val)=>{
        this.setState({'Manufacturer':val});
    }


    saveData=()=>{
      // logic for adding a new product in array
      // copy of the array
      let tempProduct =  this.state.Products.slice();
      // add data in the temp array
      tempProduct.push({
        ProductRowId: this.state.ProductRowId,
        ProductId: this.state.ProductId,
        ProductName: this.state.ProductName,
        CategoreyName: this.state.CategoryName,
        Manufacturer: this.state.Manufacturer,
        Description: this.state.Description,
        BasePrice: this.state.BasePrice
      });
      console.log(JSON.stringify(tempProduct));
      // set state of Products array using the TempArray
      // in casee of updating an array use the callback
      this.setState({'Products':tempProduct}, ()=> {
        console.log(JSON.stringify(this.state.Products));
      }); // copy with aready available values
     
    }

    componentDidMount(){
      // AJAX Calls from this
    }
    render() {
        return (
            <div className="container">
            <h2>The Product Info</h2>
               <div className="form-group">
                 <label>Product Row Id</label>
                 <input type="text" className="form-control"
                 name="ProductRowId"
                  value={this.state.ProductRowId}
                   onChange={this.handleChange.bind(this)}/>
               </div>
               <div className="form-group">
                 <label>Product Id</label>
                 <input type="text" className="form-control" 
                 name="ProductId" onChange={this.handleChange.bind(this)}
                 value={this.state.ProductId}/>
               </div>
               <div className="form-group">
                 <label>Product Name</label>
                 <input type="text" className="form-control" 
                 name="ProductName" onChange={this.handleChange.bind(this)}
                 value={this.state.ProductName}/>
               </div>
               <div className="form-group">
                 <label>Category Name</label>
                 <SelectComponent   data={this.state.CategoryName} 
                 selectedValue={this.getCategory.bind(this)} 
                 dataSource={this.state.Categories}></SelectComponent>
               </div>
               <div className="form-group">
                 <label>Manufacturer</label>
                 <SelectComponent  
                 data={this.state.Manufacturer} 
                 selectedValue={this.getManufacturer.bind(this)}
                 dataSource={this.state.Manufacturers}></SelectComponent>
               </div>
               <div className="form-group">
                 <label>Description</label>
                 <input type="text" 
                 name="Description" onChange={this.handleChange.bind(this)}
                 className="form-control" value={this.state.Description}/>
               </div>
               <div className="form-group">
                 <label>Base Price</label>
                 <input type="text" 
                 name="BasePrice" onChange={this.handleChange.bind(this)}
                 className="form-control" value={this.state.BasePrice}/>
               </div>
               <div className="form-group">
                 <input type="button" value="New" onClick={this.clearValues.bind(this)} className="btn btn-warning"/>
                 <input type="button" value="Save" onClick={this.saveData.bind(this)} className="btn btn-success"/>
             </div>
s            </div>
        );
    }
}

export default ProductComponent;