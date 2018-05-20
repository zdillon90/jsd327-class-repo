import React, { Component } from 'react';
import { Modal, Row, Col } from 'antd';
import RGBChart from './RGBChart';
import CMYKChart from './CMYKChart';
import ColorText from './ColorText'

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
        title={`${this.state.color.name.value} - ${this.state.color.hex.value}`}
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        width={700}
      >
        <Row>
          <Col span={4}>
            <img src={this.state.color.image.bare} />
          </Col>
          <Col span={18}>
            <ColorText />
          </Col>
        </Row>
        <div style={{ marginTop: 20 }}>
          <RGBChart rgb={color.rgb}/>
          <CMYKChart cmyk={color.cmyk}/>
          <p>Some contents...</p>
        </div>
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
