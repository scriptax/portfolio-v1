import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/build/index.css";

const rootElem = document.querySelector(".root");
const root = createRoot(rootElem);
root.render(<App />);
