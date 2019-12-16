//DonaldTrump

import React, {Component}  from 'react';

import Topbar from "../Components/Topbar";

import QuotesComponent from '../Components/QuotesComponent';

import imgDT from '../Images/Politics/DonaldTrump.jpeg';


var quotes = {
  image: imgDT,

  name: "Donald Trump",

  quote1: "No dream is too big.  No challenge is too great.  Nothing we want for our future is beyond our reach.",
  quote2: "We must speak our minds openly, debate our disagreements honestly, but always pursue solidarity.",
  quote3: "What separates the winners from the losers is how a person reacts to each new twist of fate.",
  quote4: "In the end, you're measured not by how much you undertake but by what you accomplish.",
  quote5: "You know the funny thing, I don't get along with rich people.  I get along with the middle class and the poor people better than I get along with the rich people.",
  quote6: "When America is united, America is totally unstoppable.",

}

class DonaldTrump extends Component {
  render() {
    return (
      <QuotesComponent quotes = {quotes}/>
    )
  }
}


export default DonaldTrump;
