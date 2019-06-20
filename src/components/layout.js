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
      MenuOpen: false, //menu is closed by default//MenuOpen
    }
  }

  // on click change state to opposite of what it was. this is the close/open menu switch.
  toggleMenu = () => {
    this.setState({
      MenuOpen: !this.state.MenuOpen,
    })
  }

  render() {
    const children = this.props.children
    //  // create a css class for the hamburger button if the menu state is true, this will slide menu out
    const classMenuActive = this.state.MenuOpen ? "is-open" : ""
    // apply "X" icon to nav toggle when menu is open
    const classToggleActive = this.state.MenuOpen ? "nav-toggle--active" : ""
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
          <div>
            <Sidebar
              toggleMenu={this.toggleMenu}
              classMenuActive={classMenuActive}
              classToggleActive={classToggleActive}
            />
            <div className={`content-container ${classMenuActive}`}>
              <main className="content l-container">{children}</main>
              <ImageMain />
            </div>
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
