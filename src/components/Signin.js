import React, { Component } from 'react';
import {fb} from '../config/firebase'
import { connect } from 'react-redux';
import { SigninUser } from '../store/action/action';

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
// import Loading from './loading';
import { history } from './Routes'





class Signin extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
        fb.auth().onAuthStateChanged((user) => {
            if (user) {
                history.push('/');
            }
        })
    }






    getValue(field, ev) {
        if (field === 'email') {
            this.setState({ email: ev.target.value })
        }
        else if (field === 'password') {
            this.setState({ password: ev.target.value })
        }
    }
    login() {
        let user = this.state;
        this.props.SigninUser(user);
    }

    signUp() {
        history.push('/signup');
    }

    render() {
        return (
            < div className='Signin' >
                <h1>Login</h1>
                <TextField
                    hintText="example@example.com"
                    floatingLabelText="Enter Email"
                    onChange={this.getValue.bind(this, 'email')}
                />
                <br />

                <TextField
                    type='password'
                    floatingLabelText="Enter Password"
                    onChange={this.getValue.bind(this, 'password')}
                />
                <br />

                <RaisedButton label="Login" primary={true} onClick={this.login.bind(this)} style={{ margin: 10 }} />
                <RaisedButton label="Sign Up" secondary={true} onClick={this.signUp.bind(this)} />
            </div>

        )
    }
}

// function mapStateToProp(state) {
//     return ({
//         userName: state.root.userName
//     })
// }
function mapDispatchToProp(dispatch) {
    return ({
        SigninUser: (user) => { dispatch(SigninUser(user)) }
    })
}

export default connect(null, mapDispatchToProp)(Signin);
