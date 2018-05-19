import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class ColorModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      color: null,
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      visible: newProps.visible,
      color: newProps.color
    })
  }

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }



  render() {
    const color = this.state.color
    const modalElement = color ? (
      <Modal
        title={this.state.color.name.value}
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    ) : (
      <div></div>
    )
    return (
      <div>
        {modalElement}
      </div>
    )
  }
}

export default ColorModal;
