import React from "react"
import {
  FaAt,
  FaGithub,
  FaDrupal,
  FaCodepen,
  FaFreeCodeCamp,
  FaPrint,
} from "react-icons/fa"

const MediaLinks = ({}) => (
  <>
    <a href="/" className="nav-icon nav-link" aria-label="Contact me">
      <FaAt />
    </a>
    <a
      href="https://github.com/sashazm"
      className="nav-icon nav-link"
      title="My code on Github"
      target="_blank"
    >
      <FaGithub />
    </a>
    <a
      href="https://www.drupal.org/u/sashaz"
      className="nav-icon nav-link"
      title="Drupal profile"
      target="_blank"
    >
      <FaDrupal />
    </a>
    <a
      href="https://codepen.io/dashboard"
      className="nav-icon nav-link"
      title="CodePen profile"
      target="_blank"
    >
      <FaCodepen />
    </a>
    <a
      href="https://www.freecodecamp.org/sashaz"
      className="nav-icon nav-link"
      title="Free Code Camp profile"
      target="_blank"
    >
      <FaFreeCodeCamp />
    </a>
    <a href="/" className="nav-icon nav-link" aria-label="Print resume">
      <FaPrint />
    </a>
  </>
)

export default MediaLinks
