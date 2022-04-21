import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded absolute inset-x-0 bottom-0">
      <div className="flex flex-row space-x-2">
        <a href="/about" className="link link-hover">About</a>
        <a href="/contact" className="link link-hover">Contact</a>
        <a href="/stats" className="link link-hover">Stats</a>
        <a href="https://paypal.me/soorajmodi" target="_blank" rel="noreferrer">Donate</a>
      </div>
      <a href="https://github.com/Botomir" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <p>Copyright © 2022 Sooraj Modi.</p>
    </footer>
  );
}

export default Footer;
