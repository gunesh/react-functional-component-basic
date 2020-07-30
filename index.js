import React, { Component, createContext } from "react";
import { render } from "react-dom";
import Map from "./Map";
import Tap from "./Tap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

render(
  <Map />,
  document.getElementById("root")
);
