import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Destination from "./components/Destination";
import Packages from "./components/Packages";
import Book from "./components/Book";
import Testimonial from "./components/Testimonial";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <div>
          <div id="hero">
            <Hero />
          </div>

          <div id="services">
            <Services />
          </div>

          <div id="about">
            <About />
          </div>

          <div>
            <Destination />
          </div>

          <div id="package">
            <Packages />
          </div>

          <div id="package">
            <Book />
          </div>

          <div id="package">
            <Testimonial />
          </div>

          <div id="package">
            <Subscribe />
          </div>

          <div id="footer">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
