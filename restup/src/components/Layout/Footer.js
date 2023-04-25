import React from 'react';
import '../Layout/footer.css';
import { FaMapMarker, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>PIZZAUP<span>RESTAURANT</span></h3>
          <p className="footer-links">
            <a href="/login">Home</a>
            |
            <a href="/login">About</a>
            |
            <a href="/login">Contact</a>
            |
            <a href="/login">Blog</a>
          </p>
          <p className="footer-company-name">Copyright © 2023 
            <strong>PizzaUp</strong> All rights reserved
          </p>
        </div>
        <div className="footer-center">
          <div>
            <FaMapMarker />
            <p><span>Tunisie</span> Tunis</p>
          </div>
          <div>
            <FaPhone />
            <p>+216 73885858</p>
          </div>
          <div>
            <FaEnvelope />
            <p><a href="Contact">contact@pizzup.tn</a></p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>Temps de travail</span>
            <strong className='temps'>"Pizzup"</strong> <span className='tempstime'>11:00 - 01:00</span>


          </p>
          <div className="footer-icons">
            <a href="/"><FaFacebook /></a>
            <a href="/"><FaInstagram /></a>
            <a href="/"><FaLinkedin /></a>
            <a href="/"><FaTwitter /></a>
            <a href="/"><FaYoutube /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;