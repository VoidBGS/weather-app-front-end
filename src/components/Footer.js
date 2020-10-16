import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
return (
    <div className="footer-main pr-3">
     <Row>
        <Col>
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
         <Col>
             <div className="footer-text-col-main">
                 Explore
             </div>
             <div>
             <a href="/" className="footer-text-col-2">Weather</a>
             </div>
             <div>
             <a href="/News" className="footer-text-col-2">News</a>
             </div>
             <div>
             <a href="/Photos" className="footer-text-col-2">Photos</a>
             </div>
             <div>
             <a href="/Forum" className="footer-text-col-2">Forum</a>
             </div>
         </Col>
         <Col>
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
         <Col>
             <div className="footer-text-col-main">
                 Follow
                 </div>
                 <div>
             <a href="#facebook" className="footer-text-col-4">Facebook</a>
             </div>
             <div>
             <a href="#instagram" className="footer-text-col-4">Instagram</a>
             </div>
            </Col>
     </Row>
    </div>
)
}

export default Footer;