//GeorgeWashington

import React, {Component}  from 'react';

import Topbar from "../Components/Topbar";

import QuotesComponent from '../Components/QuotesComponent';

import imgGW from '../Images/Politics/GeorgeWashington.jpg';


var quotes = {
  image: imgGW,

  name: "George Washington",

  quote1: "True friendship is a plant of slow growth, and must undergo and withstand the shocks of adversity, before it is entitled to the appellation",
  quote2: "Discipline is the soul of an army.  It makes small numbers formidable;  procures success to the weak, and esteem to all.",
  quote3: "Observe good faith and justice toward all nations.  Cultivate peace and harmony with all.",
  quote4: "It is better to offer no excuse than a bad one.",
  quote5: "Associate with men of good quality if you esteem your own reputation;  for it is better to be alone than in bad company.",
  quote6: "My first wish is to see this plague of mankind, war, banished from the earth.",

}

class GeorgeWashington extends Component {
  render() {
    return (
      <QuotesComponent quotes = {quotes}/>
    )
  }
}


export default GeorgeWashington;
