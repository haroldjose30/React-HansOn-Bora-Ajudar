import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
}
  from 'react-router-dom';

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Sobre from "./Sobre";
import Contato from "./Contato";
import Campanhas from "./Campanhas";
import base from "./base";
import Admin from './Admin'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contador: 1
    }
  }



  componentDidMount() {
    base.syncState('contador', {
      context: this,
      state: 'contador',
      asArray: false
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div>
            <h1>Contador { this.state.contador} </h1>
            <button onClick={()=> this.setState({contador:'ola react'})}>Ola </button>
            <Route exact path='/' component={Home} />
            <Route path='/Sobre' component={Sobre} />
            <Route path='/Contato' component={Contato} />
            <Route path='/Campanhas' component={Campanhas} />
            <Route path='/Admin' component={Admin} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
