import React, { Component } from 'react';

class ColorText extends Component {
  render() {
    const color = this.props.color
    const exactMatch = color.name.exact_match_name ? (
      `The name "${color.name.value}" is an exact match to the hex value: ${color.hex.value}.`
    ) : (
      `The name "${color.name.value}" is not an exact match to the hex value: ${color.hex.value}. The closest hex value to the name is: ${color.name.closest_named_hex}.`
    )
    const text = `In a RGB color space, hex ${color.hex.value} is composed of ${Math.round(color.rgb.fraction.r * 100)}% red, ${Math.round(color.rgb.fraction.g * 100)}% green and ${Math.round(color.rgb.fraction.b * 100)}% blue. Whereas in a CMYK color space, it is composed of ${color.cmyk.c}% cyan, ${color.cmyk.m}% magenta, ${color.cmyk.y}% yellow and ${color.cmyk.k}% black. ${exactMatch}`
    return(
      <p>{text}</p>
    )
  }
}

export default ColorText;
