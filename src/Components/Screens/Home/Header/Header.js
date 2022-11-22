import React, { useState, useEffect } from "react";
import "./Header.css";
import header1 from "../../../../assets/header1.jpg";
import header2 from "../../../../assets/header2.jpg";
import header3 from "../../../../assets/header3.jpg";
import header4 from "../../../../assets/header4.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
const Header = () => {
  const [fadeProp, setfadeProp] = useState({
    fade: "fade-out",
    fadeimg: "fade-out",
  });
  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "fade-out") {
        setfadeProp({ fade: "fade-in" });
      }
    }, 800);
    return () => clearInterval(timeout);
  }, [fadeProp]);
  return (
    <div className="container-header" id="Header">
      <div className={[fadeProp.fade, "header-title"].join(" ")}>
        Creemos algo grandioso juntos
      </div>

      <div className="container-images">
        <img src={header1} alt="" className="header-images" />
        <img src={header2} alt="" className="header-images" />
        <img src={header3} alt="" className="header-images" />
        <img src={header4} alt="" className="header-images" />
      </div>
      <button className="header-btn">
        Contactanos
        <AiOutlineArrowRight className="Arrow-logo" size={22} />
      </button>
    </div>
  );
};

export default Header;
