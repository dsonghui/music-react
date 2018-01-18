import React, { Component } from 'react'
import DrawerItem from '../drawer-item/index'
import './style.styl'

class Drawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true,
    }
  }

  toggleDrawer = () => {
    this.setState({
      isShow: !this.state.isShow,
    })
  };

  render() {
    const { routeInfo } = this.props; // eslint-disable-line
    const { isShow } = this.state
    return (
      <div
        className={`drawer ${isShow ? '' : 'hide'}`}
        ref={(node) => { this.drawer = node }}
      >
        <i className="icon-menu" onClick={this.toggleDrawer} />
        {
          routeInfo.map(route => <DrawerItem key={route} route={route} isShow={isShow} />)
        }
      </div>
    )
  }
}

export default Drawer