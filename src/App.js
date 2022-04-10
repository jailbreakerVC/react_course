import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Greet from './components/great'
import Welcome from './components/welcome';
import Message from './components/message';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Message></Message>
        <Greet name="not vijit" age='18'>
          <p>This is  children</p>
        </Greet>
        <Greet name="not jit" age='19'>
          <button>Action</button>
        </Greet>
        <Welcome name="ninja hattori" age='18'></Welcome>
        <Welcome name="weolb" age='19'></Welcome>
        <Welcome name="oo" age="100"></Welcome>
      </div>  
    );
  }
}

export default App;
