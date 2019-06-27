import React from "react"
import Menu from "../components/menu"
import MediaLinks from "../components/media-links"

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //menu is closed by default
      MenuOpen: false,
    }
  }

  // on click change state to opposite of what it was. this is the close/open menu switch.
  toggleMenu = () => {
    this.setState({
      MenuOpen: !this.state.MenuOpen,
    })
  }

  render() {
    //  // create a css class for the hamburger button if the menu state is true, this will slide menu out
    const classMenuActive = this.state.MenuOpen ? "is-open" : ""
    // apply "X" icon to nav toggle when menu is open
    const classToggleActive = this.state.MenuOpen ? "nav-toggle--active" : ""

    return (
      <div className={`sidebar ${classMenuActive}`}>
        <section className="sidebar__nav" tabIndex="0">
          {/* <!-- Header Area Start--> */}
          <div>
            <h1 className="sidebar__nav-title">
              Sasha<span className="sidebar__nav-title--alt">Miller</span>
            </h1>
            <p className="sidebar__nav-description">
              I am a multilingual Web Developer, based in California.
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
          <button
            className={`nav-toggle nav-icon ${classToggleActive}`}
            onClick={this.toggleMenu}
          >
            <span className="nav-toggle__icon" />
          </button>
          <MediaLinks />
        </section>
      </div>
    )
  }
}

export default Sidebar
