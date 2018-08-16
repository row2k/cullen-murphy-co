import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import logo from '../../components/logo.svg';

import Home from '../../pages/Home';
import Directions from '../../pages/Directions';
import NotFound from '../../pages/404';

export default class App extends Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Home | Cullen, Murphy & Co., PC.</title>
        </Helmet>
        <div className="container-fluid">
            <div className="app-header">
              <Link to='/'><img src={logo} className="app-logo" alt="logo" /></Link>
              <div className="nav-bar">
                <Link to='/' className="nav-item">Home</Link>
                <Link to='/' className="nav-item">About</Link>
                <Link to='/' className="nav-item">Services</Link>
                <Link to='/directions' className="nav-item">Directions</Link>
                <a href='http://portal.cullenmurphyandco.com/thinclient/login.aspx' className="nav-item" target='_blank'>Client Portal</a>
              </div>
            </div>
            <div className="app-module">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/index' component={Home} />
              <Route exact path='/directions' component={Directions} />
              <Route component={NotFound} />
            </Switch>
            </div>
            <div className="app-footer flood">
              <div className="footer-info">Cullen, Murphy & Co., PC</div>
              <div className="footer-info">1506 Providence Highway, Suite 31 - Norwood. MA 02062</div>
              <div className="footer-info">(781) 769-6262</div>
            </div>
        </div>

      </div>
    );
  }
}
