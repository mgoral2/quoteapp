//GeorgeBush
import React, {Component}  from 'react';

import Topbar from "../Components/Topbar";

import QuotesComponent from '../Components/QuotesComponent';

import imgGB from '../Images/Politics/GeorgeBush.jpeg';


var quotes = {
  image: imgGB,

  name: "George Bush",

  quote1: "I have a different vision of leadership.  A leadership is someone who brings people together.",
  quote2: "One of my proudest moments is I didn't sell my soul for the sake of popularity.",
  quote3: "Everywhere that freedom stirs, let tyrants fear.",
  quote4: "I believe that God has planted in every heart the desire to live in freedom.",
  quote5: "After the chaos and carnage of September 11th, it is not enough to serve our enemies with legal papers.",
  quote6: "I understand that everybody in this country doesn't agree with the decisions I've made.  And I made some tough decisions.  But people know this is where I stand.",

}

class GeorgeBush extends Component {
  render() {
    return (
      <QuotesComponent quotes = {quotes}/>
    )
  }
}


export default GeorgeBush;
