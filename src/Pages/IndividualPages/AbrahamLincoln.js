//abraham Lincoln

import React, {Component}  from 'react';

import Topbar from "../Components/Topbar";

import QuotesComponent from '../Components/QuotesComponent';

import imgAL from '../Images/Politics/AbrahamLincoln.jpg';


var quotes = {
  image: imgAL,

  name: "Abraham Lincoln",

  quote1: "Give me six hours to chop down a tree and I will spend the first hour sharpening the axe.",
  quote2: "No man has a good enough memory to be a successful liar.",
  quote3: "Be sure you put your feet in the right place, then stand firm.",
  quote4: "You cannot escape the responsibility of tomorrow by evading it today.",
  quote5: "Always bear in mind that your own resolution to succeed is more important than any other.",
  quote6: "Most folks are as happy as they make up their minds to be.",

}

class AbrahamLincoln extends Component {
  render() {
    return (
      <QuotesComponent quotes = {quotes}/>
    )
  }
}


export default AbrahamLincoln;
