import logo from "./logo.svg";
import "./App.css";
import { createBrowserHistory } from "history";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
const C1 = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>App 2 Component 1</h1>
      </header>
    </div>
  );
};

const C2 = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>App 2 Component 2</h1>
      </header>
    </div>
  );
};

const Nav = () => {
  return (
    <>
      <div>
        <NavLink to="/">
          <button>
            <h1>C1</h1>
          </button>
        </NavLink>
      </div>
      <div>
        <NavLink to="/c2">
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
      <BrowserRouter history={history}>
        <Nav />
        <Routes>
          <Route exact path="/" element={<C1 />} />
          <Route exact path="/c2" element={<C2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
