import React from "react"
import resume from "../files/sasha_miller_resume.pdf"

const Menu = () => (
  <ul className="menu u-centered menu--active">
    <li className="menu__item">
      <a href="/#about" className="current menu__link nav-link">
        About
      </a>
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave wave--second"></div>
        <div className="wave wave--third"></div>
      </div>
    </li>
    <li className="menu__item">
      <a href="/#projects" className="menu__link nav-link">
        Projects
      </a>
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave wave--second"></div>
        <div className="wave wave--third"></div>
      </div>
    </li>
    <li className="menu__item">
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="menu__link nav-link"
      >
        Resume
      </a>
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave wave--second"></div>
        <div className="wave wave--third"></div>
      </div>
    </li>
    <li className="menu__item">
      <a href="/#contact-info" className="menu__link nav-link">
        Contact
      </a>
      <div className="wave-container">
        <div className="wave test"></div>
        <div className="wave wave--second"></div>
        <div className="wave wave--third"></div>
      </div>
    </li>
  </ul>
)

export default Menu
