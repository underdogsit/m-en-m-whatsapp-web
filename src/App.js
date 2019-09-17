import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Chat} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
