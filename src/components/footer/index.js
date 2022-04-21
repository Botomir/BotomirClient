import React from 'react';
import Logo from '../../assets/botomir.png';

function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content absolute inset-x-0 bottom-0 w-full">
      <div className="flex flex-col justify-center items-center text-center w-full">
        <img src={Logo} alt="Botomir Logo" className="h-28" />
        <span className="flex justify-center items-center w-full">Botomir</span>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a href="/" className="link link-hover">Branding</a>
        <a href="/" className="link link-hover">Design</a>
        <a href="/" className="link link-hover">Marketing</a>
        <a href="/" className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a href="/" className="link link-hover">About us</a>
        <a href="/" className="link link-hover">Contact</a>
        <a href="/" className="link link-hover">Jobs</a>
        <a href="/" className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a href="/" className="link link-hover">Terms of use</a>
        <a href="/" className="link link-hover">Privacy policy</a>
        <a href="/" className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
}

export default Footer;
