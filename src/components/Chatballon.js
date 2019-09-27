import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// html
const Chatballon = props => {
  const classes = useStyles();

  return (
  <div className={classes.Chatballon}>
  <p className={classes.personcolor1}>Fernando Puga</p>{props.children}</div>
  )
};

export default Chatballon;

// css
const useStyles = makeStyles(theme => ({
  Chatballon: {
  width: "150px",
  height:"60px",
  backgroundColor: theme.palette.primary.ballon,
  border: "1px solid yellow",
  borderRadius: "6px",
  display: "flex",
  marginTop: "8px"
},
personcolor1: {
  color: "teal",
  paddingLeft: "7px",

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

