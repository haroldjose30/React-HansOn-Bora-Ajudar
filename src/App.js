import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route    }
from 'react-router-dom';

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Sobre from "./Sobre";
import Contato from "./Contato";
import Campanhas from "./Campanhas";
import base from "./base";


class App extends Component {

  constructor(props){
    this.state = {
      contador:1
    }
  }

  componentDidMount(){
    base.sy
  } 

  render() {
    return (
      <Router>
      <div>
        <Header/>  
        <Route exact path='/' component={Home} />
        <Route path='/Sobre' component={Sobre} />
        <Route path='/Contato' component={Contato} />
        <Route path='/Campanhas' component={Campanhas} />
        <Footer/>
      </div>
      </Router>
    )
  }
}

export default App
