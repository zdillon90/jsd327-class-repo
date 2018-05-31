import 'antd/dist/antd.css'
import React, { Component } from 'react';
import { dataContext } from './DataContext'
import ColorBlock from './components/ColorBlock'
import { Layout, message } from 'antd';
const { Content, Footer } = Layout;


class App extends Component {
  constructor(props) {
    super(props)

    this.handleAdd = (e) => {
      let colorId = e.target.id
      let colorIdIndex = this.state.colorList.indexOf(colorId)
        if (colorIdIndex === -1) {
        this.setState(state => ({
          colorList: this.state.colorList.concat([`${colorId}`])
        }));
      } else {
        message.error('Color already added');
      }
    }

    this.handleRemove = (colorId) => {
      let currentColorList = this.state.colorList
      let colorIdIndex = currentColorList.indexOf(colorId)
      if (colorIdIndex > - 1) {
        currentColorList.splice(colorIdIndex, 1);
      }
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
    for (let i = 0; i < 72; i++) {
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
        <Layout className="layout" style={{minHeight: '100vh'}}>
          <h1 style={{ paddingLeft: 24, paddingTop: 12 }}>Color Picker</h1>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24 }}>
              {blocks}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Zach Dillon / MIT
          </Footer>
        </Layout>
      </dataContext.Provider>
    );
  }
}

export default App;
