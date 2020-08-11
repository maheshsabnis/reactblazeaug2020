import React, { Component } from 'react';
class MyErrorBoundary extends Component {
    state = {
      errorMessage: ''
    }
    static getDerivedStateFromError(error) {
      return {errorMessage: error.toString()}
    }
    componentDidCatch(error, info) {
      this.logErrorToServices(error.toString(), info.componentStack)
    }
    // A fake logging service 😬
    logErrorToServices = console.log
    render() {
      if (this.state.errorMessage) {
        return (
          <p>
            {this.state.errorMessage}
          </p>
        )
      }
      return this.props.children
    }
  }
  
  class BuggyCounter extends Component {
    state = {
      counter: 0
    };
    handleClick = () => {
      this.setState({
        counter: this.state.counter + 1
      });
    }
    render() {
      if (this.state.counter === 5) {
    // Simulate an error!
    throw new Error('I crashed!');
  }
      return (
        <div>
          <h1>{this.state.counter}</h1>
          <button onClick={this.handleClick}>+</button>
        </div>
      );
    }
};
  
  function AppComponent() {
    const refreshPage = () => history.go(0)
    return (
      <div>
        <MyErrorBoundary>
    <BuggyCounter />
  </MyErrorBoundary>
        <hr />
        <button onClick={refreshPage}>
          Refresh Page
        </button>
      </div>
    );
  }

  export default AppComponent;