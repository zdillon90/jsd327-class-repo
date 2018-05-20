import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

class CMYKChart extends Component {
  render() {
    const colors = ['#00FFFF', '#FF00FF', '#FFFF00', '#000000']
    const cmykData = [
      {color: 'Cyan', value: this.props.cmyk.c},
      {color: 'Magenta', value: this.props.cmyk.m},
      {color: 'Yellow', value: this.props.cmyk.y},
      {color: 'Key', value: this.props.cmyk.k}
    ]
    return(
      <BarChart layout="vertical" width={600} height={150} data={cmykData}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis type="number"/>
        <YAxis dataKey="color" type="category"/>
        <Tooltip/>
        <Bar dataKey="value">
          {
            cmykData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]}/>
            ))
          }
        </Bar>
      </BarChart>
    )
  }
}

export default CMYKChart;
