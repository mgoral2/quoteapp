import React from 'react';
import logo from './logo.svg';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



import BusinessPage from './Pages/BusinessPage';
import SportsPage from './Pages/SportsPage';
import PoliticsPage from './Pages/PoliticsPage';
import MichaelBurry from './Pages/IndividualPages/MichaelBurry';
import WarrenBuffett from './Pages/IndividualPages/WarrenBuffett';
import KennethGriffin from './Pages/IndividualPages/KennethGriffin';
import JeffreyBezos from './Pages/IndividualPages/JeffreyBezos';
import JoeMansueto from './Pages/IndividualPages/JoeMansueto';
import MarkZuckerberg from './Pages/IndividualPages/MarkZuckerberg';
import BillBelichick from './Pages/IndividualPages/BillBelichick';
import DerekJeter from './Pages/IndividualPages/DerekJeter';
import GreggPopovich from './Pages/IndividualPages/GreggPopovich';
import MichaelJordan from './Pages/IndividualPages/MichaelJordan';
import PhilipJackson from './Pages/IndividualPages/PhilipJackson';
import TomBrady from './Pages/IndividualPages/TomBrady';
import BarackObama from './Pages/IndividualPages/BarackObama';
import DonaldTrump from './Pages/IndividualPages/DonaldTrump';
import JohnKennedy from './Pages/IndividualPages/JohnKennedy';
import AbrahamLincoln from './Pages/IndividualPages/AbrahamLincoln';
import GeorgeWashington from './Pages/IndividualPages/GeorgeWashington';
import GeorgeBush from './Pages/IndividualPages/GeorgeBush';

import HomePage from './Pages/HomePage';


function App() {
  return (
    <div>
    <Router>
      <div>
        <Switch>

        <Route path="/PoliticsPage/GeorgeBush">
          <GeorgeBush />
        </Route>

        <Route path="/PoliticsPage/GeorgeWashington">
          <GeorgeWashington />
        </Route>

        <Route path="/PoliticsPage/AbrahamLincoln">
          <AbrahamLincoln />
        </Route>

        <Route path="/PoliticsPage/JohnKennedy">
          <JohnKennedy />
        </Route>

        <Route path="/PoliticsPage/DonaldTrump">
          <DonaldTrump />
        </Route>

        <Route path="/PoliticsPage/BarackObama">
          <BarackObama />
        </Route>

        <Route path="/SportsPage/TomBrady">
          <TomBrady />
        </Route>

        <Route path="/SportsPage/PhilipJackson">
          <PhilipJackson />
        </Route>

        <Route path="/SportsPage/MichaelJordan">
          <MichaelJordan />
        </Route>

        <Route path="/SportsPage/GreggPopovich">
          <GreggPopovich />
        </Route>

        <Route path="/SportsPage/DerekJeter">
          <DerekJeter />
        </Route>

        <Route path="/SportsPage/BillBelichick">
          <BillBelichick />
        </Route>

        <Route path="/BusinessPage/MarkZuckerberg">
          <MarkZuckerberg />
        </Route>

        <Route path="/BusinessPage/JoeMansueto">
          <JoeMansueto />
        </Route>

        <Route path="/BusinessPage/JeffreyBezos">
          <JeffreyBezos />
        </Route>

        <Route path="/BusinessPage/KennethGriffin">
          <KennethGriffin />
        </Route>

        <Route path="/BusinessPage/WarrenBuffett">
          <WarrenBuffett />
        </Route>

        <Route path="/BusinessPage/MichaelBurry">
          <MichaelBurry />
        </Route>

          <Route path="/BusinessPage">
            <BusinessPage />
          </Route>
          <Route path="/SportsPage">
            <SportsPage />
          </Route>
          <Route path = "/PoliticsPage">
          <PoliticsPage />
          </Route>

          <Route path = "/">
          <HomePage />
          </Route>
        </Switch>
      </div>
      </Router>

    </div>
  )
}

export default App;
