import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
    render() {
      return (
        <footer className="footer" style={{}}>
            <div className="container text-center" >
              <div>
                Copyright © 2018 gameConsole Inc. All rights reserved.
              </div>
              <div >
              <a href=""><i className="fa fa-facebook"></i></a>
              <a href=""><i className="fa fa-telegram"></i></a>
              <a href=""><i className="fa fa-linkedin"></i></a>
              <a href=""><i className="fa fa-google-plus"></i></a>
              <a href=""><i className="fa fa-whatsapp"></i></a>
              </div>
            </div>
        </footer>
      );
    }
  }

  export default Footer;