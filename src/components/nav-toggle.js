import PropTypes from "prop-types"
import React from "react"

class NavToggle extends React.Component {
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
    // create a css class if the menu state is true
    const classMenuActive = this.state.showMenu ? "" : "is-closed"

    // create a css class for the hamburger button if the menu state is true
    const classToggleActive = this.state.showMenu ? "nav-toggle--active" : ""
    return <h1>Hello, {this.props.name}</h1>
  }
}

export default NavToggle
