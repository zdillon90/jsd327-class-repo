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
        {({ids, colorList, handleAdd}) => (
      <Fragment>
        <Button.Group size='small'>
          <Button>
            <Icon type="up" />Remove
          </Button>
              <Button onClick={handleAdd} id={this.props.colorHex}>
            Add<Icon type="down" />
          </Button>
        </Button.Group>
        <Swatch colorList={colorList} colorHex={this.state.colors} />
      </Fragment>
        )}
      </dataContext.Consumer>
    )
  }
}

export default SwatchButtons;
