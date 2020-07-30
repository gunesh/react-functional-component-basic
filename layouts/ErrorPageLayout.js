import React,{useContext} from "react";
import AppNav from "./common/Nav";
const ErrorPageLayout = props => {
  return (
    <>
       <AppNav />
        <main className={"container"}>{props.children}</main>
    
    </>
  );
};

export default ErrorPageLayout;
