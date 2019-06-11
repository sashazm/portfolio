import PropTypes from "prop-types"
import React from "react"
import Menu from "../components/menu"
import MediaLinks from "../components/media-links"

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    // Determines whether the mobile menu is showing or not
    this.state = { showMenu: false }
  }

  // toggle the mobile menu visibility by reversing the current state of the showMenu
  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    const classMenuActive = this.state.showMenu ? "is-closed" : ""
    const classToggleActive = this.state.showMenu ? "" : "nav-toggle--active"
    return (
      <div className={`sidebar ${classMenuActive}`}>
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
          {/* when button is clicked fire up a toggleMenu method */}
          <div
            className={`nav-toggle nav-icon ${classToggleActive}`}
            onClick={this.toggleMenu}
          >
            <span className="nav-toggle__icon" />
          </div>
          <MediaLinks />
        </section>
      </div>
    )
  }
}

export default Sidebar
