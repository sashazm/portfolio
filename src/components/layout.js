/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import ImageMain from "../components/image-main"
import Header from "./header"
// reset before applying your styles
import "../sass/normalize.scss"
import "../sass/styles.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      // <!-- Site Navigation Area Start-->
      <div className="site__container">
        <div className="sidebar">
          <section className="sidebar__nav" tabindex="0">
            {/* <!-- Header Area Start--> */}
            <div className="site__info">
              <h1 className="sidebar__title">Sashas Portfolio</h1>
              <p className="sidebar__description">
                I'm a multilingual, based in Sacramento area.
              </p>
            </div>

            {/* <!-- Menu Links Start --> */}
            <nav>
              <ul className="menu menu--active">
                <li className="menu__item">
                  <a href="index.html" className="current menu__link">
                    Home
                  </a>
                  <div className="wave-container">
                    <div className="wave"></div>
                    <div className="wave wave--second"></div>
                    <div className="wave wave--third"></div>
                  </div>
                </li>
                <li className="menu__item">
                  <a href="about.html" className="menu__link">
                    About
                  </a>
                  <div className="wave-container">
                    <div className="wave"></div>
                    <div className="wave wave--second"></div>
                    <div className="wave wave--third"></div>
                  </div>
                </li>
                <li className="menu__item">
                  <a href="scroll.html" className="menu__link">
                    Hobbies
                  </a>
                </li>
                <li className="menu__item">
                  <a href="contact.html" className="menu__link">
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            {/* <!-- Footer Area Start --> */}
            <footer>
              <div className="sidebar__footer">© 2018.</div>
            </footer>
          </section>

          {/* <!-- Media Links Area Start--> */}
          <section className="sidebar__social u-centered">
            {/* <!-- Social Media Links --> */}
            {/* <!-- Menu Toggle --> */}
            <div className="nav-toggle">
              <div className="nav-toggle__icon nav-icon">1</div>
            </div>
            <a href="#" className="nav-icon email">
              <i className="fas fa-at"></i>2
            </a>
            <a href="#" className="nav-icon github">
              <i className="fab fa-github"></i>3
            </a>
            <a href="#" className="nav-icon drupal">
              <i className="fab fa-drupal"></i>4
            </a>
            <a href="#" className="nav-icon codepen">
              <i className="fab fa-codepen"></i>5
            </a>
            <a href="#" className="nav-icon codecamp">
              <i className="fa fa-free-code-camp"></i>6
            </a>
          </section>
        </div>{" "}
        {/*<!-- sidebar end --> */}
        {/* <!-- Media Links Area End--> */}
        {/* <!-- Site Navigation Area End--> */}
        {/* <!-- Site Main Content Area Start--> */}
        <main className="content is-closed">{children}</main>
        {/* // <!-- Featured Image Start --> */}
        <ImageMain />
        {/* // <!-- Featured Image End --> */}
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
