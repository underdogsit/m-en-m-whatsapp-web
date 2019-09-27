import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// html
const ChatWindow = props => {
  const classes = useStyles();

  return (
    <div className={classes.ChatWindow}>{props.children}</div>
    )
};

export default ChatWindow;

// css
const useStyles = makeStyles(theme => ({
  ChatWindow: {
    width: "inherit",
    height:"391px",
    // Grijs
    backgroundColor: theme.palette.primary.grijs,
    border: "1px solid red",
    paddingLeft: "50px",

  },
  // iets: {
  //   width: "",
  //   height:"",
  // },
  // iets: {
  //   width: "",
  //   height:"",
  // }
}));
