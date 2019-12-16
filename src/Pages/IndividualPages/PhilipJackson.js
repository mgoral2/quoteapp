//Philip  Jackson

import React, {Component}  from 'react';

import Topbar from "../Components/Topbar";

import QuotesComponent from '../Components/QuotesComponent';

import imgPJ from '../Images/Sports/PhilipJackson.jpeg';


var quotes = {
  image: imgPJ,

  name: "Philip Jackson",

  quote1: "Wisdom is always an overmatch for strength.",
  quote2: "Love is the force that ignites the spirit and binds the team together.",
  quote3: "I gave it my body and mind, but I have kept my soul.",
  quote4: "Approach the game with no preset agendas and you'll probably come away surprised at your overall efforts.",
  quote5: "You have to be able to psychologically help your players, support-wise, be in touch with them, so I think managing people is very important.",
  quote6: "Your problems never cease, they just change.",

}

class PhilipJackson extends Component {
  render() {
    return (
      <QuotesComponent quotes = {quotes}/>
    )
  }
}


export default PhilipJackson;
