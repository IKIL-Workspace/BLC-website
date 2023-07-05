import { useState } from "react";
import Customers from "./components/Customers";
import DevApi from "./components/DevApi";
import Navbar from "./components/Navbar";
import Prodcuts from "./components/Prodcuts";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Features from "./components/Features";
// import Learn from "./components/Learn";
import Contact from "./components/Contact";
import FAQs from "./components/FAQ";
import Team from "./components/Team";
import Privacy from "./components/Privacy";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />}>
          <Route index element={<HeroSection />} />
          <Route path="about" element={<About />} />
          <Route path="features" element={<Features />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQs />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
