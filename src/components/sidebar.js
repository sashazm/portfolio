import React from "react"
import Menu from "../components/menu"
import MediaLinks from "../components/media-links"

class Sidebar extends React.Component {
  render() {
    const classMenuActive = this.props.classMenuActive
    const classToggleActive = this.props.classToggleActive
    return (
      <div className={`sidebar ${classMenuActive}`}>
        <section className={`sidebar__nav`} tabIndex="0">
          {/* <!-- Header Area Start--> */}
          <div>
            <h1 className="sidebar__nav-title">
              Sasha<span className="sidebar__nav-title--alt">Miller</span>
            </h1>
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
            onClick={this.props.toggleMenu}
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
