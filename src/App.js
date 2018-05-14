import React, { Component } from 'react';
import ColorBlock from './components/ColorBlock'

class App extends Component {
  constructor(props) {
    super(props)
  }

  ranColor() {
    const redVal = Math.floor(Math.random() * 255);
    const greenVal = Math.floor(Math.random() * 255);
    const blueVal = Math.floor(Math.random() * 255);
    fetch(`http://www.thecolorapi.com/id?rgb=rgb(${redVal},${greenVal},${blueVal})`)
    .then((res) => res.json())
    .then((data) => {
      return data
    })
  }

  render() {
    let randomColor = this.ranColor()
    return (
      <div>
        <h1 className="App_title">Hello World - Color Picker</h1>
        <ColorBlock color={randomColor} />
      </div>
    );
  }
}

export default App;
