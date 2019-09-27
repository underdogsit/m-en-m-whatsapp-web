import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// html
const ContactLijst = props => {
  const classes = useStyles();

  return (
    <div className={classes.ContactLijst}>{props.children}</div>

    )
};

export default ContactLijst;

// css
const useStyles = makeStyles(theme => ({
  ContactLijst: {
    width: "311px",
    height:"auto",
    backgroundColor: theme.palette.primary.wit,
    border: "1px solid blue",

  },
  // iets: {
  //   width: "",
  //   height:"",
  // },
  // iets: {
  //   width: "",
  //   height:"",
  // },
  // iets: {
  //   width: "",
  //   height:"",
  // },
  // iets: {
  //   width: "",
  //   height:"",
  // }
}));
