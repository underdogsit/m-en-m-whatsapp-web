import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// html
const Searchchat = () => {
  const classes = useStyles();

  return (
    <div className={classes.Searchchat}> </div>
    )
};

export default Searchchat;

// css
const useStyles = makeStyles(theme => ({
  Searchchat: {
    width: "inherit",
    height: "37px",
    backgroundColor: "#fefefe",
    display: 'flex',
  },
}));
