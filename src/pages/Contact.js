import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Map from '../components/Map';

export default class Direction extends Component {
  render() {
    return (
        <div className="container-fluid center">
          <Helmet>
            <title>Contact | Cullen, Murphy & Co., PC.</title>
          </Helmet>
          <div className="contacts">
            <div className="contact-item">
              <div className="contact-name">
                John Merchant
              </div>
              <div className="contact-detail">
                Senior Partner <br/>
                (781) 769-6262 Ext. 15 <br/>
                (781) 769-5675 (FAX) <br/>
                <a href="mailto:JMerchant@CullenMurphyandco.com?">JMerchant@CullenMurphyandco.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-name">
                Bill Kearns
              </div>
              <div className="contact-detail">
                Partner <br/>
                (781) 769-6262 Ext. 17 <br/>
                (781) 769-5675 (FAX) <br/>
                <a href="mailto:BKearns@CullenMurphyandco.com?">BKearns@CullenMurphyandco.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-name">
                Melissa Kirk
              </div>
              <div className="contact-detail">
                (781) 769-6262 Ext. 16 <br/>
                (781) 769-5675 (FAX) <br/>
                <a href="mailto:MKirk@CullenMurphyandco.com?">MKirk@CullenMurphyandco.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-name">
                Rama Malempati
              </div>
              <div className="contact-detail">
                (781) 769-6262 Ext. 12 <br/>
                (781) 769-5675 (FAX) <br/>
                <a href="mailto:RMalempati@CullenMurphyandco.com?">RMalempati@CullenMurphyandco.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-name">
                Rob Eardley
              </div>
              <div className="contact-detail">
                Manager <br/>
                (781) 769-6262 Ext. 13 <br/>
                (781) 769-5675 (FAX) <br/>
                <a href="mailto:REardley@CullenMurphyandco.com?">REardley@CullenMurphyandco.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-name">
                Scott Marino
              </div>
              <div className="contact-detail">
                (781) 769-6262 Ext. 23 <br/>
                (781) 769-5675 (FAX) <br/>
                <a href="mailto:SMarino@CullenMurphyandco.com?">SMarino@CullenMurphyandco.com</a>
              </div>
            </div>
          </div>
          <Map/>
        </div>
    );
  }
}
