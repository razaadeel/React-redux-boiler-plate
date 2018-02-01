import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AppDrawer from './Drawer';
import {fb} from '../config/firebase'


const style = {
  margin: '0'
}

class Navbar extends Component {
  constructor() {
    super();
    this.state = { open: false, user: { name: '' } };
  }
  handleToggle = () => {
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ open: !this.state.open })

      }
      
  })

   
  };

  render() {

    return (
      <div>
        <AppBar
          style={style}
          titleStyle={{ textAlign: "center", fontFamily: "Wide Latin" }}
          title="@APP"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.handleToggle}

        />
        <AppDrawer open={this.state.open} change={this.handleToggle} />
      </div>
    )
  }
}








export default Navbar;