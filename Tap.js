import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import App from "./App";

const Tap = props => {
  const [style, setStyle] = useState("light");
  function toggleStyle() {
    setStyle(style => (style === "light" ? "dark" : "light"));
  }
  
  return (
    <React.StrictMode>
    <BrowserRouter>
      <ThemeContext.Provider
        value={{ style, toggleStyle }}
      >
        <App />
      </ThemeContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
  );
};
export default Tap;
