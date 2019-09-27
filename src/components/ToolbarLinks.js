import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// html
const ToolbarLinks = props => {
  const classes = useStyles();

  return (
    <div className={classes.ToolbarLinks}>{props.children}</div>
    )
};

export default ToolbarLinks;
// css
const useStyles = makeStyles(theme => ({
  ToolbarLinks: {
    width: "312px",
    height:"47px",
    // Grijs
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

