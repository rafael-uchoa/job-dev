import React from 'react';
import './styles.scss';
import { FaGithub, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="Footer">
      <div>
        <FaGithub className="react-icons" />
        <FaFacebook className="react-icons" />
        <FaInstagram className="react-icons" />
        <FaYoutube className="react-icons" />
      </div>
      <p>JobDev 2020 &copy;</p>
    </div>
  );
}
