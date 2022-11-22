import React from "react";
import "./NavBar.css";
import dash from "../../../../assets/dash.png";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="navbar-container" id="Home">
      <Link spy={true} to={"Header"} activeClass="activeLogo" smooth={true}>
        <img src={dash} className="logo" alt="logo" />
      </Link>

      <div className="tags-container">
        <div
          className="tag"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Inicio
        </div>

        <Link
          spy={true}
          to={"Services"}
          activeClass="activeClasse"
          smooth={true}
        >
          <div className="tag">Servicios</div>
        </Link>
        <Link
          spy={true}
          to={"Nosotros"}
          activeClass="activeClasse"
          smooth={true}
        >
          <div className="tag">Nosotros</div>
        </Link>
      </div>

      <Link spy={true} to={"Contact"} activeClass="activeClasse" smooth={true}>
        <button className="tag-btn">Contacto</button>
      </Link>
    </div>
  );
};

export default NavBar;
