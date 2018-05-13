import React, { Component } from 'react';
import ColorBlock from './components/ColorBlock'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    fetch('http://www.thecolorapi.com/id?rgb=rgb(30,71,171)')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
  }

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
