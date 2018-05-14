import React, { Component } from 'react';
// import '../App.css';

class ColorBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: null,
      rgbValue: null,
    }
  }

  componentDidMount() {
    // TODO: Move this up to the App component
    console.log('running');
    const redVal = Math.floor(Math.random() * 255);
    const greenVal = Math.floor(Math.random() * 255);
    const blueVal = Math.floor(Math.random() * 255);
    fetch(`http://www.thecolorapi.com/id?rgb=rgb(${redVal},${greenVal},${blueVal})`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      this.setState({
        color: data,
        rgbValue: `rgb(${redVal},${greenVal},${blueVal})`
      })
    })
  }


  render() {
    const blockStyle = {
      fill: this.state.rgbValue,
      stroke: 'gray',
      strokeWidth:5
    };
    return(
      <svg width="100" height="100">
        <rect width="100" height="100" style={blockStyle} />
      </svg>
    )
  }
}

export default ColorBlock;
