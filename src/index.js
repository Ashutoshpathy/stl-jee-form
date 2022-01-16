import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header.jsx";
import Navbar from "./Navbar";
import Firstform from "./Firstform";

ReactDOM.render(
  <React.Fragment>
   <Header/>
   <Navbar/>
   <Firstform/>
   </React.Fragment>,
   document.getElementById("root")

   );
