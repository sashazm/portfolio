import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaExternalLinkSquareAlt } from "react-icons/fa"
{
  /* <i class="fas fa-external-link-square-alt"></i> */
}

const CaseStudy = () => (
  <section className="case-study">
    <hr className="line" />
    <h2 className="case-study__title case-study__sub-title--alt">Case Study</h2>
    <h2 className="case-study__title case-study__title-big">
      Akame hair salon
    </h2>
    <div className="case-study__image-container">
      <AkameBackground />
      <a
        href="https://salon-demo.netlify.com"
        target="_blank"
        title="Akame demo on Netlify"
        className="image-link"
      >
        <FaExternalLinkSquareAlt className="image-link__icon" />

        <span className="image-link__text u-centered">Site Demo</span>
      </a>
    </div>
    <h3 className="case-study__title case-study__sub-title">
      Lorem ipsum about lorem ipsum ☺
    </h3>
    <p className="case-study__text">
      Lorem ipsum is a pseudo-Latin text used in web design, typography, layout,
      and printing in place of English to emphasise design elements over
      content. It's also called placeholder (or filler) text. It's a convenient
      tool for mock-ups. It helps to outline the visual elements of a document
      or presentation, eg typography, font, or layout. Lorem ipsum is mostly a
      part of a Latin text by the classical author and philosopher Cicero.
    </p>
    <h3 className="case-study__title case-study__sub-title">
      I don't know how I would feel if in the future my speech was used to
      represent a bunch of nonsense
    </h3>
    Its words and letters have been changed by addition or removal, so to
    deliberately render its content nonsensical; it's not genuine, correct, or
    comprehensible Latin anymore. While lorem ipsum's still resembles classical
    Latin, it actually has no meaning whatsoever. As Cicero's text doesn't
    contain the letters K, W, or Z, alien to latin, these, and others are often
    inserted randomly to mimic the typographic appearence of European languages,
    as are digraphs not to be found in the original.
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
