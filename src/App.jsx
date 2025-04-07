import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Mail from "./components/Mail.jsx";
import Features from "./components/Features.jsx";
import CTA from "./components/CTA.jsx";
import Reviews from "./components/Reviews.jsx";
import BtnTop from "./components/BtnTop.jsx";
import Footer from "./components/Footer.jsx";
import FAQ from "./components/FAQ.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <section id="feature">
                <Features />
              </section>
              <section id="reviews">
                <Reviews />
              </section>
              <CTA />
              <section id="mail">
                <Mail />
              </section>
              <BtnTop />
            </>
          }
        />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
