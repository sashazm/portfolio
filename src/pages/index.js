import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import "typeface-montserrat"
// Load Saira Extra Condensed typeface
require("typeface-saira-extra-condensed")

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />

    {/* <!-- Single Portfolio Link --> */}
    <div className="projects__container">
      <article className="project">
        <div className="project__container">
          <h2>
            <a href="single.html" className="project__title">
              Akame Hairsalon
            </a>
          </h2>
          <div>
            <ul className="cat-links">
              <li className="cat-links__single cat-links__single--alt">
                <span>JavaScript</span>
              </li>

              <li className="cat-links__single">
                <span>HTMl</span>
              </li>

              <li className="cat-links__single">
                <span>SASS</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* <!-- Single Portfolio Link --> */}
      <article className="project">
        <div className="project__container">
          <h2>
            <a className="project__title" href="single.html">
              Akame Hairsalon
              <br />
              <span className="project__title--alt">Guttenberg Blocks</span>
            </a>
          </h2>
          <div>
            <ul className="cat-links">
              <li className="cat-links__single cat-links__single--alt">
                <span>WordPress</span>
              </li>

              <li className="cat-links__single">
                <span>React JS</span>
              </li>

              <li className="cat-links__single">
                <span>JSX</span>
              </li>

              <li className="cat-links__single">
                <span>PHP</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* <!-- Single Portfolio Link --> */}
      <article className="project">
        <div className="project__container">
          <h2>
            <a href="single.html" className="project__title">
              Akame Hairsalon <br />
              <span className="project__title--alt">Gatsby JS.</span>
            </a>
          </h2>
          <div>
            <ul className="cat-links">
              <li className="cat-links__single cat-links__single--alt">
                <span>GraphQL</span>
              </li>

              <li className="cat-links__single">
                <span>JSX</span>
              </li>

              <li className="cat-links__single">
                <span>JavaScript</span>
              </li>

              <li className="cat-links__single">
                <span>SASS</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* <!-- Single Portfolio Link --> */}
      <article className="project">
        <div className="project__container">
          <h2>
            <a href="single.html" className="project__title">
              "The Little Prince"
              <br /> <span className="project__title--alt">Tribute page</span>
            </a>
          </h2>
          <div>
            <ul className="cat-links">
              <li className="cat-links__single cat-links__single--alt">
                <span>CodePen</span>
              </li>

              <li className="cat-links__single">
                <span>HTML</span>
              </li>

              <li className="cat-links__single">
                <span>CSS</span>
              </li>

              <li className="cat-links__single">
                <span>JavaScript</span>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)

export default IndexPage
