import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Header }  from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import {BloodtestForm} from "./components/BloodtestForm/BloodtestForm"
import HomePage from "./HomePage";
import { useQuery } from "@apollo/client";
import { SELF } from "./api/queries";
import { Self } from "./api/__generated__/Self";
import "./App.css";

function App() {
  const { data } = useQuery<Self>(SELF);

  return (
    <div className="App">
      <Header user={data?.self} />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route
          path="/home"
          render={() => <HomePage />}
        />
        <Route path="/addbloodtest">
          <BloodtestForm />
        </Route>
      </Switch>
      <Footer />
    </div>
    
  );
}

export default App;
