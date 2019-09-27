import React from 'react'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
	topBackground: {
		backgroundColor: theme.palette.primary.main,
		height: "20vh"
	},
	bottomBackground: {
		backgroundColor: theme.palette.primary.light,
		marginTop: "20vh",
		height: "80vh",
		zIndex: -999
	},
	standardSize: {
		width: "100%",
		position: "absolute",
		zIndex: -999
	},
	childrenStyles: {
		zIndex: 1
	}
}));

const Background = props => {
	const classes = useStyles();
	return (
		<>
			<section className={[classes.topBackground, classes.standardSize].join(" ")}/>
			<section className={[classes.bottomBackground, classes.standardSize].join(" ")}/>
			<div className={classes.childrenStyles}>
				{props.children}
			</div>
		</>
	)
}

export default Background