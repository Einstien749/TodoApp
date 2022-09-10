import App from "./app";
import ReactDOM from "react-dom/client";
import React from "react";
import './index.css';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import Reducer from "./red/reducer";

const store = createStore(Reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode><Provider store={store}><App /></Provider></React.StrictMode>);