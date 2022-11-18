import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./config/global.style";
import ResetStyle from "./styles/reset.style";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </>
);
