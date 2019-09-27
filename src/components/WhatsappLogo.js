import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from '../Images/Logowhatsapp.jpg';

// html
const Contact = props => {
  const classes = useStyles();

  return (
	  <>
	<div className={classes.wrapperImg}><img className={classes.Whatsapplogo} src={Logo} alt="foto"></img>
	Whatsappweb</div>
	<div>{props.children}</div>
	</>
    )
};

export default Contact;

// css
const useStyles = makeStyles(theme => ({

	// LogoWrapper
	wrapperImg: {
		height: '50px',
		width: '50px',
		display: "flex",
		position: "absolute",
		zIndex: -999,
		// Text whatsappweb
		color: theme.palette.primary.wit,
	},
	// Logo
	Whatsapplogo: {
		height: '50px',
		width: '50px',
	},

}));
