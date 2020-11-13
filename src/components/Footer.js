import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
return (
    <div className="footer-main pr-3">
     <Row>
        <Col  xs={9} sm={9} md={6} lg={{ }}>
             <div className="footer-logo">
                 Weather Hoven
             </div>
             <div className="footer-text-col-1">
               <p>Eindhoven's <span className="text-white">finest</span></p>
             </div>
             <div className="footer-text-copyright">
               <p>&copy;2020 Weather Hoven, All Rights Reserved.</p>
             </div>
         </Col>
         <Col xs={9} sm={9} md={6} lg={{ }}>
             <div className="footer-text-col-main">
                 Explore
             </div>
             <ul className="footer-explore">
                   <li>
                        <a href="/">Weather</a>
                   </li>
                   <li>
                         <a href="/News">News</a>
                   </li>
                   <li>
                           <a href="/Photos">Photos</a>
                   </li>
                   <li>
                         <a href="/Forum">Forum</a>
                   </li>
              </ul>
         </Col>
         <Col xs={9} sm={9} md={6} lg={{ }}>
             <div className="footer-text-col-main">
                 Visit
             </div>
             <div className="footer-text-col-3"><p>Achtseweg Zuid 151C,<br/>5651 GW Eindhoven</p></div>
             <div className="footer-text-col-main">
                 Business Inquiries
             </div>
             <div className="footer-text-col-3">
                 <p>kristianlachev00@gmail.com</p>
             </div>
        </Col>
         <Col xs={9} sm={9} md={6} lg={{ }}>
             <div className="footer-text-col-main">
            Follow
            </div>
            <ul className="footer-social-media">
            <li>
             <a href="#facebook">Facebook</a>
             </li>
             <li>
             <a href="#instagram">Instagram</a>
             </li>
             </ul>
            </Col>
     </Row>
    </div>
)
}

export default Footer;