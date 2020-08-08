import React, { useState } from 'react';

const StateHookComponent =()=> {
    // define the state
    const [x, updateX] = useState(0);
    const depts=['IT','HR','TPT','ADMIN'];
    const [dname, setDname] = useState('');
    const clickMe=()=>{
         let x1 = 10;
          updateX(x1);
     } 

    const handleChange=(evt)=>{
        updateX(evt.target.value);
    }
    const getDataFromChild=(y)=>{
        updateX(y);
    }
     return(
         <div className="container">
           <h2>I am a State Hook Component</h2>
           <h3>{x}</h3> 
           <input type="text" value={x} onChange={handleChange} className="form-control"></input>
           <br/>
           <input type="text" value={x} onChange={handleChange} className="form-control"></input>

           <input type="button" value="Click Me" onClick={clickMe} className="btn btn-danger"/>
            <hr/>
            <div>
              <strong>
                Selected DeptName = {dname} 
              </strong>
            </div>
            <br/>
            <select className="form-control" onChange={(evt)=> setDname(evt.target.value)}>
              {
                  depts.map((d,i) => (
                      <option key={i} value={d}>{d}</option>
                  ))
              }
            </select>
            {/*<ChildHookComponent data={x} emitValue={getDataFromChild}/>*/} 
        </div>
     );   
}

// child component that is accepting props
const ChildHookComponent =(props)=>{
    const [y, updateY] = useState(0);
    const btnClick=(evt)=>{
        props.emitValue(y);
    }
    return(
        <div className="container">
           <h2>I am a Child Hook Component</h2>
           <div>
             <strong>{props.data}</strong>
           </div>
           <br/>
           <input type="text" className="form-control" value={y}
            onChange={(evt)=> {updateY(evt.target.value);props.emitValue(y);}}/> 
           <br/>
            <div className="container">
              <strong>{y}</strong>
            </div>
           <br/>
           <button className="btn btn-warning" onClick={btnClick}>
              <strong>Click Me</strong>
           </button>
        </div>
    );
}


export default StateHookComponent;