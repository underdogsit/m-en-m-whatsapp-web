import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
	  primary: {
		 main: "#1EBDA4",
		 light: "#d8dbd5",
		 dark: "#3b3b3b"
	  }
	}
 });
ReactDOM.render(
	<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));

serviceWorker.unregister();
