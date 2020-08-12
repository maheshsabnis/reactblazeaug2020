// defining action type
// constant that will be used to check which action is dispatch
export const ADD_PRODUCT = "ADD_PRODUCT";

// defining action creator
// a method that will contains the logic
// will accept the data to be manipulated, the inout data aka 'payload' 
// and retun the result, the result will be the JSON object
// that represent the resultant Action and the data for the action
export function addProduct(product) {
    // some logic here
    return {
        type: 'ADD_PRODUCT',
        product
    }
}