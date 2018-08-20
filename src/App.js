import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/styles.css'
import { Button } from 'react-bootstrap';

class App extends Component {
    constructor() {
      super();
      this.state = {
        count: 0,
        hello: "HelloWorld!"
      };
    }

    increment = () => {
      this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
      this.setState({ count: this.state.count - 1});
    }

    reset = () => {
      this.setState({ count: 0 });
    }

    render() {
      return (
        <div className="App">

          <body>
              <section class="containter">
                  <div class="counter">
                      <h1>{this.state.count}</h1>
                      <div class="buttons">
                      <button class="btn btn-primary btn-block" onClick={this.increment}>Up</button>
                      <button class="btn btn-primary btn-block" onClick={this.reset}>Reset</button>
                      <button class="btn btn-primary btn-block" onClick={this.decrement}>Down</button>
                      </div>
                  </div>
              </section>
              <script src="assets/js/jquery.min.js"></script>
              <script src="assets/bootstrap/js/bootstrap.min.js"></script>
          </body>
        </div>
      );
    }
}

export default App;
