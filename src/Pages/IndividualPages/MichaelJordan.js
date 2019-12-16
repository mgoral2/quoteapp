//Michael Jordan

import React, {Component}  from 'react';

import Topbar from "../Components/Topbar";

import QuotesComponent from '../Components/QuotesComponent';

import imgMJ from '../Images/Sports/MichaelJordan.jpg';


var quotes = {
  image: imgMJ,

  name: "Michael Jordan",

  quote1: "I've missed more than 9000 shots in my career.  I've lost almost 300 games.  26 times, I've been trusted to take the game winning shot and missed.  I've failed over and over and over again in my life.  And that is why I succeed.",
  quote2: "Sometimes, things may not go your way, but the effort should be there every single night.",
  quote3: "If you accept the expectations of others, especially negative ones, then you never will change the outcome.",
  quote4: "You have competition every day because you set such high standards for yourself that you have to go out every day and live up to that.",
  quote5: "You have to expect things of yourself before you can do them.",
  quote6: "There is no such thing as a perfect basketball player, and I don't believe there is only one greatest player either.",

}

class MichaelJordan extends Component {
  render() {
    return (
      <QuotesComponent quotes = {quotes}/>
    )
  }
}


export default MichaelJordan;
