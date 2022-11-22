import React, { useEffect, useState } from "react";
import "./Intro.css";
import { Link } from "react-router-dom";
import rocket from "../../../assets/rocket.png";

const Intro = () => {
  const [fadeProp, setfadeProp] = useState({
    fade: "fade-out",
  });
  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "fade-out") {
        setfadeProp({ fade: "fade-in" });
      }
    }, 1000);
    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <div className="container-intro">
      <div className={[fadeProp.fade, "title"].join(" ")}>LISTO </div>
      <div className={[fadeProp.fade, "title"].join(" ")}>PARA EMPEZAR</div>
      <div className={[fadeProp.fade, "title"].join(" ")}>TU PROYECTO?</div>
      <Link to={"/home"} className={[fadeProp.fade, "btn-start"].join(" ")}>
        Empezar
      </Link>
      <img src={rocket} className="rocket" alt="rocket" />
    </div>
  );
};

export default Intro;
