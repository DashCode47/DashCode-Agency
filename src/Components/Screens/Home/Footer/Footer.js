import React from "react";
import "./Footer.css";
import bg from "../../../../assets/Footer.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div style={{ backgroundImage: `url(${bg})` }} className="footer-bg">
        <div className="footer-title">Contactanos:</div>
        <div className="footer-mail">davsh47@hotmail.com</div>
        <div className="footer-mail">(+7)9375764627</div>
        <div className="footer-copy">
          © COPYRIGHT 2022 DashCode AGENCIA DIGITAL
        </div>
      </div>
    </div>
  );
};

export default Footer;
