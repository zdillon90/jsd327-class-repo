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
    const colorData = this.state.color
    const colorText = colorData ? (
      <text x="30" y="15" fontFamily="Verdana" fontSize="12" fill="gray">{colorData.name.value}</text>
    ) : (
      <div></div>
    )
    return(
      <svg width="125" height="125">
        <rect x="20" y="20" rx="20" ry="20"
          width="100" height="100" style={blockStyle} />
        {colorText}
      </svg>
    )
  }
}

export default ColorBlock;
