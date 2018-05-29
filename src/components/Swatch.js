import React, { Component } from 'react';
import { Tag } from 'antd';
import {dataContext} from '../DataContext'


class Swatch extends Component {
  render() {
    return(
      <div>
        <dataContext.Consumer>
          {(context)=> (
            <Tag color={context.colorList[0]}>{context.colorList[0]}</Tag>
          )}
        </dataContext.Consumer>
      </div>
    )
  }
}

export default Swatch;
