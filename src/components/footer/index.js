import React from 'react';

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded absolute inset-x-0 bottom-0">
      <div className="grid grid-flow-col gap-4">
        <a href="/about" className="link link-hover">About</a>
        <a href="/contact" className="link link-hover">Contact</a>
        <a href="/stats" className="link link-hover">Stats</a>
        <a href="https://paypal.me/soorajmodi" target="_blank" rel="noreferrer">Donate</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/Botomir" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 Sooraj Modi.</p>
      </div>
    </footer>
  );
}

export default Footer;
