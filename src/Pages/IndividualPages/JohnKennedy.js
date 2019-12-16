//johnkennedy
import React, {Component}  from 'react';

import Topbar from "../Components/Topbar";

import QuotesComponent from '../Components/QuotesComponent';

import imgJK from '../Images/Politics/JohnKennedy.jpeg';


var quotes = {
  image: imgJK,

  name: "John Kennedy",

  quote1: "Change is the law of life.  And those who look only to the past or present are certain to miss the future.",
  quote2: "Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity.",
  quote3: "My fellow Americans, ask not what your country can do for you, ask what you can do for your country.",
  quote4: "Once you say you're going to settle for second, that's what happens to you in life.",
  quote5: "We have the power to make this the best generation of mankind in the history of the world or to make it the last.",
  quote6: "Mankind must put an end to war before war puts an end to mankind.",

}

class JohnKennedy extends Component {
  render() {
    return (
      <QuotesComponent quotes = {quotes}/>
    )
  }
}


export default JohnKennedy;
