import React from "react";
import Navbar from "./components/sections/public/Navbar";
import Home from "./components/sections/home/Home";
import { Switch, Route, Redirect } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Pdfviewer from "./components/sections/pdfmerger/PDFViewer";
import ImageCompress from "./components/sections/image/ImageCompress";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pdfmerger" exact component={Pdfviewer} />
        <Route path="/imagecompressor" exact component={ImageCompress} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
