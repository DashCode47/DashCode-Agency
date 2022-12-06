import React, { useState } from "react";
import "./NavBar.css";
import dash from "../../../../assets/dash.png";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { slide as Menu } from "react-burger-menu";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="burger-container" id="Home">
      <GiHamburgerMenu
        size={24}
        color="black"
        onClick={handleShow}
        className="burger"
      />
      <div
        className="navbar-container"
        style={{ display: show ? "flex" : "none" }}
      >
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

        <Link
          spy={true}
          to={"Contact"}
          activeClass="activeClasse"
          smooth={true}
        >
          <button className="tag-btn">Contacto</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
