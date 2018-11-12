import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class NotFound extends Component {
  render() {
    return (
        <div className="about">
          <Helmet>
            <title>About | Cullen, Murphy & Co., PC.</title>
          </Helmet>
          <div className="about-intro">
            For more than 50 years, Cullen Murphy & Co., P.C., has delivered focused excellence by providing clients with a comprehensive range of assurance, tax and corporate finance advisory services. Cullen Murphy & Co., P.C., is a boutique firm with a professional teams well-versed in the construction industry and transaction advisory, as well as broader issues related to assurance and tax, and consulting.  We offer both the intellectual resources and depth of experience required to navigate the complex realities of financial compliance and tax structuring.
          </div>
          <div className="about-section about-bios">
            <div className="about-bios-title">
              Our Team
            </div>
            <div className="about-bios-text">
              <div className="about-bios-title">
                John E. Merchant, C.P.A., M.S.T. and M.S.F. – Director and President
              </div>
              <div className="about-bios-desc">
                John E. Merchant joined the firm over 35 years ago serving as Director and President since 1996. John received his undergraduate accounting degree as well as a Master of Science in Taxation and Master of Science in Finance from Bentley College. He is a member of both the AICPA and Mass Society of Certified Public Accountants. His client base includes individuals, non-profits and privately held businesses including partnerships, and professional service organizations. His areas of expertise include business and individual tax planning, trusts and estates, management advisory services, succession and estate planning. John’s extensive background is highlighted by his tax, audit and consulting work with closely-held companies with a focus on the construction and real estate industries.
              </div>
            </div>
            <div className="about-bios-text">
              <div className="about-bios-title">
                William Kearns, Jr.  C.P.A– Principal
              </div>
              <div className="about-bios-desc">
               Bill Kearns joined the firm in 2006 as a manager and was named a Principal in 2010. Bill received his undergraduate degree in 1988 from Bentley College. Bill has over 25 years’ experience serving privately owned businesses in various industries such as construction, real estate, retail and wholesale with an emphasis in the construction industry. His areas of expertise include financial reporting, business and individual tax planning and preparation and business strategic planning. 
                <br/><br/>
                  Bill is well versed in current auditing, accounting and tax regulations and is active in several professional and industry associations. He also volunteers for several local charitable organizations.
              </div>
            </div>
            <div className="about-bios-text">
              <div className="about-bios-title">
                Robert Eardley, CPA, MST – Manager
              </div>
              <div className="about-bios-desc">
                Rob has been with Cullen Murphy & Co., P.C., since 2001.  He began as a part-time high school employee assisting with firm administration, then becoming an accounting intern and then a full-time member of the staff after graduation from Merrimack College in 2007 with a Bachelor of Science in Business Administration with a concentration in Accountancy.  Rob attained a Master of Science in Taxation from Bentley College in 2011 and was promoted to manager in 2012.  Rob serves his clients in the area of audit and tax.
              </div>
            </div>
          </div>
        </div>
    );
  }
}
