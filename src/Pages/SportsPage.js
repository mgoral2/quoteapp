//SportsPage

import React, {Component}  from 'react';
import MainComponent from "./Components/MainComponent";
import Topbar from "./Components/Topbar";

import imgBB from './Images/Sports/BillBelichick.jpg';
import imgDJ from './Images/Sports/DerekJeter.jpg';
import imgGP from './Images/Sports/GreggPopovich.jpeg';

import imgMJ from './Images/Sports/MichaelJordan.jpg';
import imgPJ from './Images/Sports/PhilipJackson.jpeg';
import imgTB from './Images/Sports/TomBrady.jpg';

var sports1 = {
  image1: imgBB,
  image2: imgDJ,
  image3: imgGP,

  name1: "Bill Belichick",
  name2: "Derek Jeter",
  name3: "GreggPopovich",

  link1: "/SportsPage/BillBelichick",
  link2: "/SportsPage/DerekJeter",
  link3: "/SportsPage/GreggPopovich",
}

var sports2 = {
  image1: imgMJ,
  image2: imgPJ,
  image3: imgTB,

  name1: "Michael Jordan",
  name2: "Philip Jackson",
  name3: "Tom Brady",

  link1: "/SportsPage/MichaelJordan",
  link2: "/SportsPage/PhilipJackson",
  link3: "/SportsPage/TomBrady",
}

class SportsPage extends Component {
  render() {
    return (
      <div>
        <Topbar />
          <MainComponent data = {sports1} />
          <MainComponent data = {sports2} />
      </div>
    )
  }
}

export default SportsPage;
