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
import LifeCycleComponent from './app/components/LifeCycleComponent';

import SimpleHookComponent from './app/hooks/simpleComponent';
import StateHookComponent from './app/hooks/stateHookComponent';
import UseEffectAjaxComponent from './app/hooks/useEffectHookAjax';
import UseEffectMouseMoveComponent from './app/hooks/USeEffectMouseMoveComponent';
import MouseMoveToggleComponent from './app/hooks/MouseMoveToggleComponent';
import ValidationComponent from './app/components/validationcomponent';
import BuggyCounter from  './app/errors/withouterrorBoundries';
import AppComponent from './app/errors/errorboundry';
import CodeSpiltComponent from './app/errors/codesplit';
import ContainerComponent from './app/adv/MyCounterComponent';
// mount the Component in the HTML element with 'id' as 'app'
ReactDom.render( < ContainerComponent / > , document.getElementById("app"));