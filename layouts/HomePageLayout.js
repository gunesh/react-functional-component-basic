import React, { useContext } from "react";
import AppNav from "./common/Nav";
import ThemeContext from "../utility/ThemeContext";

const HomepageLayout = props => {
  const { style, toggleStyle,loader,setLoader } = useContext(ThemeContext);
  return (
    <>
     {loader && (
        <div className="app-loader">
          <br />
          <br />
          Loading.......
        </div>
      )}
      <div className={style}>
        <AppNav />
        <br />
        <button className="btn btn-primary" onClick={toggleStyle}>
          Click here to see context example : {style}
        </button>{" "}
        <br />
        <br />
        <main className={"container "}>{props.children}</main>
      </div>
    </>
  );
};

export default HomepageLayout;
