import React, { Component } from 'react';
import ColorBlock from './components/ColorBlock'
import 'antd/dist/antd.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ids: null,
      colorList: ["#2db7f5"],
      // Move the color list to the App layer and then pass it down to the
      // The modal list buttons
    }
  }

  componentDidMount() {
    const ids = []
    for (let i = 0; i < 10; i++) {
      const id = Math.random().toString(36).substr(2, 5)
      ids.push(id)
    }
    this.setState({ ids: ids })
  }

  handleAdd = (e) => {
    this.setState({
      
    })
  }

  render() {
    const blockIds = this.state.ids
    const blocks = blockIds ? (
      blockIds.map((d) => {
        return <ColorBlock colorList={this.state.colorList} key={d} />
      })
    ) : (
      <h3>Loading...</h3>
    )
    return (
      <div>
        <h1 className="App_title">Hello World - Color Picker</h1>
        {blocks}
      </div>
    );
  }
}

export default App;
