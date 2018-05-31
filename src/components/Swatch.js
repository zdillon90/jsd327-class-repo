import React, { Component } from 'react';
import { Tag, Popconfirm, message } from 'antd';


class Swatch extends Component {
  constructor(props) {
    super(props)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  handleConfirm(colorHex) {
    this.props.handleRemove(colorHex)
    message.success('Color Removed');
  }
  
  handleCancel(e) {
    console.log(e);
    message.error('Action Canceled');
  }

  render() {
    const colorList = this.props.colorList
    return(
      <div>
        {colorList.map((colorHex) => 
          <Popconfirm
          key={colorHex}
          title={`Delete color: ${colorHex}`}
          onConfirm={() => this.handleConfirm(colorHex)} 
          onCancel={this.handleCancel} 
          okText="Yes" 
          cancelText="No"
          >
            <Tag onClick={this.handleClick} color={colorHex}>
              {colorHex}
            </Tag>
          </Popconfirm>
        )}
      </div>
    )
  }
}

export default Swatch;
