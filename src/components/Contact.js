import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// html
const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.Contact}></div>
    )
};

export default Contact;

// css
const useStyles = makeStyles(theme => ({
  Contact: {
    width: "inherit",
    height:"57px",
    backgroundColor: theme.palette.primary.wit,
    border: "1px solid teal",
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
