import React from "react"
import { Link } from "gatsby"
import resume from "../files/sasha_miller_resume.pdf"

class Menu extends React.Component {
  render() {
    return (
      <ul className="menu u-centered menu--active">
        <li className="menu__item">
          {/* on click update Sidebar state which closes the menu */}
          <Link
            to="/#about"
            className="current menu__link nav-link"
            onClick={this.props.handleLinkClick}
          >
            About
          </Link>
          <div className="wave-container">
            <div className="wave"></div>
            <div className="wave wave--second"></div>
            <div className="wave wave--third"></div>
          </div>
        </li>
        <li className="menu__item">
          {/* on click update Sidebar state which closes the menu */}
          <Link
            to="/#projects"
            className="menu__link nav-link"
            onClick={this.props.handleLinkClick}
          >
            Projects
            {/* on click update Sidebar state which closes the menu */}
          </Link>
          <div className="wave-container">
            <div className="wave"></div>
            <div className="wave wave--second"></div>
            <div className="wave wave--third"></div>
          </div>
        </li>
        <li className="menu__item">
          {/* on click update Sidebar state which closes the menu */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="menu__link nav-link"
            onClick={this.props.handleLinkClick}
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
          {/* on click update Sidebar state which closes the menu */}
          <Link
            to="/#contact-info"
            className="menu__link nav-link"
            onClick={this.props.handleLinkClick}
          >
            Contact
            {/* on click update Sidebar state which closes the menu */}
          </Link>
          <div className="wave-container">
            <div className="wave"></div>
            <div className="wave wave--second"></div>
            <div className="wave wave--third"></div>
          </div>
        </li>
      </ul>
    )
  }
}
export default Menu
