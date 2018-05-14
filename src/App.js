import React, { Component } from 'react';
import ColorBlock from './components/ColorBlock'

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="App_title">Hello World - Color Picker</h1>
        <ColorBlock />
      </div>
    );
  }
}

export default App;
