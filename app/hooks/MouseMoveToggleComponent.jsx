import React, { useState } from 'react';
import UseEffectMouseMoveComponent from './USeEffectMouseMoveComponent';
const MouseMoveToggleComponent=()=> {
    const [display, setDisplay] = useState(true);

    return (
        <div className="container">
           <button onClick={()=> setDisplay(!display)}>Toggle</button>
           {
               display && <UseEffectMouseMoveComponent></UseEffectMouseMoveComponent>
           }
        </div>
    );
};

export default MouseMoveToggleComponent;