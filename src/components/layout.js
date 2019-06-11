/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import ImageMain from "../components/image-main"
import Sidebar from "./sidebar"

// reset before applying your styles
import "../sass/normalize.scss"
import "../sass/styles.scss"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false,
    }
  }
  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    const children = this.props.children
    const classMenuActive = this.state.showMenu ? "is-closed" : ""
    const classToggleActive = this.state.showMenu ? "" : "nav-toggle--active"
    return (
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
          <div className="site-container">
            <Sidebar
              toggleMenu={this.toggleMenu}
              classMenuActive={classMenuActive}
              classToggleActive={classToggleActive}
            />
            <main className={`content ${classMenuActive}`}>{children}</main>
            <ImageMain />
          </div>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
