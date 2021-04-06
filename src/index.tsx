import React from "react";
import ReactDOM from "react-dom";

import "./app.less";
import AntdDemo from "./pages/antdDemo";

const App = () => (
  <>
    <AntdDemo />
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
