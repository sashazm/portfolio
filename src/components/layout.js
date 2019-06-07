/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

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
      <div class="site__container">
        <div class="sidebar">
        <section class="sidebar__nav" tabindex="0">
          {/* <!-- Header Area Start--> */}
            <div class="site__info" >
              <h1 class="site__title" >Sashas Portfolio</h1>
              <p class="site__description">
                I'm a multilingual, based in Sacramento area.
              </p>
            </div>

            {/* <!-- Menu Links Start --> */}
            <nav class="menu__container">
              <ul class="menu menu--active">
                <li class="menu__item">
                  <a href="index.html" class="current menu__link">Home</a>
                  <div class="wave-container">
                    <div class="wave"></div>
                    <div class="wave wave--second"></div>
                    <div class="wave wave--third"></div>
                  </div>
                </li>
                <li class="menu__item">
                  <a href="about.html" class="menu__link">About</a>
                  <div class="wave-container">
                    <div class="wave"></div>
                    <div class="wave wave--second"></div>
                    <div class="wave wave--third"></div>
                  </div>
                </li>
                <li class="menu__item"><a href="scroll.html" class="menu__link">Hobbies</a></li>
                <li class="menu__item"><a href="contact.html" class="menu__link">Resume</a></li>
              </ul>
            </nav>
            {/* <!-- Footer Area Start --> */}
          <footer>
            <div class="site__footer">
              © 2018.
            </div>
          </footer>
        </section>

        {/* <!-- Media Links Area Start--> */}
        <section class="sidebar__social">

          {/* <!-- Social Media Links --> */}
           {/* <!-- Menu Toggle --> */}
          <div class="nav-toggle">
            <div class="nav-toggle__icon">1</div>
          </div>
          <a href="#" class="social-icon email"><i class="fas fa-at"></i>2</a>
          <a href="#" class="social-icon github"><i class="fab fa-github"></i>3</a>
          <a href="#" class="social-icon drupal"><i class="fab fa-drupal"></i>4</a>
          <a href="#" class="social-icon codepen"><i class="fab fa-codepen"></i>5</a>
          <a href="#" class="social-icon codecamp"><i class="fa fa-free-code-camp"></i>6</a>

        </section>
        </div> {/*<!-- sidebar end --> */}
        {/* <!-- Media Links Area End--> */}
        {/* <!-- Site Navigation Area End--> */}

        {/* <!-- Site Main Content Area Start--> */}
        <main class="content">{children}</main>
        {/* // <!-- Featured Image Start --> */}
      <div class="site__container-featured-image">
        <div class="featured-image"></div>
      </div>
      {/* // <!-- Featured Image End --> */}

      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
