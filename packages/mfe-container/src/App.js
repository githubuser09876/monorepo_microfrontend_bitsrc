import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const defaultHistory = createBrowserHistory();

const { REACT_APP_APP1_HOST: app1Host, REACT_APP_APP2_HOST: app2Host } =
  process.env;

function Header() {
  return (
    <div className="banner">
      <h1 className="banner-title"></h1>
      <h4>Two different Apps</h4>
    </div>
  );
}

function App1({ history }) {
  return <MicroFrontend history={history} host={app1Host} name="App1" />;
}

function App2({ history }) {
  return <MicroFrontend history={history} host={app2Host} name="App2" />;
}

function Home({ history }) {
  return (
    <div className="home">
      <div className="content">
        <div className="app1">
          <App1 />
        </div>
        <div className="app2">
          <App2 />
        </div>
      </div>
    </div>
  );
}

function App() {
  return <Home />;
}

export default App;
