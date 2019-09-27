import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// html
const Chatsend = () => {
  const classes = useStyles();

  return (
    <div className={classes.Chatsend}></div>
    )
};

export default Chatsend;

// css
const useStyles = makeStyles(theme => ({
  Chatsend: {
    width: "inherit",
    height:"51px",
    // Ander Grijs
    backgroundColor: theme.palette.primary.lichtergrijs,
    border: "1px solid pink",

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
  // }
}));
