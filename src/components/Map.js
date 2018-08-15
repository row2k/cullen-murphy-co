import React, { Component } from 'react';

export default class NotFound extends Component {
  iframe = () => {
    return {
      __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.122044994762!2d-71.20027210000002!3d42.16067779999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e47e1ba4d3414b%3A0xac81332b08faa312!2s1506+Providence+Hwy+%2331%2C+Norwood%2C+MA+02062!5e1!3m2!1sen!2sus!4v1443820739786" class="directions-map" frameborder="0" style="border:0; text-align: center;" allowfullscreen=""></iframe>'
    }
  }

  render() {
    return (
        <div className='direction-map-container' dangerouslySetInnerHTML={ this.iframe() } />
    );
  }
}
