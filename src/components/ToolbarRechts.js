import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// html
const ToolbarRechts = () => {
  const classes = useStyles();

  return (
    <div className={classes.ToolbarRechts}></div>
    )
};
export default ToolbarRechts;

// css
const useStyles = makeStyles(theme => ({
  ToolbarRechts: {
    width: "740.96px",
    height:"47px",
    backgroundColor: theme.palette.primary.lichtgrijs,
    border: "1px solid yellow",

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
