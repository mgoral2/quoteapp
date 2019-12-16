

import React, {Component}  from 'react';

import Topbar from "../Components/Topbar";

import QuotesComponent from '../Components/QuotesComponent';

import imgWB from '../Images/Business/Warren_Buffett.jpg';


var quotes = {
  image: imgWB,

  name: "Warren Buffett",

  quote1: "We simply attempt to be fearful when others are greedy and to be greedy when others are fearful",
  quote2: "Price is what you pay.  Value is what you get.",
  quote3: "Risk comes from not knowing what you're doing.",
  quote4: "Our favorite holding period is forever.",
  quote5: "It's better to hang out with people better than you.  Pick out associates whose behavior is better than yours and you'll drift in that direction.",
  quote6: "In the business world, the rearview mirror is always clearer than the windshield.",

}

class WarrenBuffett extends Component {
  render() {
    return (
      <QuotesComponent quotes = {quotes}/>
    )
  }
}


export default WarrenBuffett;
