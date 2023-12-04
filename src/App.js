import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Destination from "./components/Destination";
import Packages from "./components/Packages";

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
        </div>
      </main>
    </div>
  );
}

export default App;
