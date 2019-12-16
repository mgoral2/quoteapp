//PoliticsPage

import React, {Component}  from 'react';
import MainComponent from "./Components/MainComponent";
import Topbar from "./Components/Topbar";

import imgBO from './Images/Politics/BarackObama.jpeg';
import imgDT from './Images/Politics/DonaldTrump.jpeg';
import imgJK from './Images/Politics/JohnKennedy.jpeg';

import imgAL from './Images/Politics/AbrahamLincoln.jpg';
import imgGW from './Images/Politics/GeorgeWashington.jpg';
import imgGB from './Images/Politics/GeorgeBush.jpeg';


var politics1 = {
  image1: imgBO,
  image2: imgDT,
  image3: imgJK,

  name1: "Barack Obama",
  name2: "Donald Trump",
  name3: "John Kennedy",

  link1: "/PoliticsPage/BarackObama",
  link2: "/PoliticsPage/DonaldTrump",
  link3: "/PoliticsPage/JohnKennedy",
}

var politics2 = {
  image1: imgAL,
  image2: imgGW,
  image3: imgGB,

  name1: "Abraham Lincoln",
  name2: "George Washington",
  name3: "George Bush",

  link1: "/PoliticsPage/AbrahamLincoln",
  link2: "/PoliticsPage/GeorgeWashington",
  link3: "/PoliticsPage/GeorgeBush",
}

class PoliticsPage extends Component {
  render() {
    return (
      <div>
        <Topbar />
          <MainComponent data = {politics1} />
          <MainComponent data = {politics2} />
      </div>
    )
  }
}

export default PoliticsPage;
