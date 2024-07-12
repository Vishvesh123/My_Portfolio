import React from "react";
import "./contact.css";
import contactus from "./images/contactus.png";
function Contact() {
  return (
    <div className="Contacts">
      <div className="Contact">
        <div className="left-side">
          <img src={contactus} alt="" width="75%" />
        </div>
        <div className="right-side">
          <p>
            <i class="fa-solid fa-location-dot"></i>&nbsp; &nbsp; Akbarpur,
            Ambedkar Nagar, U.P.
          </p>
          <p>
            <i class="fa-solid fa-phone"></i>&nbsp; &nbsp; 6394966652
          </p>
          <p>
            <i class="fa-solid fa-envelope"></i>&nbsp; &nbsp;
            vishvesh2590@gmail.com
          </p>
          <div className="follow">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vishvesh-pandey-531144234/"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Vishvesh123"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-square-github"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
