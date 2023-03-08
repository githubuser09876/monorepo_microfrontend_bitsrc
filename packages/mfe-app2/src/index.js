import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
// import * as serviceWorker from "./serviceWorker";

window.renderApp2 = (containerId, history) => {
  // ReactDOM.render(
  //   <App history={history} />,
  //   document.getElementById(containerId)
  // );
  const root = createRoot(document.getElementById(containerId));
  root.render(<App history={history} />);
  // serviceWorker.unregister();
};

window.unmountApp2 = (containerId) => {
  // const root = createRoot(document.getElementById(containerId));
  // root.unmount();
};

if (!document.getElementById("App2-container")) {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <div>
      <h3>Not Meant to Run Individually</h3>
    </div>
  );
}
