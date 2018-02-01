import React, { Component } from 'react';
import { SignOut } from '../store/action/action';
import { connect } from 'react-redux';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import src from './img.png'
import { history } from './Routes'

const style = {
  height: 172,
  width: 255,
  textAlign: 'center',
  display: 'inline-block',
  padding: 0
};

class AppDrawer extends Component {
  menuClick(route) {
    if (route === '/logout') {
      this.props.change();
      this.props.SignOut()
    }
    else {
      history.push(route);
      this.props.change();
    }
  }
  
  render() {
    
    return (
      <div>
        <Drawer open={this.props.open} docked={false} onRequestChange={this.props.change}>
          <AppBar
            title='Close'
            style={{ boxShadow: 0 }}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            onLeftIconButtonClick={this.props.change}
          />
          <Paper style={style} zDepth={1} >
            <img src={src} alt="" style={style} />
          </Paper>
          <Divider />
          <MenuItem onClick={this.menuClick.bind(this, '/')} >Home</MenuItem>
          <Divider />
          <MenuItem onClick={this.menuClick.bind(this, '/logout')} >Logout</MenuItem>
          <Divider />
        </Drawer>

      </div>
    )
  }
}

function mapStateToProp(state) {
  return ({
    userName: state.root.userName
  })
}
function mapDispatchToProp(dispatch) {
  return ({
    SignOut: () => { dispatch(SignOut()) }
  })
}


export default connect(mapStateToProp, mapDispatchToProp)(AppDrawer);