//Jeffrey Bezos


import React, {Component}  from 'react';

import Topbar from "../Components/Topbar";

import QuotesComponent from '../Components/QuotesComponent';

import imgJB from '../Images/Business/JeffBezos.png';


var quotes = {
  image: imgJB,

  name: "Jeffrey Bezos",

  quote1: "A brand for a company is like a reputation for a person.  You earn reputation by trying to do hard things well.",
  quote2: "What's dangerous is not to evolve.",
  quote3: "If you don't understand the details of your business you are going to fail.",
  quote4: "If you do build a great experience, customers tell each other about that.  Word of mouth is very powerful.",
  quote5: "It is very difficult to get people to focus on the most important things when you're in boom times.",
  quote6: "I believe you have to be willing to be misunderstood if you're going to innovate.",

}

class JeffreyBezos extends Component {
  render() {
    return (
      <QuotesComponent quotes = {quotes}/>
    )
  }
}


export default JeffreyBezos;
