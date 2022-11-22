import React from "react";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Products from "./Products/Products";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";

const Home = () => {
  return (
    <div className="container">
      <NavBar />
      <Header />
      <Services />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
