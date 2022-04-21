import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Greet from './components/great'
import Welcome from './components/welcome';
import Message from './components/message';
import Counter from './components/counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>hi mom😊</h1> */}
        <Counter></Counter>
        {/*</div><Greet name="not vijit" age='18'>
          <p>This is  children</p>
        </Greet>
        <Greet name="not jit" age='19'>
          <button>Action</button>
        </Greet>
        <Welcome name="ninja hattori" age='18'></Welcome>
        <Welcome name="wada" age='19'></Welcome>
    <Welcome na`me="merul" age="100"></Welcome>*/}
      </div>  
      
    );
  }
}

export default App;
