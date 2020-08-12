import React, { Component } from 'react';

import AddProductComponent from './views/AppProductComponent';
import ListProductsComponent from './views/ListProuductComponent';

// this component will use the store and also listen 
// to all actions those are dispatched from various components

import {addProduct} from './actions/action';

// connect: This will be used to connect Redux store to the 
// react application, so that data from store will be avaiable to the component
import {connect} from 'react-redux';

class ReduxMainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // define props destructurer that will define the action dispatch and the
        // expected return value from store
        // dispatch is a standard method of redux to dispatch actions
        // based on events on components
        const {dispatch, listproducts} = this.props;
        return (  
            <div className="container">
                <AddProductComponent AddClick = {(product)=>dispatch(addProduct(product))}/>
                <hr/>
                <ListProductsComponent productsData={listproducts}/>
            </div>
        );
    }

}

 // write a method that will subscribe to the store and read the data from the store
// The standard method provided bt read-redux to map the data from store to the 
// local state
function  mapStateToProps(state) {
    return {
        listproducts:state.listproductsReducer
    }
}
 // connect will mapState to Props defined in the ReducMainComponent
 // this will provide the store subscriptoin to the component 
export default connect(mapStateToProps)(ReduxMainComponent); 