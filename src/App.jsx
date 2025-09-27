import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";

import Front from "./Components/Front";
import Footer from "./Components/Footer";
import AboutAuthor from "./Components/Aboutdeveloper";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default route (Front as Home) */}
        <Route path="/WetherAPP-reactbased-/" element={<Front />} />
        {/* About page */}
        <Route path="/about" element={<About />} />
      
        <Route path="/Aboutauthor" element={<AboutAuthor />} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
