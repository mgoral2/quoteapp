//topbar

import React, {Component} from 'react';
import {Navbar, Nav,NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

import './Topbar.css'
import img from './logo.png'

class Topbar extends Component {
  render() {
    return (
      <div className = "OuterDiv">
        <div className = "one">
        <a class="active" href="/">Who Needs A Quote!?</a>
        </div>
        <div className = "two">

        <a href="/SportsPage">Sports</a>

        <a className = "ATwo" href="/BusinessPage">Business</a>

        <a href="/PoliticsPage">Politics</a>
        </div>
        <div className = "rightbar">
        <a>Who Needs A Quote!?</a>
        </div>
      </div>

    )
  }
}

export default Topbar;
