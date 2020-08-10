React.js

1. ES 6, the modern JavaScript aka High-Level JavaScript
   1. The scope of the variable using 'let' keyword
   2. The rest pasrameter, syntax ...arr
      1. arr = arr.copy(); // deep copy
   3. ... is a spread opertaor
   4. Arrow Operators, =>, used as a replacement for callback methods
   5. for..of, the iterators
   6. OOPs
      1. Class
         1. All public declaration are defined using 'this' prefix
            1. this.x
            2. this. fn = function(){....}
         2. The 'extends' keyword for inheritance
   7. Promise, the asynchronous operation monitor
   8. Async and Await (ES 7)
   9. Modules
      1. Export and Import
   10. Generators
   11. Function pointer

The Transpilation of Modern JS or ES 6 into ES 3

- performed using the 'transpiler'
  - The 'babel'

======================================================================
Creating React.js Project

1. Design it from scratch (Recommended to learn)
   1. The packge.json with app dependencies
      1. npm init -y command to create package.json
   2. Production Dependencies for the Project aka 'dependencies'
      1. npm install --save <PACKAGE-NAME>
      2. E.g.
         1. npm install --save react
   3. Development time dependencies aka 'devDependencies'
      1. npm install --save-dev <PACKAGE-NAME>
         1. Testing
         2. Styles
   4. React.js Transpiler for the application
      1. babel-core and babel-cli as devDependencies
      2. babel-preset
         1. Polyfills
            1. e.g. fill in the blanks
2. The node.js based hosting engine for React.js apps
   1. webpack
      1. webpack-dev-server
   2. webpack.config.js
      1. Define configuration for
         1. Transpilation
         2. Loading CSS
         3. Preset
         4. Testing
         5. Hosting
   3. Use the 'entry' object to define an entry point to for the application so that transpialtion and execution will start
   4. The 'output', the the path on server where the transpiled output will be stored and hosted
      1. ES 6,7 to ES 3
      2. SCSS, Styles, etc. to css
   5. The 'module' object
      1. Define the WebPack execution to transform React's hight level code to ES 3

3) Use the React CLI aka Project generator (Recommended in Production)
   1. create-react-app, the project generator module
      1. npm install -g create-react-app
   2. CLI to create React Project
      1. create-react-app <NAME-OF-PROJECT>

======================================================================================
Installing Hosting server in global scope
npm install -g webpack@4.29.6 webpack-cli@3.3.0 webpack-dev-server@3.2.1

=======================================================================================
React App Development

1. React Components
   1. Props
   2. State
   3. Events
   4. Binding
   5. Resusablilty
   6. Hooks
   7. Errro Boundry
   8. Lifecycle
2. React with Ajax
3. React SPA
4. State Management using Redux
   1. Actions, Reducers, store and Saga
5. React Materials
   1. UX
6. Testing React Apps

=====================================================================================

React Component
- WebComponent
  - HTML aka UI, Property System and behavior
  - Property System
    - Data Points using which component can mutate the state (data)
      - props, the data received from parent
        - Immutable data
      - state, the data local to the component
        - Mutable for a specific component
        - the 'state' object
          - this.state = {};
        - To update the state object for its property use following
          - this.setSate({'<PORPERTY-NAME>': <VALUE>})
    - Dynamic proprty system
      - Define 'Custom Attributes' for a WebComponent
- JSX
  - Xml Extension for JavaScript
  - Define a custom Property System for HTML DOM elements when used in React.js
    - className, instead of class attribute
    - value
    - htmlFor, instead of for

=======================================================================================
Ex 1:
Create a TableGrid Component as follows
             <TableGrid DataSource={this.state.Products} selectedRow={this.state.getRowValue} isSortable="true" sortProperty="ProductName"
              showDeleteButton="true"></TableGrid>

It should Accept DataSorce based on which it should generate TableHeaders and TableRows. Each row must have a delete button to delete row. Add a boolean property for the TableGrid e.g. showDeleteButton, is this property is set to true then only the delete button should be generated in each row.

To Generate columns headers, read the first record from DataSource
 var headers = Object.keys(this.props.DataSource[0]);
 headers array will have all properties of the first record from Data Source 

Add the selectedRow property, this will emit the selected row from TableGrid to its parent, so that it can be displayed.

Delete button should delete the record from parent.

Add a boolean property of name 'isSortable' and 'sortProperty', if 'isSortable' is true, then sort the table data based on the value of the 'sortProperty'

======================================================================================
React Hooks form 16.8 +
1. A way of creating functional components
   1. function MyComponent() {return HTML}
   2. const MyComponent=(props)=>{}; the constant function expression
2. State in the hooks is defined as ES 6 mechanism knows as 'destructurer' as below
   1. const [<state-variable>, <callback-to-update-state-variable>] = useState(<INIT-VALUE-OF-State-variable>)
      1. useState() an object from React Object Model 
   2. The local variables will be defined as 'const'
3.  useEffect()
    1.  Manage all async or time-bound operations
    2.  What is async(?) in JavaSCript
        1.  ES 6 has 'Promise' 

======================================================================================
Ex 2: Modify the Product Class Component to be used as Hook component with a Search Functionality in it.


Search Functionality is implemented using TextBox, that will accept the search text and it will filter the data in the ProductList table based on the search criteria e.g. if TextBox is having the CategoryName, then the table will show only the list of products of that category.

