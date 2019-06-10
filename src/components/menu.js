import PropTypes from "prop-types"
import React from "react"

const Menu = ({}) => (
  <ul className="menu u-centered menu--active">
    <li className="menu__item">
      <a href="index.html" className="current menu__link nav-link">
        Home
      </a>
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave wave--second"></div>
        <div className="wave wave--third"></div>
      </div>
    </li>
    <li className="menu__item">
      <a href="about.html" className="menu__link nav-link">
        About
      </a>
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave wave--second"></div>
        <div className="wave wave--third"></div>
      </div>
    </li>
    <li className="menu__item">
      <a href="scroll.html" className="menu__link nav-link">
        Hobbies
      </a>
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave wave--second"></div>
        <div className="wave wave--third"></div>
      </div>
    </li>
    <li className="menu__item">
      <a href="contact.html" className="menu__link nav-link">
        Resume
      </a>
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave wave--second"></div>
        <div className="wave wave--third"></div>
      </div>
    </li>
  </ul>
)

export default Menu
