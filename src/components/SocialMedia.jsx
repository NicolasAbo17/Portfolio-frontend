import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/nicolasabo/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
    <a href="https://www.instagram.com/nabondano/" target="_blank" rel="noopener noreferrer">
      <BsInstagram />
    </a>
    <a href="https://github.com/NicolasAbo17" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
  </div>
);

export default SocialMedia;
