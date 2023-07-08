import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";

const rootElem = document.querySelector(".root");
const root = createRoot(rootElem);
root.render(<App />);
