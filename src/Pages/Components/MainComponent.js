//MainComponent

import React, {Component} from 'react';
import './MainComponent.css';

class MainComponent extends Component {
  render() {
    return(
      <div className = "HighestLevel">
        <div>
        <a href={this.props.data.link1}>
         <img src = {this.props.data.image1} height = "300" width = "300" />
        </a>
         <p>{this.props.data.name1}</p>
        </div>
        <div>
          <a  href={this.props.data.link2}>
          <img src = {this.props.data.image2} height = "300" width = "300"/>
          </a>
          <p>{this.props.data.name2}</p>
        </div>
        <div>
          <a href = {this.props.data.link3}>
          <img src = {this.props.data.image3} height = "300" width = "300"/>
          </a>
          <p>{this.props.data.name3}</p>
        </div>
      </div>
    )
  }
}

export default MainComponent
