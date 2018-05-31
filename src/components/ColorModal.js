import React, { Component } from 'react';
import { Modal, Row, Col } from 'antd';
import RGBChart from './RGBChart';
import CMYKChart from './CMYKChart';
import ColorText from './ColorText';
import SwatchButtons from './SwatchButtons';

class ColorModal extends Component {
  handleOk = (e) => {
    console.log('inside ColorModeal handle click')
    this.props.handleOk()
  }

  handleCancel = (e) => {
    this.props.handleCancel()
  }

  render() {
    const color = this.props.color
    const modalElement = color ? (
      <Modal
        title={`${this.props.color.name.value} - ${this.props.color.hex.value}`}
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        width={700}
      >
        <Row>
          <Col span={4}>
            <img src={this.props.color.image.bare} alt="Color Selected" />
          </Col>
          <Col span={18}>
            <ColorText color={this.props.color}/>
          </Col>
        </Row>
        <div style={{ marginTop: 20 }}>
          <RGBChart rgb={color.rgb}/>
          <CMYKChart cmyk={color.cmyk}/>
          <SwatchButtons colorHex={color.hex.value}/>
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
