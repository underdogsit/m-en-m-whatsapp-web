import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Background from '../components/Background';

// css
const useStyles = makeStyles(theme => ({
}))

// html
const Login = () => {
  const classes = useStyles();

  return (
    <Background>
		 <h1>Login</h1>
	 </Background>
  )
}

export default Login
