// Use Tags from Ant Design
import React, { Component } from 'react';
import { Tag } from 'antd';

class Swatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorList: null
    }
  }

  render() {
    return(
      <div>
        <Tag />
      </div>
    )
  }
}
