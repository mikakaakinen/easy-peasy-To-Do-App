import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";
import Footer from "./Footer";
import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
