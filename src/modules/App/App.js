import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import logo from '../../components/logo.svg';

import Home from '../../pages/Home';
import About from '../../pages/About';
import Services from '../../pages/Services';
import Contact from '../../pages/Contact';
import NotFound from '../../pages/404';

export default class App extends Component {

  render() {
    return (
      <div>
        <div className="app-header">
          <Link to='/'><img src={logo} className="app-logo" alt="logo" /></Link>
          <div className="nav-bar">
            <Link to='/' className="nav-item">Home</Link>
            <Link to='/about' className="nav-item">About</Link>
            <Link to='/services' className="nav-item">Services</Link>
            <Link to='/contact' className="nav-item">Contact</Link>
            <a href='http://portal.cullenmurphyandco.com/thinclient/login.aspx' className="nav-item" target='_blank' rel="noopener noreferrer">Client Portal</a>
          </div>
        </div>
        <div className="container-fluid">
            <div className="app-module">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/services' component={Services} />
              <Route component={NotFound} />
            </Switch>
            </div>
        </div>
        <div className="app-footer">
          <div className="footer-info">Cullen, Murphy & Co., PC</div>
          <div className="footer-info">1506 Providence Highway, Suite 31 - Norwood. MA 02062</div>
          <div className="footer-info">(781) 769-6262</div>
          <Link to='/contact' className="footer-info footer-link">Contact Us</Link>
        </div>
      </div>
    );
  }
}
