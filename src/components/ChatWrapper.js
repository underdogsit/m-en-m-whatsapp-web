import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// Components:
import Chatballon from "../components/Chatballon";
import Chatsend from "../components/Chatsend";
import Contact from "../components/Contact";
import ContactLijst from "../components//ContactLijst";
import ToolbarLinks from "../components/ToolbarLinks";
import ToolbarRechts from "../components/ToolbarRechts";
import ChatWindow from "./ChatWindow";
import Searchchat from './Searchchat'
// html
const Chatwrapper = () => {
  const classes = useStyles();

  return (
    <div className={classes.Chatwrapper}>
      <div className={classes.wrapperToolbars}>
        <ToolbarLinks/>
        <ToolbarRechts/>
      </div>
      <div className={classes.wrapperContactLijstSearchchatContact}>
        <ContactLijst>
          <Searchchat/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
        </ContactLijst>

        <div className={classes.wrapperChatwindowChatsend}>
          <ChatWindow>
            <Chatballon />
            <Chatballon />
            <Chatballon />
            <Chatballon />
            <Chatballon />
          </ChatWindow>
          <Chatsend/>
        </div>
      </div>
    </div>
  );
};
export default Chatwrapper;

const useStyles = makeStyles(theme => ({
  Chatwrapper: {
    display: "flex",
    flexDirection: "column",
    width: "1051.96px",
    height: "fit-content",
    // border: "1px solid black",
    borderRadius: "2px",
  },
  wrapperToolbars: {
    width: "inherit",
    display: 'flex',
  },
  wrapperChatwindowChatsend: {
    width: "-webkit-fill-available",
    display: "flex",
    flexDirection: "column",
  },
  wrapperContactLijstSearchchatContact: {
    width: "inherit",
    display: 'flex',
  },

}));
