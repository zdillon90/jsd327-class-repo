import React, { Component } from 'react';
import { Tag } from 'antd';


class Swatch extends Component {
  render() {
    const colorList = this.props.colorList
    return(
      <div>
        {colorList.map((colorHex) => 
          <Tag key={colorHex} color={colorHex}>
            {colorHex}
          </Tag>
        )}
      </div>
    )
  }
}

export default Swatch;
