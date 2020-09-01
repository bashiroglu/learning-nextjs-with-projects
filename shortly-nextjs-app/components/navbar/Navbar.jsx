import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link href="/">
          <a>
            <img src="./assets/logo.svg" alt="shortly logo" />
          </a>
        </Link>
      </div>
      <div
        className={`navbar__ham-box`}
        onClick={() => {
          setMobileNavbar(!mobileNavbar);
        }}
      >
        <button className={`ham-link ${mobileNavbar && "mobile"}`}>
          <img
            src="./assets/icon-hamburger.svg"
            className="ham"
            alt="hamberger icon"
          />
          <img
            src="./assets/icon-close.svg"
            className="close"
            alt="close icon"
          />
        </button>
      </div>
      <div className={`navbar__links ${mobileNavbar && "mobile"}`}>
        <ul className="navbar__links-box navbar__navigation-box">
          <li onClick={() => setMobileNavbar(false)}>
            <Link href="/">
              <a className="navbar__link">Home</a>
            </Link>
          </li>
          <li onClick={() => setMobileNavbar(false)}>
            <Link href="/features">
              <a className="navbar__link">Features</a>
            </Link>
          </li>
          <li onClick={() => setMobileNavbar(false)}>
            <Link href="/pricing">
              <a className="navbar__link">Pricing</a>
            </Link>
          </li>
        </ul>
        <ul className="navbar__links-box navbar__sign-box">
          <li>
            <a href="https://rel.ink" target="blank" className="navlink">
              Login
            </a>
          </li>
          <li>
            <a
              href="https://rel.ink"
              target="blank"
              className="navlink btn btn-sign-up btn-rounded-big"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
