import "./styles/main.css";
import "./styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import ScrollToTop from "./utils/scrollToTop.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/project/:id"
            element={<Project />}
          />
          <Route
            path="/contacts"
            element={<Contacts />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
