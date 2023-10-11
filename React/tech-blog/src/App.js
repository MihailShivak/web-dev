import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import "./style/app.css";
import Footer from "./components/Footer/Footer.js";
import Main from "./components/Main/Main.js";
import About from "./components/About/About.js";

function App() {
  return (
    <div className="App">
      <body className="body">
        <header>
          <Navbar />
        </header>
        <main>
          <About />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </div>
  );
}

export default App;
