import React, { Component } from 'react';
import { dataContext } from './DataContext'
import ColorBlock from './components/ColorBlock'
import 'antd/dist/antd.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.handleAdd = (e) => {
      let colorId = e.target.id
      this.setState(state => ({
        colorList: this.state.colorList.concat([`${colorId}`])
      }));
    }

    this.handleRemove = (colorId) => {
      console.log('handle Remove')
      console.log(colorId)
      let currentColorList = this.state.colorList
      console.log(currentColorList)
      let colorIdIndex = currentColorList.indexOf(colorId)
      console.log(currentColorList)
      if (colorIdIndex > - 1) {
        currentColorList.splice(colorIdIndex, 1);
      }
      console.log(currentColorList)
      this.setState(state => ({
        colorList: currentColorList
      }));
    }

    this.state = {
      ids: null,
      colorList: [],
      handleAdd: this.handleAdd,
      handleRemove: this.handleRemove,
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

  render() {
    const blockIds = this.state.ids
    const blocks = blockIds ? (
      blockIds.map((d) => {
        return <ColorBlock key={d} />
      })
    ) : (
      <h3>Loading...</h3>
    )
    return (
      <dataContext.Provider value={this.state}>
        <div>
          <h1 className="App_title">Hello World - Color Picker</h1>
          {blocks}
        </div>
      </dataContext.Provider>
    );
  }
}

export default App;
