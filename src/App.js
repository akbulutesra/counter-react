import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.decreaseHandler = this.decreaseHandler.bind(this);
    this.increaseHandler = this.increaseHandler.bind(this);


    this.state = {
      counter: 0,
    };
  }

  decreaseHandler() {
    const newCounter = this.state.counter - 1;

    this.setState({
      counter: newCounter,
    })
  }

  increaseHandler() {
    const newCounter = this.state.counter + 1;

    this.setState({
      counter: newCounter,
    })
  }

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.decreaseHandler}>Decrease</button>

        <p>{this.state.counter}</p>

        <button type="button" onClick={this.increaseHandler}>Increase</button>
      </div>
    );
  }
}

export default App;
