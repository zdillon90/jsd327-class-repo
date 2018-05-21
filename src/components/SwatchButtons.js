import React, { Component } from 'react';
import { Button, Icon } from 'antd';

class SwatchButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors:[]
    }
  }

  render() {
    return(
      <Button.Group size='small'>
        <Button>
          <Icon type="up" />Remove
        </Button>
        <Button>
          Add<Icon type="down" />
        </Button>
      </Button.Group>
    )
  }
}

export default SwatchButtons;
