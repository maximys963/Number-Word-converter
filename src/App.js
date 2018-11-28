import React, { Component } from 'react';
import './App.css'
// import 'antd/dist/antd.less'
import Interface from './components/interface'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='top-bar'>Number-Word Converter</div>
        <Interface/>
      </div>
    );
  }
}

export default App;
