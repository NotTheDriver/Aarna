import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Departments from "./department/Departments";
// import Stickyfooter from "./footer/Stickyfooter";
import Map from "./map/Map";
// import BodyParts from "./bodyParts/BodyParts";

function App() {
  return (
    <div>
      <Header />
      <Departments />
      {/* <BodyParts /> */}
      <Map />
      <Footer />
      {/* <Stickyfooter /> */}
    </div>
  );
}

export default App;
