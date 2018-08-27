import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div className="service">
        <div className="about-intro">
          With a focus on excellence in execution, and adapting to current or developing business situations, Cullen Murphy & Co., P.C., combines knowledge and experience to provide the optimum level of resources required to effectively assess its clients’ accounting, tax and consulting issues.  We provide a comprehensive range of services to individuals, private businesses and corporate clients:
        </div>
        <div className="service-section about-bios">
          <div className="about-bios-text">
            <div className="about-bios-title">
              ASSURANCE AND TAX
            </div>
            <div className="about-bios-desc">
              <li>Compilation, review and audit engagements</li>
              <li>AICPA and GAAP compliance testing</li>
              <li>Corporate tax planning and filings</li>
              <li>Partnership</li>
              <li>State</li>
              <li>Multi-state</li>
              <li>Federal</li>
              <li>Personal tax planning and filings</li>
            </div>
          </div>
          <div className="about-bios-text">
            <div className="about-bios-title">
              CONSULTING
            </div>
            <div className="about-bios-desc">
              <li>Operational assessments</li>
              <li>Cash flow model building and utilization</li>
              <li>Financial statement projections</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
