import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RegisterForm from "./components/RegisterForm";
import './lang/i18n';

ReactDOM.render(
    <React.StrictMode>
        <RegisterForm />
    </React.StrictMode>,
  document.getElementById("root")
);
