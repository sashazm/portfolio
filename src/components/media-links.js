import React from "react"
import {
  FaAt,
  FaGithub,
  FaDrupal,
  FaCodepen,
  FaFreeCodeCamp,
  FaPrint,
} from "react-icons/fa"
import resume from "../files/sasha_miller_resume.pdf"

const MediaLinks = () => (
  <>
    <a
      href="mailto:sashazm85@gmail.com"
      className="nav-icon nav-link"
      title="Write an email"
    >
      <FaAt />
    </a>
    <a
      href="https://github.com/sashazm"
      className="nav-icon nav-link"
      title="My code on Github"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub />
    </a>
    <a
      href="https://www.drupal.org/u/sashaz"
      className="nav-icon nav-link"
      title="Drupal profile"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaDrupal />
    </a>
    <a
      href="https://codepen.io/dashboard"
      className="nav-icon nav-link"
      title="CodePen profile"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaCodepen />
    </a>
    <a
      href="https://www.freecodecamp.org/sashaz"
      className="nav-icon nav-link"
      title="Free Code Camp profile"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFreeCodeCamp />
    </a>
    <a
      href={resume}
      className="nav-icon nav-link"
      aria-label="Print resume"
      title="Print Resume"
    >
      <FaPrint />
    </a>
  </>
)

export default MediaLinks
