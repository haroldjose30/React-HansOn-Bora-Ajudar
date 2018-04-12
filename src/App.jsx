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
import Admin from './Admin';
import Login from './Login';


class App extends Component {

  constructor(props) {
    super(props)

  }



  componentDidMount() {
 
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/Sobre' component={Sobre} />
            <Route path='/Contato' component={Contato} />
            <Route path='/Campanhas' component={Campanhas} />
            <Route path='/Admin' component={Admin} />
            <Route path='/Login' component={Login} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
