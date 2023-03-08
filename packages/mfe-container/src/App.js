import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
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

const Nav = () => {
  return (
    <>
      <div>
        <NavLink to="/app1">
          <button>
            <h1>A1</h1>
          </button>
        </NavLink>
      </div>
      <div>
        <NavLink to="/app2">
          <button>
            <h1>A2</h1>
          </button>
        </NavLink>
      </div>
    </>
  );
};

function App({ history }) {
  return (
    <>
      <BrowserRouter history={history}>
        <Nav />
        <div>
          <Routes>
            <Route path="/app1" element={<App1 />} />
            <Route path="/app2" element={<App2 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
