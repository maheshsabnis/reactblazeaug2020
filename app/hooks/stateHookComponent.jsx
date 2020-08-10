import React, { useState } from 'react';

import {DataContext} from './datacontext';

import ListComponent from './listComponent';
import TableContextComponent from './tableComponentContext';
const StateHookComponent =()=> {
// state definition for component
// products: -> The State object for the component
// updateProduct: -> The method that will be used to update state of the 
// product 
// useState(initial value(s) for the state object )
const [product, updateProduct] = useState({
    ProductId:0,
    ProductName: ''
});

const [products, addProduct] = useState([]);
// function expresions those will be bound with HTML Elements

const clear=()=> {
    // call the state method to update the state variable
    updateProduct({ProductId:0, ProductName:''});
}

const save=() => {
    // class the addProduct() method to update the products array
    // to keep updating products array based on new values of product object
    // use the speard-operator
    // products.push({product object});
    addProduct([...products,
         {ProductId: product.ProductId, ProductName: product.ProductName}]);

         console.log(`Added products ${products}`);

}

 

// returning HMTL
// the HTML Editor elements will be value bind directly the state variable
// e.g value={variable}
// the event binding is always inline to HTML element
// <input type="text" onChange=(evt)=> {//logic}/>
return (
    <div className="container">
    <table className="table table-bordered table-striped">
    <tbody>
      <tr>
        <td>
          Product Id
        </td>
        <td>
         <input type="text" className="form-control"
          value={product.ProductId}
           onChange={(evt)=> updateProduct({...product, ProductId: parseInt(evt.target.value)})}/>
        </td>
      </tr>
      <tr>
        <td>
            Product Name
        </td>
        <td>
        <input type="text" className="form-control"
         value={product.ProductName}
         onChange={(evt)=> updateProduct({...product, ProductName: evt.target.value})}/>
        </td>
     </tr>
     <tr>
        <td>
        <input type="button" value="New" className="btn btn-warning"
         onClick={clear}/>
        </td>
        <td>
        <input type="button" value="Save" className="btn btn-success"
         onClick={save}/>
        </td>
     </tr>
     </tbody>
    </table>
    <hr/>
    <div>
        <strong>{JSON.stringify(products)}</strong>
    </div>
    <hr/>
     <DataContext.Provider value={{products,updateProduct}}>
       <TableContextComponent/>
     </DataContext.Provider>
    </div>
);

};

export default StateHookComponent;

