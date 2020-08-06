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
      2.  Function pointer

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
   3. Development time dependencies aka  'devDependencies'
      1. npm install --save-dev <PACKAGE-NAME>
         1. Testing
         2. Styles
   4. React.js Transpiler for the application
      1. babel-core and babel-cli as devDependencies
      2. babel-preset
         1. Polyfills
            1.  e.g. fill in the blanks
2.  The node.js based hosting engine for React.js apps
    1.  webpack
        1.  webpack-dev-server
    2.  webpack.config.js
        1.  Define configuration for
            1.  Transpilation
            2.  Loading CSS
            3.  Preset
            4.  Testing
            5.  Hosting



3. Use the React CLI aka Project generator (Recommended in Production)
   1. create-react-app, the project generator module
      1. npm install -g create-react-app
   2. CLI to create React Project
      1. create-react-app <NAME-OF-PROJECT>