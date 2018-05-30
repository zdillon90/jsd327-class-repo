import React, { Component, Fragment } from 'react';
import { Button, Icon } from 'antd';
import Swatch from './Swatch';
import { dataContext } from '../DataContext';

class SwatchButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors:[]
    }
  }

  render() {
    return(
      <dataContext.Consumer>
        {({ids, colorList, handleAdd, handleRemove}) => (
      <Fragment>
        <Button onClick={handleAdd} id={this.props.colorHex}>
          Add<Icon type="down" />
        </Button>
        <Swatch colorList={colorList} colorHex={this.props.colorHex} handleRemove={handleRemove} />
      </Fragment>
        )}
      </dataContext.Consumer>
    )
  }
}

export default SwatchButtons;
