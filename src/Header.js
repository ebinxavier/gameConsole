import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';


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
          <Navbar color="inverse" dark expand="md" style={{background:'black'}}>
            <NavbarBrand style={{fontSize:'25px',textAlign:"center"}}href="/">Game Console</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                <Link className="navigation" to='/dev'><i className="fa fa-puzzle-piece"></i> Developer Mode </Link>
                </NavItem>
                <NavItem>
                <Link className="navigation" to='/sign'> <i className="fa fa-sign-in" aria-hidden="true"></i> Sign In </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
  
export default Header;