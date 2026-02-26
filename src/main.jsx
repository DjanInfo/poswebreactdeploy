import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"   // ← ESSA LINHA É CRÍTICA

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/poswebreactdeploy">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
