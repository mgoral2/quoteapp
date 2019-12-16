//Kenneth Griffin

import React, {Component}  from 'react';

import Topbar from "../Components/Topbar";

import QuotesComponent from '../Components/QuotesComponent';

import imgKG from '../Images/Business/Ken_Griffin.jpg';


var quotes = {
  image: imgKG,

  name: "Kenneth Griffin",

  quote1: "You can't succeed in the markets today unless you are part of a great team.  The team is the essence of how you win.",
  quote2: "We think that excellence in investing comes from focus.",
  quote3: "My fantasy is to break up the big banks.  I wish we would end 'too big to fail' in our banking system.",
  quote4: "Walk across any of the trading floors - they are full of 29-year-old kids.  The capital markets of America are controlled by a bunch of right-out-of-business-school young guys who haven't really seen that much.",
  quote5: "Our financial markets work best when they are competitive, fair, and transparent.",
  quote6: "If I could wave a magic wand, I'd break up the banking system.",

}

class KennethGriffin extends Component {
  render() {
    return (
      <QuotesComponent quotes = {quotes}/>
    )
  }
}


export default KennethGriffin;
