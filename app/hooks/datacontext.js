import { createContext } from 'react';
// the DataContext is a scope that is currently null
// this will be used across the components to defibe scope of data 

// createContext(), will define a 'any' type object that will
// setValues from sender and 
// subscribe to the object to received value in receiver
// eny object, premptive, {}, {property: '', event:, callback}
// DataContext.Provider and its 'value' object
export const DataContext = createContext(null);