//BarackObama

import React, {Component}  from 'react';

import Topbar from "../Components/Topbar";

import QuotesComponent from '../Components/QuotesComponent';

import imgBO from '../Images/Politics/BarackObama.jpeg';


var quotes = {
  image: imgBO,

  name: "Barack Obama",

  quote1: "Change will not come if we wait for some other person or some other time.  We are the ones we've been waiting for.  We are the change that we seek.",
  quote2: "There is not a liberal America and a conservative America - there's the United States of America.",
  quote3: "Our higher education system is one of the things that makes America exceptional.  There's no place else that has the assets we do when it comes to higher education.  People from all over the world aspire to come here and study here.  And that is a good thing.",
  quote4: "I'm the president of the United States.  I'm not the emperor of the United States.",
  quote5: "We know that the nation that goes all-in on innovation today will own the global economy tomorrow.  This is an edge America cannot surrender.",
  quote6: "We proved that we are still a people capable of doing big things and tackling our biggest challenges.",

}

class BarackObama extends Component {
  render() {
    return (
      <QuotesComponent quotes = {quotes}/>
    )
  }
}


export default BarackObama;
