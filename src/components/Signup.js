import React, { Component } from 'react';
import {fb} from '../config/firebase'
import {connect} from 'react-redux';
import { SignupUser } from '../store/action/action';
import { history } from './Routes'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';



class Signup extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            email: '',
            password: ''
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
        else if (field === 'name') {
            this.setState({ name: ev.target.value })
        }
    }
    submit() {
        let user = this.state;

        this.props.SignupUser(user);

    }
    render() {
        return (
            <div className='Signup'>
                <h1>SignUp</h1>
                <TextField
                    hintText="Example: Jones"
                    floatingLabelText="Enter Full Name"
                    onChange={this.getValue.bind(this, 'name')}
                />
                <br />
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
                <RaisedButton label="Submit" primary={true} onClick={this.submit.bind(this)} />
            </div>
        )
    }
}

function mapStateToProp(state){
    return({
        userName: state.root.userName,
        password: state.root.password
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        SignupUser: (user) => { dispatch(SignupUser(user)) }
    })
}

export default connect(mapStateToProp,mapDispatchToProp)(Signup);
