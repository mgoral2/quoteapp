//Gregg Popovich

import React, {Component}  from 'react';

import Topbar from "../Components/Topbar";

import QuotesComponent from '../Components/QuotesComponent';

import imgGP from '../Images/Sports/GreggPopovich.jpeg';


var quotes = {
  image: imgGP,

  name: "Gregg Popovich",

  quote1: "The measure of who we are is how we react to something that doesn't go our way.",
  quote2: "'Play the right way' means play unselfishly, respect each other's achievements, play hard, fulfill your role.",
  quote3: "I can't make every decision for you.  I don't have 14 timeouts.  You guys got to get together and talk.",
  quote4: "Basketball is a pretty simple game.  What wins is consistency and competitiveness.",
  quote5: "You have to make shots to win basketball games and we didn't do that.  You  also have to get back on defense, so it was a double-whammy.",
  quote6: "It's not about any one person.  You've got to get over yourself and realize that it takes a group to get this thing done.",

}

class GreggPopovich extends Component {
  render() {
    return (
      <QuotesComponent quotes = {quotes}/>
    )
  }
}


export default GreggPopovich;
