import React from 'react';
import {Router, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from "./Navbar";
import Signin from './Signin';
import Signup from './Signup';


import createBrowserHistory from 'history/createBrowserHistory';

export const history = createBrowserHistory()

const MyRoutes = () => (
    <Router history={history}>
        <div>
            <Navbar />
            <br />
            <Route exact path="/" component={Home} />
            <Route path='/signup' component={Signup}/>
            <Route path='/signin' component={Signin}/>
        

        </div>
    </Router>
)

export default MyRoutes;