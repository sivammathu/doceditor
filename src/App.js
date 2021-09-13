import React from "react";
import Navbar from "./components/sections/public/Navbar";
import Card from "./components/sections/home/Card";
import Content from "./components/sections/home/Content";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const App = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <Card />
    </div>
  );
};

export default App;
