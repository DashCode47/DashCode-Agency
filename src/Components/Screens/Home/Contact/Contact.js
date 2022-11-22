import React, { useState } from "react";
import "./Contact.css";
import img1 from "../../../../assets/contact.png";

const Contact = () => {
  const [done, setdone] = useState(false);
  return (
    <div className="contact-container" id="Contact">
      <div className="contact-title">Hablemos de tu proyecto</div>
      <div className="contact-subtitle">
        ¡Encantados de ayudarte! Déjanos tus datos y te llamamos en 24/48H.
      </div>
      <div className="form-right">
        <img
          src={img1}
          style={{ height: 100, marginRight: 100, marginTop: 50 }}
        />
        <form>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Nombre"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for contacting us"}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
