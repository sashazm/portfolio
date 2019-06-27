import PropTypes from "prop-types"
import React from "react"

const ProjectsTeaser = () => (
  <div>
    <hr className="line" />
    <h2 className="section-title section-title--alt">Highlighted Projects</h2>
    <article className="project">
      <div className="project__container">
        {/* <!-- Single Portfolio Link --> */}
        <h2>
          <a
            href="https://github.com/sashazm/MagnifAscent-d8Exersize"
            className="project__title"
          >
            MagnifAscent
          </a>
        </h2>
        <p>
          This is a Drupal 8 implementation of Build-A-Module site builder
          course for Drupal 7. While completing a course I received additional
          mentoring for building a Drupal 8 version, which allowed me to gain
          familiarity with tools and key principals of both Drupal 7 and Drupal
          8 site building.
        </p>
        <div>
          <ul className="project-links">
            <li className="project-links__single project-links__single--alt">
              <span>Drupal 8 theming</span>
            </li>
            <li className="project-links__single">
              <span>GitHub</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="project__container">
        {/* <!-- Single Portfolio Link --> */}
        <h2>
          <a
            href="https://codepen.io/sashazm/pen/wLerLw"
            target="_blank"
            className="project__title"
          >
            Little Prince
          </a>
        </h2>
        <p>
          This tribute page is a project for Responsive Web Design Certification
          from FreeCodeCamp. While fully meeting it's original requirements, it
          also features some "extra" touches to delight a visitor, custom
          animation takes book's original drawing and brings it to life and a
          quote generator brings a touch of interactivity.
        </p>
        <div>
          <ul className="project-links">
            <li className="project-links__single project-links__single--alt">
              <span>CodePen</span>
            </li>

            <li className="project-links__single">
              <span>CSS</span>
            </li>

            <li className="project-links__single">
              <span>HTML</span>
            </li>

            <li className="project-links__single">
              <span>JavaScript</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </div>
)

export default ProjectsTeaser
