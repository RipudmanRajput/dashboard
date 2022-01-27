import React from "react";
import ReactDom from "react-dom";
import Header from "./Header";
import "./index.css"
import Taskbar from "./Taskbar";
import Progress from "./Progressblock";
import StatusBar from "./StatusBar";
import planning from "./img/planning.png"

ReactDom.render(
  <>
    <Header/>
    <Taskbar/>
    <Progress/>
    <StatusBar/>
     
  </>,
  document.getElementById('root')
)