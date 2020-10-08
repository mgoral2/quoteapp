//Tom Brady
import React, {Component}  from 'react';

import Topbar from "../Components/Topbar";

import QuotesComponent from '../Components/QuotesComponent';

import imgTB from '../Images/Sports/TomBrady.jpg';


var quotes = {
  image: imgTB,

  name: "Tom Brady",

  quote1: "Every quarterback can throw a ball; every running back can run; every receiver is fast; but that mental toughness that you talk about translates into competitiveness.",
  quote2: "You need to think outside the box.  You need to think differently if you want to sustain what, for me, is my peak performance: the very best that I can achieve as an athlete every day.",
  quote3: "I firmly believe that sleep and recovery are critical aspects of an effective and holistic training program.",
  quote4: "When you're one of the leaders of the team, there are no days off.",
  quote5: "I could talk food all day.  I love good food.",
  quote6: "Mentally, the only players who survive in the pros are the ones able to manage all their responsibilities.  Everybody struggles in different ways.",

}

class TomBrady extends Component {
  render() {
    return (
      <QuotesComponent quotes = {quotes}/>
    )
  }
}


export default TomBrady;
