import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, Home, SignUp } from "./views";
const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
    </BrowserRouter>
  );
};

export default App;
