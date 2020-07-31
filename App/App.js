import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import ThemeContext from "../utility/ThemeContext";
import store from "../redux/store/createStore";

import Router from "./Router";
const App = props => {
  const [style, setStyle] = useState("light");
  const [loader, setLoader] = useState(true);
  function toggleStyle() {
    setStyle(style => (style === "light" ? "dark" : "light"));
  }
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeContext.Provider value={{ style, toggleStyle,loader,setLoader }}>
            <Router />
          </ThemeContext.Provider>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};
export default App;
