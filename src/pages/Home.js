import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import constImg from '../assets/pexels-photo-271667.jpeg'
import accountImg from '../assets/pexels-photo-1043506.jpeg'

export default class Home extends Component {
  render() {
    return (
        <div className="home">
          <Helmet>
            <title>Home | Cullen, Murphy & Co., PC.</title>
          </Helmet>
          <div className="home-section home-hero">
            <div className="home-hero-filter"></div>
            <div className="home-hero-text">
              When it comes to your finances,
              <br/>we are in your dugout.
            </div>
          </div>
          <div className="home-section">
            <div className="home-description home-description-alt">
              <div className="home-description-img home-section-double">
                  <img src={constImg} alt=""/>
              </div>
              <div className= "home-description-text home-section-double">
                  Cullen Murphy & Co., P.C., heritage of stability, focus and depth stems from the firm’s historically distinctive construction practice.  Advising companies with construction divisions, general contractors, subcontractors and related industries over the past four decades.
              </div>
            </div>
            <div className="home-description">
              <div className= "home-description-text home-section-double">
                  We provide a unique combination of institutional knowledge and real-world skills in assisting companies in the construction market space.  Within this practice, we advise on corporate and transactional issues, succession planning, acquisitions, divestitures assurance and tax compliance.
              </div>
              <div className="home-description-img home-section-double">
                  <img src={accountImg} alt=""/>
              </div>
            </div>
          </div>



        </div>
    );
  }
}
