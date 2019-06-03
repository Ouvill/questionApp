import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { clearInterval } from "timers";
import Admin from "./components/Admin";
import {
  initializeCounter,
  incrementCounter,
  loadCounter,
  initializeCounterIfNoData
} from "./utils/localStorage";
import { BrowserRouter, Route } from "react-router-dom";
import Question from "./components/Question";
import Login from "./components/Login";
import Layout from "./components/Layout";
import { Root } from "./components/Root";

const App: React.FC = () => {
  useEffect(() => {
    initializeCounterIfNoData();
  }, []);

  useEffect(() => {
    console.log(loadCounter());
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Route path="/" exact component={Root} />
          <Route path="/question" component={Question} />
          <Route path="/admin" component={Login} />
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
