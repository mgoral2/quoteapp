//Mark Zuckerberg
import React, {Component}  from 'react';

import Topbar from "../Components/Topbar";

import QuotesComponent from '../Components/QuotesComponent';

import imgMZ from '../Images/Business/MarkZuckerberg.jpg';


var quotes = {
  image: imgMZ,

  name: "Mark Zuckerberg",

  quote1: "The biggest risk is not taking any risk.  In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
  quote2: "Move fast and break things.  Unless you are breaking stuff, you are not moving fast enough.",
  quote3: "Faebook was not originally created to be a company.  It was built to accomplish a social mission - to make the world more open and connected.",
  quote4: "I always tell people that you should only hire people to be on your team if you would work for them.",
  quote5: "Our philosophy is that we care about people first.",
  quote6: "I think a simple rule of business is, if you do the things that are easier first, then you can actually make a lot of progress.",

}

class MarkZuckerberg extends Component {
  render() {
    return (
      <QuotesComponent quotes = {quotes}/>
    )
  }
}


export default MarkZuckerberg;
