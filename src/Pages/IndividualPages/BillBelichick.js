//BillBelichick
import React, {Component}  from 'react';

import Topbar from "../Components/Topbar";

import QuotesComponent from '../Components/QuotesComponent';

import imgBB from '../Images/Sports/BillBelichick.jpg';


var quotes = {
  image: imgBB,

  name: "Bill Belichick",

  quote1: "It's not all about talent.  It's about dependability, consistency, and being able to improve.  If you work hard and you're coachable, and you understand what you need to do, you can improve.",
  quote2: "My job as a coach is to make good decisions.  It's not to go out there and block or tackle.",
  quote3: "Ultimately, the team has to come first even though we all have individual goals and preferences.",
  quote4: "If there's something that's your passion when you're young, do it.  Let everything else take care of itself.",
  quote5: "A lot of performance is based on confidence, knowing what you're doing, and being familiar, and not thinking too much and trying to play at confident game speed.",
  quote6: "I think your team evolves every year.  The more you know about it, the better you can coach it.",

}

class BillBelichick extends Component {
  render() {
    return (
      <QuotesComponent quotes = {quotes}/>
    )
  }
}


export default BillBelichick;
