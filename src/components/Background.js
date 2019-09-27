import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Whatsapplogo from './WhatsappLogo';

const useStyles = makeStyles(theme => ({
	topBackground: {
		backgroundColor: theme.palette.primary.main,
		height: "20%",
	},
	bottomBackground: {
		backgroundColor: theme.palette.primary.light,
		height: "80%vh",
		zIndex: -999
	},
		standardSize: {
		width: "100%",
		position: "absolute",
		zIndex: -999
		},
	childrenStyles: {
		zIndex: 1,
	},
}));

const Background = props => {
	const classes = useStyles();
	return (
		<>
			<section className={[classes.topBackground, classes.standardSize].join(" ")}/>
			<Whatsapplogo/>
			<section className={[classes.bottomBackground, classes.standardSize].join(" ")}/>
			
			<div className={classes.childrenStyles}>
				{props.children}
			</div>
		</>
	)
}

export default Background