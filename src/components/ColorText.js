import React, { Component } from 'react';

class ColorText extends Component {
  render() {
    const text = `In a RGB color space, hex #a94444 is composed of 66.3% red, 26.7% green and 26.7% blue. Whereas in a CMYK color space, it is composed of 0% cyan, 59.8% magenta, 59.8% yellow and 33.7% black. It has a hue angle of 0 degrees, a saturation of 42.6% and a lightness of 46.5%. #a94444 color hex could be obtained by blending #ff8888 with #530000. Closest websafe color is: #993333.`
    return(
      <p>{text}</p>
    )
  }
}

export default ColorText;
