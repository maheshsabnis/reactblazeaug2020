import React, { useContext } from 'react';

import { DataContext } from './datacontext';
// useContext: -> is the the hook that will use the Context scope
// to share data/events across components

// should accept data from the container component aka parent
const ListComponent = () => {
    // subscribe to the DataContext
    // this will provide an access of the data send by the
    // parent component using provider 
    const dataContext = useContext(DataContext);

    return (
        <div className="container">
           <h2>The List Component shoiwng data</h2>
           {JSON.stringify(dataContext)}
        </div>
    );

};

export default ListComponent;