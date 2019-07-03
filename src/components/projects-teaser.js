import React from "react"

const ProjectsTeaser = () => (
  <section>
    <hr className="line" />
    <header>
      <h2 className="section-title section-title--alt">Highlighted Projects</h2>
    </header>
    <article className="project">
      {/* <!-- Single Portfolio Link --> */}
      <h2 className="project__title">MagnifAscent</h2>
      <a
        href="https://github.com/sashazm/MagnifAscent-d8Exersize"
        target="_blank"
        rel="noopener noreferrer"
        className="project__link"
      >
        view code
      </a>
      <p>
        This is a Drupal 8 implementation of Build-A-Module site builder course
        for Drupal 7. While completing a course I received additional training,
        which allowed me to gain experience with tools and key principals of
        both Drupal 7 and Drupal 8 site building.
      </p>
      <div>
        <ul className="project__tags">
          <li className="project__tag">
            <span>Drupal 8 site building</span>
          </li>
          <li className="project__tag">
            <span>GitHub</span>
          </li>
        </ul>
      </div>
    </article>

    <article className="project">
      {/* <!-- Single Portfolio Link --> */}
      <h2 className="project__title">Little Prince</h2>
      <a
        href="https://codepen.io/sashazm/pen/wLerLw"
        target="_blank"
        rel="noopener noreferrer"
        className="project__link"
      >
        view code
      </a>

      <p>
        This tribute page is a project for Responsive Web Design Certification
        from FreeCodeCamp. While fully meeting it's original requirements, it
        also features some "extra" touches to delight a visitor, custom
        animation takes book's original drawing and brings it to life and a
        quote generator brings a touch of interactivity.
      </p>
      <div>
        <ul className="project__tags">
          <li className="project__tag">
            <span>CodePen</span>
          </li>

          <li className="project__tag">
            <span>CSS</span>
          </li>

          <li className="project__tag">
            <span>HTML</span>
          </li>

          <li className="project__tag">
            <span>JavaScript</span>
          </li>
        </ul>
      </div>
    </article>
  </section>
)

export default ProjectsTeaser
