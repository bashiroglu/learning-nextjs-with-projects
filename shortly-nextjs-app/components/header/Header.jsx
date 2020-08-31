import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header__text-box">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button href="" className="btn btn-rounded-big">
          Get Started
        </button>
      </div>
      <div className="header__draw">
        <img
          src="./assets/illustration-working.svg"
          alt="illustration working"
        />
      </div>
    </header>
  );
}
