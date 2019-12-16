//BusinessPage

import React, {Component}  from 'react';
import MainComponent from "./Components/MainComponent";
import Topbar from "./Components/Topbar";

import imgMB from './Images/Business/MichaelBurry.jpg';
import imgWB from './Images/Business/Warren_Buffett.jpg';
import imgKG from './Images/Business/Ken_Griffin.jpg';

import imgJB from './Images/Business/JeffBezos.png';
import imgJM from './Images/Business/JoeMansueto.jpg';
import imgMZ from './Images/Business/MarkZuckerberg.jpg';

var business1 = {
  image1: imgMB,
  image2: imgWB,
  image3: imgKG,

  name1: "Michael Burry",
  name2: "Warren Bufett",
  name3: "Kenneth Griffin",

  link1: "/BusinessPage/MichaelBurry",
  link2: "/BusinessPage/WarrenBuffett",
  link3: "/BusinessPage/KennethGriffin",
}

var business2 = {
  image1: imgJB,
  image2: imgJM,
  image3: imgMZ,

  name1: "Jeffrey Bezos",
  name2: "Joe Mansueto",
  name3: "Mark Zuckerberg",

  link1: "/BusinessPage/JeffreyBezos",
  link2: "/BusinessPage/JoeMansueto",
  link3: "/BusinessPage/MarkZuckerberg",
}



class BusinessPage extends Component {
  render() {
    return (
      <div>
      <Topbar />
      <MainComponent data = {business1} />
      <MainComponent data = {business2} />
      </div>

    )
  }
}

export default BusinessPage;
