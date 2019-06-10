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
import Menu from "../components/menu"
import MediaLinks from "../components/media-links"

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
      <div className="site-container">
        <div className="sidebar">
          <section className={`sidebar__nav`} tabIndex="0">
            {/* <!-- Header Area Start--> */}
            <div>
              <h1 className="sidebar__nav-title">Sashas Portfolio</h1>
              <p className="sidebar__nav-description">
                I'm a multilingual, based in Sacramento area.
              </p>
            </div>

            {/* <!-- Menu Links Start --> */}
            <nav>
              <Menu />
            </nav>
            {/* <!-- Footer Area Start --> */}
            <footer>
              <div className="sidebar__nav-footer">© 2018.</div>
            </footer>
          </section>

          {/* <!-- Media Links Area Start--> */}
          <section className="sidebar__social u-centered">
            {/* <!-- Social Media Links --> */}
            {/* <!-- Menu Toggle --> */}
            <div className="nav-toggle nav-link nav-icon nav-toggle--active">
              <span className="nav-toggle__icon" />
            </div>
            <MediaLinks />
          </section>
        </div>
        {/*<!-- sidebar end --> */}
        {/* <!-- Media Links Area End--> */}
        {/* <!-- Site Navigation Area End--> */}
        {/* <!-- Site Main Content Area Start--> */}
        <main className={`content`}>{children}</main>
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
