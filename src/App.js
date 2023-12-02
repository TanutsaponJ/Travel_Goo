import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";

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

          <About />
        </div>
      </main>
    </div>
  );
}

export default App;
