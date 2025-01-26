import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MapsProvider } from "./components/Map/MapContext/MapContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MapsProvider>
      <App />
    </MapsProvider>
  </React.StrictMode>
);
