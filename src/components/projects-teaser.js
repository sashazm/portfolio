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
          <a href="single.html" className="project__title">
            MagnifAscent
          </a>
        </h2>
        <div>
          <ul className="project-links">
            <li className="project-links__single project-links__single--alt">
              <span>Drupal 8 theming</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="project__container">
        {/* <!-- Single Portfolio Link --> */}
        <h2>
          <a href="single.html" className="project__title">
            Little Prince
          </a>
        </h2>
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
