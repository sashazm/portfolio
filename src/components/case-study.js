import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CaseStudy = () => (
  <section className="case-study">
    <hr className="line" />
    <h2 className="case-study__sub-title">Case Study</h2>
    <h3 className="case-study__title u-centered">Akame hair salon</h3>
    <a
      href="https://salon-demo.netlify.com"
      target="_blank"
      title="Akame demo on Netlify"
    >
      <AkameBackground />
    </a>
    <p className="case-study__text">
      Multiple named cell tokens within and between rows create a single named
      grid area that spans the corresponding grid cells. Unless those cells form
      a rectangle, the declaration is invalid.
    </p>
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
