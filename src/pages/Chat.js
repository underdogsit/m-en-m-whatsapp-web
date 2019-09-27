import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// // Components:
import Background from "../components/Background";
// import Chatballon from '../components/Chatballon'
// import Chatsend from "../components/Chatsend";
import ChatWrapper from "../components/ChatWrapper";
// import Contact from "../components/Contact";
// import ContactLijst from "../components//ContactLijst";
// import ToolbarLinks from "../components/ToolbarLinks";
// import ToolbarRechts from "../components/ToolbarRechts";

// html
const Chat = () => {
  const classes = useStyles();

  return (
    <Background>
      <div className={classes.inMidden}>
        <ChatWrapper/>
      </div>
    </Background>
  );
};

export default Chat;

// css
const useStyles = makeStyles(theme => ({
  inMidden: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    paddingTop: '40px',
    width: "100%",
    height: "100vh",
  }
}));
