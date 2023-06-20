import React from "react";
import "./App.css";
import Header from "./Components/Header.jsx";
import NavBar from "./Components/NavBar.jsx";
import Carousel from "./Components/Carousel.jsx";
import Banner from "./Components/Banner.jsx";
import DealOfWeek from "./Components/DealOfWeek.jsx";
import Footer from "./Components/Footer.jsx";
export default function App() {
  return (
    <div>
      <div className="abc">
        <Header />
        <NavBar />
        <Carousel />
        <Banner />
        <DealOfWeek />
        <Footer />
      </div>
    </div>
  );
}
