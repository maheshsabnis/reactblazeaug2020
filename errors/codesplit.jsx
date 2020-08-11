import React, { Component } from 'react';
//import math from './math'; 
const CodeSpiltComponent = () => {
  //  const res = math.add(10,20);
  let res;
  import('./math').then(m=> {
    res = m.default.add(10,20);
    console.log(res);
  });

    return (
        <div className="container">
            <h1>{
                 res
            }</h1>
        </div>
    );
}

export default CodeSpiltComponent;