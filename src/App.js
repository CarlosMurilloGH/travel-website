import React from "react";
import './App.css';
import AboutUs from "./Layouts/AboutUs/AboutUs";
import Footer from "./Layouts/Footer/Footer";
import Header from "./Layouts/Header/Header";
import Banner from "./Layouts/Main/Banner";
import PlacesToVisit from "./Layouts/PlacesToVisit/PlacesToVisit";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutUs />
      <PlacesToVisit />
      <Footer />
    </div>
  );
}

export default App;
