//MichaelBurry

import React, {Component}  from 'react';
//import MainComponent from "./Components/MainComponent";
import Topbar from "../Components/Topbar";

import QuotesComponent from '../Components/QuotesComponent';

import imgMB from '../Images/Business/MichaelBurry.jpg';


var quotes = {
  image: imgMB,

  name: "Michael Burry",

  quote1: "I don't believe anything unless I understand it inside out.  And even if I understand something, it is not uncommon that I disagree with the accepted view.",
  quote2: "It is ludicrous to believe that asset bubbles can only be recognized in hindsight.",
  quote3: "If you are going to be a great investor, you have to fit the style to who you are.",
  quote4: "I have always believed that a single talented analyst, working very hard, can cover an amazing amount of investment landscape, and this belief remains unchallenged in my mind.",
  quote5: "I hated discussing ideas with investors, because then I become a defender of the idea, and that influences your thought process.",
  quote6: "I think a lot of guys get their ideas from Wall Street.  I just like to find my own ideas.  I read a lot.  A lot of news. I just follow my nose.  A lot of times it's a dead end, but sometimes there's value there.",

}

class MichaelBurry extends Component {
  render() {
    return (
      <QuotesComponent quotes = {quotes}/>
    )
  }
}

export default MichaelBurry;
