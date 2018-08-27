import React, { Component } from 'react';
import Map from '../components/Map';

export default class Direction extends Component {
  render() {
    return (
        <div className="container-fluid center">
          <div className="contacts">
            <div className="contact-item">
              <div className="contact-name">
                John Merchant
              </div>
              <div className="contact-detail">
                Senior Partner <br/>
                (781) 769-6262 Ext. 15 <br/>
                (781) 769-5675 (FAX) <br/>
                JMerchant@CullenMurphyandco.com
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
                BKearns@CullenMurphyandco.com
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-name">
                Melissa Kirk
              </div>
              <div className="contact-detail">
                (781) 769-6262 Ext. 16 <br/>
                (781) 769-5675 (FAX) <br/>
                MKirk@CullenMurphyandco.com
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-name">
                Rama Malempati
              </div>
              <div className="contact-detail">
                (781) 769-6262 Ext. 12 <br/>
                (781) 769-5675 (FAX) <br/>
                RMalempati@CullenMurphyandco.com
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
                REardley@CullenMurphyandco.com
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-name">
                Scott Marino
              </div>
              <div className="contact-detail">
                (781) 769-6262 Ext. 23 <br/>
                (781) 769-5675 (FAX) <br/>
                SMarino@CullenMurphyandco.com
              </div>
            </div>
          </div>
          <Map/>
        </div>
    );
  }
}
