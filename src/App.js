import "./App.scss";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main/Main";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import MySkillsPage from "./pages/MySkillsPage/MySkillsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/ContactPage" component={ContactPage} />
          <Route exact path="/AboutPage" component={AboutPage} />
          <Route exact path="/SkillsPage" component={MySkillsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
