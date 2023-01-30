import './App.css';
import React, { Component } from 'react'
import Navbar from './componenets/Navbar';
import News from './componenets/News';

export default class App extends Component {
  //render method is a life cycle method it means when raect load a component then some series of methods run(means firstly compile JSX into html then render method render html on screen)
  render() {
    return (
      <div>
       <Navbar/>     
       <News/>
      </div>
    )
  }
}


