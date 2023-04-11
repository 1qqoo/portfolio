import "./styles/main.css";
import React from "react";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* <Home /> */}
      <Projects />
      {/* <Contacts /> */}
      <Footer />
    </div>
  );
}

export default App;
