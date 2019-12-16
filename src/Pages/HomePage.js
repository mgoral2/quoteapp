import React, {Component}  from 'react';

import Topbar from "./Components/Topbar";
import logoImage from './Images/logo.jpg';

import './HomePage.css'


class HomePage extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <div className = "Image">
        <img src = {logoImage} width = "600" height = "600"/>
        </div>
        <div className ="Instructions">
        <p>Select a link above to see some amazing quotes!</p>
        </div>
      </div>
    )
  }
}

export default HomePage;
