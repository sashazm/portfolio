import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaExternalLinkSquareAlt, FaCheck } from "react-icons/fa"

const CaseStudy = () => (
  <section id="projects" className="project">
    <hr className="line" />
    <header>
      <h1 className="section-title section-title--alt">Projects</h1>
    </header>

    <article className="case-study">
      <h2 className="section-title case-study__title--big">Akame hair salon</h2>
      {/* Single goal */}
      <section className="case-study__goal case-study__goal--initial">
        {/* Text */}
        <div>
          <p>
            <strong>Starting point: </strong>
          </p>
          <p className="case-study__title-text">
            Simulate being provided a concept from a designer by taking
            screenshots from premade template
            <a href="https://colorlib.com/wp/template/akame/" target="_blank">
              <span className="inline-link">
                {" "}
                https://colorlib.com/wp/template/akame/{" "}
              </span>
            </a>
            Write custom semantic HTML and SCSS to turn screenshots into a fully
            responsive page.
          </p>
          <p>
            <strong>Development strategy: </strong>
          </p>
          <ul className="case-study__list">
            <li className="case-study__list-item">
              Gulp for compiling with live reload during development.
            </li>
            <li className="case-study__list-item">
              BEM syntax for keeping CSS styles scoped for each component.
            </li>
            <li className="case-study__list-item">
              Dev dependencies managed with NPM.
            </li>
            <li className="case-study__list-item">
              Custom vanilla ES6 JavaScript to toggle mobile menu.
            </li>
          </ul>

          <p>
            <strong>
              <FaCheck className="case-study__title-icon" /> Result{" "}
            </strong>
            is highly maintainable and portable code.
          </p>
        </div>

        {/* Demo Link */}
        <div className="case-study__image-container">
          <AkameBackground />
          <a
            href="https://salon-demo.netlify.com"
            target="_blank"
            title="Akame demo on Netlify"
            className="image-link"
          >
            <FaExternalLinkSquareAlt className="image-link__icon" />

            <span className="image-link__text u-centered">Result Demo</span>
          </a>
        </div>
        <hr />
      </section>
      {/* Single goal */}
      <section className="case-study__goal">
        <p>
          <strong>Going further: </strong>
        </p>
        <p className="case-study__title-text">
          Simulate porting existing code as custom themes into Drupal,
          Wordpress, and Gatsby.js
        </p>
        <p>
          <strong>Development strategy: </strong>
        </p>
        <ul className="case-study__list">
          {/* Akame Drupal */}
          <li className="case-study__list-item">
            Drupal: theme styling custom block types.
          </li>
          {/* Akame Wordpress */}
          <li className="case-study__list-item">
            Wordpress: theme with multiple custom Gutenberg blocks built with
            React.
          </li>

          {/* Akame Guttenberg */}
          <li className="case-study__list-item">
            Gatsby.js: used individual React components.
          </li>
        </ul>
        <p>
          <strong>
            <FaCheck className="case-study__title-icon" /> Result:{" "}
          </strong>
          Refactored code that works natively within each system.
        </p>

        <p>
          <strong>Conclusion: </strong>
        </p>
      </section>
    </article>
  </section>
)

const AkameBackground = () => (
  <StaticQuery
    query={graphql`
      query {
        AkameBackground: file(relativePath: { eq: "akame-background.png" }) {
          childImageSharp {
            fluid(quality: 60, maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.AkameBackground.childImageSharp.fluid}
        className="case-study__image"
      />
    )}
  />
)

export default CaseStudy
