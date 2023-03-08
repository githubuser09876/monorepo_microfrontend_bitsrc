import logo from "./logo.svg";
import "./App.css";
import { createBrowserHistory } from "history";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
const C1 = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`${process.env.REACT_APP_APP1_HOST}${logo}`}
          className="App-logo"
          alt="logo"
        />
        <h1>App 1 Component 1</h1>
      </header>
    </div>
  );
};

const C2 = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`${process.env.REACT_APP_APP1_HOST}${logo}`}
          className="App-logo"
          alt="logo"
        />
        <h1>App 1 Component 2</h1>
      </header>
    </div>
  );
};

const Nav = () => {
  return (
    <>
      <div>
        <NavLink to="/app1/c1">
          <button>
            <h1>C1</h1>
          </button>
        </NavLink>
      </div>
      <div>
        <NavLink to="/app1/c2">
          <button>
            <h1>C2</h1>
          </button>
        </NavLink>
      </div>
    </>
  );
};

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <>
      {/* <C1 /> */}
      <BrowserRouter history={history}>
        <Nav />
        <Routes>
          <Route path="/app1/c1" element={<C1 />} />
          <Route path="/app1/c2" element={<C2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
