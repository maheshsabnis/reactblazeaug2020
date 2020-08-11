Error Boundaries vs Try…Catch?
Error Boundaries actually aren’t in direct competition with try…catch statements. Error Boundaries are only designed for intercepting errors that originate from 3 places in a React component:

During render phase
In a lifecycle method
In the constructor
Basically… the React-y parts of a component. As a counterpoint, these are the places where Error Boundaries won’t be able to catch an error:

Event handlers (eg., onClick, onChange, etc.)
setTimeout or requestAnimationFramecallbacks
Server-side rendering (SSR)
And errors causesd by the error boundary itself (rather than its children)
So Error Boundaries don’t really impact how you use try…catch. They’re both needed as a robust strategy for handling errors in React ⚔🛡
