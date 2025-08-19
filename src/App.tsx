import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <section id="home" className="section home">
        <h1>Welcome to My Site</h1>
        <p>This is a professional landing page with a responsive navbar.</p>
      </section>
      <section id="features" className="section">
        <h2>Features</h2>
        <p>Highlight your features here.</p>
      </section>
      <section id="about" className="section">
        <h2>About</h2>
        <p>Write about your company here.</p>
      </section>
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Put contact info here.</p>
      </section>
    </>
  );
};

export default App;
