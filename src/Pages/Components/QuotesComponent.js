//MichaelBurry

import React, {Component}  from 'react';

import Topbar from "./Topbar";

import './QuotesComponent.css';


var quotes = {
  quote1: "I don't believe anything unless I understand it inside out.  And even if I understand something, it is not uncommon that I disagree with the accepted view.",
  quote2: "it is ludicrous to believe that asset bubbles can only be recognized in hindsight.",
  quote3: "If you are going to be a great investor, you have to fit the style to who you are.",
  quote4: "I have always believed that a single talented analyst, working very hard, can cover an amazing amount of investment landscape, and this belief remains unchallenged in my mind.",
  quote5: "I hated discussing ideas with investors, because then I become a defender of the idea, and that influences your thought process.",
  quote6: "I think a lot of gunds get their ideas from Wall Street.  I just like to find my own ideas.  I read a lot.  A lot of news. I just follow my nose.  A lot of times it's a dead end, but sometimes there's value there.",

}

class QuotesComponent extends Component {
  render() {
    return (
      <div>
        <Topbar />

      <div className = "TwoSided">
        <div className = "Quotes">
          <p>"{this.props.quotes.quote1}"</p>
          <p>"{this.props.quotes.quote2}"</p>
          <p>"{this.props.quotes.quote3}"</p>
          <p>"{this.props.quotes.quote4}"</p>
          <p>"{this.props.quotes.quote5}"</p>
          <p>"{this.props.quotes.quote6}"</p>

        </div>
        <div className = "img">
        <img src = {this.props.quotes.image} height = "600" width = "600" />
        <p>{this.props.quotes.name}</p>
        </div>

      </div>
      </div>
    )
  }
}

export default QuotesComponent;
