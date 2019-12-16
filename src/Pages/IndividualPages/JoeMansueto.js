//Joe Mansueto

import React, {Component}  from 'react';

import Topbar from "../Components/Topbar";

import QuotesComponent from '../Components/QuotesComponent';

import imgJM from '../Images/Business/JoeMansueto.jpg';


var quotes = {
  image: imgJM,

  name: "Joe Mansueto",

  quote1: "Once you create a loyal customer base, it's tough for a competitor to take that away.",
  quote2: "To me, money is independence.  It gives you freedom to do what you really want to do.  It allows you to not be dependent on anyone or anything, and so you can be yourself and follow your passion.",
  quote3: "I was a slightly geeky kid.",
  quote4: "As I get older, I increasingly value free time that's completely free of appointments.  Time to think, time to reflect, time to just hang out with my wife and kids.",
  quote5: "Publishing has been successful where there have been natural geographic monopolies.",
  quote6: "I found an approach to investing that made enormous sense to me:  rigorously analyzing a company's fundamentals, understanding exactly how it makes money, developing a view on the business's future prospects, and deciding if it's a good business.",

}

class JoeMansueto extends Component {
  render() {
    return (
      <QuotesComponent quotes = {quotes}/>
    )
  }
}


export default JoeMansueto;
