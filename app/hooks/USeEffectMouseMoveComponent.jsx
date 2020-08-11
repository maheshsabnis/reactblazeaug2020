import React, { useState, useEffect } from 'react';

const UseEffectMouseMoveComponent=()=> {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const detectMousePosition=(evt)=>{
    console.log('Mouse Move');
    setX(evt.clientX);
    setY(evt.clientY);
  }

  // the callback input of the useEffect()
  // 1. it will perform the mounting
  // 2. when the dependency is affected, it will return 
  // the unmounting  
  useEffect(()=> {
      console.log('Mouse move event is called');
      // subscribe to the event
      window.addEventListener('mousemove', detectMousePosition);
      // the clean up, remove the event handler once it performs
      // desire action
      return ()=> {
          console.log('Un mounting the event');
          window.removeEventListener('mousemove', detectMousePosition);
      }

  },[]);

  return(
      <div className="container">
        Use Effect x == {x} && y == {y} 
      </div>
  );

}

export default UseEffectMouseMoveComponent;