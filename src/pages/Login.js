import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Background from "../components/Background";
import Telefoon from "../afbeeldingen/telefoon.png";
import QRcode from "../afbeeldingen/QR.png";

// css
const useStyles = makeStyles(theme => ({
  inMidden: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  witVlak: {
    backgroundColor: "white",
    width: "700px", 
    minHeight: "200px",
    boxShadow: '0 0 13px 5px #0000003b',
    borderRadius: "2px",
    marginTop: "100px",
  },
  QRcode: {
    display: "hidden",
  },
  QRimg: {
    width: "70%",
    height: "70%",
  },
  Eerstedeel: {
    display: "flex",
    // justifyContent: "space-between",
    // margin: "0px 30px",
    flexWrap: 'wrap',
  },
  ul1: {
    display: "flex",
    flexDirection: "column",
    marginTop: "16px",
    listStyleType: "none",
  }, 
  Titel: {
    color: "#b5adbe",
  },
  Paragraaf: {
    color: "#867f8d",
  },
  Paragraaf4: {
    color: "teal",
  },
  Paragraaf5: {
  display: "flex",
  color: "#b5adbe",
  justifyContent: "flex-end",
  },
  Spanpara4en5: {
    display: "flex",
    justifyContent: "space-between",
    listStyleType: "none",
    margin: "0px 45px",
  },
  Telefoondiv: {
    display: "flex",
    justifyContent: 'center',
    backgroundColor: "#f8f9fa",
    paddingTop: "70px;",

  },
}));

// html
const Login = () => {
  const classes = useStyles();

  return (
    <Background>
      <div className={classes.inMidden}>
        <div className={classes.witVlak}>
        <br/> 

          <div className={classes.Eerstedeel}>
          <ul className={classes.ul1}>
          <h3 className={classes.Titel}>Om Whatsapp op uw computer te gebruiken</h3>
          <br/>
            <li className={classes.Paragraaf}>1.Open whatsapp op uw telefoon</li>
            <br/>
            <li className={classes.Paragraaf}>2.Tik op Menu of Instellingen en selecteer Whatsapp Web</li>
            <br/>
            <li className={classes.Paragraaf}>3.Richt uw telefoon naar dit scherm om de code te scannen</li>
            <br/>
          </ul>
          <div><img className={classes.QRimg} src={QRcode} alt="QR-code"></img></div>
          </div>
            <span className={classes.Spanpara4en5}>
            <li className={classes.Paragraaf4}>Hebt u hulp nodig om te beginnen?</li>
            <li className={classes.Paragraaf5}>Aangemeld blijven?</li>
            </span>

          <div className={classes.Telefoondiv}><img src={Telefoon} alt="Telefoon"></img></div>
        </div>
      </div>
    </Background>
  );
};

export default Login;
