import React, { Component } from "react";
import USC from "../../images/USC.png";
import { Navbar, NavbarBrand } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "darkred" }}>
          <NavbarBrand>
            <img src={USC} alt="Logo" width="150" height="80" />
          </NavbarBrand>
          <span
            class="navbar-text"
            style={{ color: "#ffffff", fontFamily: "Merriweather" }}
          >
            Teacher Admin Portal
          </span>
        </Navbar>
      </div>
    );
  }
}

export default Header;
