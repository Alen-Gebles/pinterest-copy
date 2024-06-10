import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";

function App() {
  return (
    <>
      <Navbar />
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
        <PageFive />
    </>
  );
}

export default App;
