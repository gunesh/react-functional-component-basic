import React,{useContext} from "react";
import AppNav from "./common/Nav";
import ThemeContext from "../ThemeContext";

const HomepageLayout = props => {
  const { style, toggleStyle} = useContext(
    ThemeContext
  );
  return (
    <>
   
       <AppNav />
        <button onClick={toggleStyle}>Current Theme : {style}</button>
        <main className={"container "+style }>{props.children}</main>
    
    </>
  );
};

export default HomepageLayout;
