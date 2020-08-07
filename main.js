// 1. Import React Object model
import React from "react";
// 2. Import ReactDOM for rendering React Component in DOM
import ReactDom from "react-dom";
// 3. Import bootstrap
import "!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css";

// FirstComponent, will be read as 'WebComponent' means that the
// custom HTML DOM element
import FirstComponent from './app/components/firstComponent';
import ProductComponent from './app/components/productComponent';

let message = 'Hay React Hello!!!!';

// mount the Component in the HTML element with 'id' as 'app'
ReactDom.render( < ProductComponent / > , document.getElementById("app"));