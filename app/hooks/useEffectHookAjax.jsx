import React, { useState, useEffect } from 'react';
import {DataContext} from './datacontext';
import {HttpService} from './../service/httpservice';
import TableContextComponent from './tableComponentContext';
import { Product } from '../models/product';
const UseEffectAjaxComponent =() => {
   const serv = new HttpService();
   const [product, updateProduct] = useState({}); 
   const [products, load] = useState([]);

   const save=()=> {
        const prd = new Product();
        prd.ProductId = 'Prd10003',
        prd.ProductName = 'Lays';
        prd.CategoryName = 'Food';
        prd.Manufacturer = 'Parle';
        prd.Description = 'Fast-Food';
        prd.BasePrice = 30;
        serv.postData(prd).then((response)=> {
            load([...products, response.data])
        });
   };

   // subscribe to external calls using useEffect()
   // combination of componentDidMount() + componentWillUnmount()
   // by default useEffect() will execute contineously
   // so to define a conditional execution pass the second parameter
   // to useEffect() so that the monent the parameter is changed
   // useEffect() will unload
   useEffect(()=>{
       serv.getData().then((response) => {
           load(response.data); 
       });
   },[products]); // dep. object for toggeling from initial to final value
   // so that the useEffect() will mount and unmout for rendering 
   // based on the value for the object 
   return (
    <div className="container">
       <input type="button" value="Post Data"
        onClick={save}
       className="btn btn-danger"/>
       <hr/>
       <div className="container">
         {JSON.stringify(products)}
       </div> 
       <hr/>
       <DataContext.Provider value={{products, updateProduct}}>
            <TableContextComponent/>
       </DataContext.Provider>
    </div>
   );
};

export default UseEffectAjaxComponent;