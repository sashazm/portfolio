import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaExternalLinkSquareAlt, FaCheck } from "react-icons/fa"

const CaseStudy = () => (
  <section id="projects">
    <hr className="line" />
    <header>
      <h1 className="section-title section-title--alt">Case Study</h1>
    </header>

    <article className="case-study">
      <h2 className="section-title case-study__title--big">Akame hair salon</h2>

      {/* Starting point */}
      <h3>Starting point:</h3>
      <p className="case-study__title-text">
        Simulate being provided a concept from a designer by taking screenshots
        from premade template
        <a
          href="https://colorlib.com/wp/template/akame/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="inline-link">
            {" "}
            https://colorlib.com/wp/template/akame/{" "}
          </span>
        </a>
        Write custom semantic HTML and SCSS to turn screenshots into a fully
        responsive page.
      </p>

      {/* Development strategy */}
      <h3>Development strategy:</h3>
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

      {/* Result */}

      <h3 className="u-inline">
        <FaCheck className="case-study__title-icon" /> Result:{" "}
      </h3>
      <p className="u-inline">Highly maintainable and portable code.</p>

      {/* Demo Link */}
      <a
        className="case-study__image-container"
        href="https://salon-demo.netlify.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Akame demo on Netlify"
      >
        <AkameBackground />
        <div className="image-link">
          <FaExternalLinkSquareAlt className="image-link__icon external-link-icon" />

          <span className="image-link__text u-centered">Result Demo</span>
        </div>
      </a>

      {/* Going further */}
      <h3>Going further:</h3>
      <p className="case-study__title-text">
        Simulate porting existing code as custom themes into Drupal, Wordpress,
        and Gatsby.js
      </p>

      {/* Going further */}
      <h3>Development strategy:</h3>
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

      <h3 className="u-inline">
        <FaCheck className="case-study__title-icon" /> Result:{" "}
      </h3>
      <p className="u-inline">
        Refactored code that works natively within each system.
      </p>

      {/* <h3>Conclusion:</h3> */}
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
