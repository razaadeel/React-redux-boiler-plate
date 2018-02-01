import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

// import App from './App';
import MyRoutes from "./components/Routes";
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './App.css'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';



const muiTheme = getMuiTheme({
    palette: {
        textColor: Colors.grey800,
        primary1Color: Colors.teal500,
        primary2Color: Colors.yelow50,
        accent1Color: Colors.yelow50,
        pickerHeaderColor: Colors.teal500,
        alternateTextColor: Colors.yellow50
    }
});


ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <MyRoutes />
        </Provider>
    </MuiThemeProvider>
    , document.getElementById('root')
)
registerServiceWorker();


