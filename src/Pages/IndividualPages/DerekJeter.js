//Derek Jeter

import React, {Component}  from 'react';

import Topbar from "../Components/Topbar";

import QuotesComponent from '../Components/QuotesComponent';

import imgDJ from '../Images/Sports/DerekJeter.jpg';


var quotes = {
  image: imgDJ,

  name: "Derek Jeter",

  quote1: "Surround yourself with good people.  People who are going to be honest with you and look out for your best interests.",
  quote2: "There may be people who have more talent than you, but there's no excuse for anyone to work harder than you do - and I believe that.",
  quote3: "Your image isn't your character.  Character is what you are as a person.",
  quote4: "You don't just accidentally show up in the World Series.",
  quote5: "I like to hit the gym early in the morning.  I feel better throughout the day when I get in a workout first thing in the morning.",
  quote6: "I've found that it's easier to stay in shape than it is to get into shape.",

}

class DerekJeter extends Component {
  render() {
    return (
      <QuotesComponent quotes = {quotes}/>
    )
  }
}


export default DerekJeter;
