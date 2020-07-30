import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeContext from "../utility/ThemeContext";
import Router from "./Router";

const App = props => {
  const [style, setStyle] = useState("light");
  function toggleStyle() {
    setStyle(style => (style === "light" ? "dark" : "light"));
  }
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ThemeContext.Provider value={{ style, toggleStyle }}>
          <Router />
        </ThemeContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
export default App;
