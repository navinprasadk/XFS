import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './MenuBar.css';

export default class MenuBarTop extends Component {

  render() {
    return (
      <Menu  borderless className="Menu_style">
      <Menu.Menu>
        <Menu.Item > <p className='Menu_title'>Xtreme Feedback System</p> </Menu.Item>   
        </Menu.Menu>
      </Menu>
    )
  }
}