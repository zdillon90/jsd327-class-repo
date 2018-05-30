import React, { Component } from 'react';
import ColorModal from './ColorModal';

class ColorBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: null,
      rgbValue: null,
      visible: false,
    }
  }

  componentDidMount() {
    // TODO: Move this up to the App component
    const redVal = Math.floor(Math.random() * 255);
    const greenVal = Math.floor(Math.random() * 255);
    const blueVal = Math.floor(Math.random() * 255);
    fetch(`https://www.thecolorapi.com/id?rgb=rgb(${redVal},${greenVal},${blueVal})`)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        color: data,
        rgbValue: `rgb(${redVal},${greenVal},${blueVal})`
      })
    })
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.state.color);
    this.setState({
      visible: true,
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
      <text x="30" y="15" fontFamily="Verdana" fontSize="12" fill="gray">
        {colorData.name.value}
      </text>
    ) : (
      <div></div>
    )
    return(
        <svg width="125" height="125">
          <rect x="20" y="20" rx="20" ry="20"
            width="100" height="100" style={blockStyle}
            onClick={(e) => this.handleClick(e)}
          />
          {colorText}
        <ColorModal
          visible={this.state.visible}
          color={this.state.color}
        />
        </svg>
    )
  }
}

export default ColorBlock;
