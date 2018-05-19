import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

class RGBChart extends Component{
  constructor(props){
    super(props)
    this.state = {
      rgb: null
    }
  }

  componentWillReceiveProps(valueData){
    this.setState({
      rgb: valueData
    })
  }

	render () {
    const colors = ['#FF0000', '#00FF00', '#0000FF']
    const rgbData = [
      {color: 'Red', value: this.props.rgb.r},
      {color: 'Green', value: this.props.rgb.g},
      {color: 'Blue', value: this.props.rgb.b}
    ]
  	return (
    	<BarChart layout="vertical" width={600} height={300} data={rgbData}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis type="number"/>
        <YAxis dataKey="color" type="category"/>
        <Tooltip/>
        <Bar dataKey="value">
          {
            rgbData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]}  strokeWidth={index === 2 ? 4 : 1}/>
            ))
          }
        </Bar>
      </BarChart>
    );
  }
}

export default RGBChart;
