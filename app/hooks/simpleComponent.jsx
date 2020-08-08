import React from 'react';

// the parameter to the functional component
// is always the props
const SimpleHookComponent =(props) => {

    const categories =['Electronics', 'Electrical', 'Food'];
    // event functions must be the function expressions
    const clickMe=()=> {
        alert('The Button is Clicked...');
    }
    return (
        <div className="container">
            <h1>The Simple Hook Component</h1>
            <h2>Value Received from Parent {props.message}</h2>
            <input type="button" value="Click Me"
            className="btn btn-danger"
             onClick={clickMe}/>
             <br/>
             <select className="form-control">
                {
                    categories.map((c,idx) => (
                        <option key={idx} value={c}>{c}</option>
                    ))
                }
             </select>
        </div>

    );
}

export default  SimpleHookComponent;