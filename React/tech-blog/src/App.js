import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import "./style/app.css";
import Footer from "./components/Footer/Footer.js";
import MainLg from "./components/Main/MainLg.js";

function App() {
  return (
    <div className="App">
      <body className="body">
        <header>
          <Navbar />
        </header>
        <main>
          <MainLg />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </div>
  );
}

export default App;
