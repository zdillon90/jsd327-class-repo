import React, { Component } from 'react';
// import '../App.css';

class ColorBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'blue'
    }
  }

  componentDidMount() {
    console.log('mounted');
    // Call a function in the main app to get the color
    // from the API and then pass the color down to the Block
    //
    // Use the a random number to create a unique rgb value
  }


  render() {
    const blockStyle = {
      fill: this.state.color,
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
