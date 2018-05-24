import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import Swatch from './Swatch';

class SwatchButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors:[]
    }
  }

  render() {
    return(
      <React.Fragment>
        <Button.Group size='small'>
          <Button>
            <Icon type="up" />Remove
          </Button>
          <Button>
            Add<Icon type="down" />
          </Button>
        </Button.Group>
        <Swatch colorHex={this.state.colors} />
      </React.Fragment>
    )
  }
}

export default SwatchButtons;
