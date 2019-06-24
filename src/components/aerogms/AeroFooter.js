import React, { Component } from 'react';
const fb = require('../../images/fb.png');
const linkedin = require('../../images/linkedin.png');
const twitter = require('../../images/twitter.png');
const gplus = require('../../images/gplus.png');

class AeroFooter extends Component {
    render() {
        return (
            <footer className = 'grey darken-3'>
                <div className="container">
                    <div className="row" style = {{borderBottom: '1px solid grey'}}>
                        <div className="col m4">
                            <h4 className="bold white-text text-lighten-1">ElevenX</h4>
                            <p className="grey-text text-lighten-1">
                                ElevenX provides reliable business planning, 
                                management, and advisory services backed by 
                                years of experience in the industry.
                            </p>
                        </div>
                        <div className="col s6 m4 links">
                            <h4 className = 'white-text text-lighten-1'>Quick Links</h4>
                            <ul className = 'grey-text text-lighten-1' style= {{fontSize: '18px'}}>
                                <li className = 'scrollToHome'><a href ="/#carousel" className = 'grey-text text-lighten-1'>Home</a></li>
                                <li className = 'scrollToAbout'><a href ="/#aboutus" className = 'grey-text text-lighten-1'>About Us</a></li>
                                <li className = 'scrollToServices'><a href ="/#services" className = 'grey-text text-lighten-1'>Services</a></li>
                                <li className = 'scrollToProjects'><a href ="/#purpose" className = 'grey-text text-lighten-1'>Projects</a></li>
                                <li className = 'scrollToReachUs'><a href ="/#reachus" className = 'grey-text text-lighten-1'>Reach us</a></li>
                            </ul>
                        </div>
                        <div className="col s6 m4">
                            <h4 className="white-text text-lighten-1">Contact Us</h4>
                            <p className="grey-text text-lighten-1">
                                C-9/26, Sector-7, Rohini, Delhi - 110085,<br /> Landmark: Opp Metro Pillar #401    
                            </p>
                            <a className = 'white-text' href="mailto:contact@consult11x.com">contact@consult11x.com</a>
                            <p className = 'grey-text text-lighten-1'>
                                +91-11-47010707
                            </p>
                            <span>
                                <a href="https://www.facebook.com/consult11X" target = 'blank'>
                                    <img className = 'icon-size 'src={fb} alt=""/>
                                </a>
                                <a href="https://www.linkedin.com/company/consult11x" target = 'blank'>
                                    <img className = 'icon-size 'src={linkedin} alt=""/>
                                </a>
                                <a href="https://twitter.com/ElevenxLtd" target = 'blank'>
                                    <img className = 'icon-size 'src={twitter} alt=""/>
                                </a>
                                <a href="https://plus.google.com/b/113897110014387177197/113897110014387177197" target = 'blank'>
                                    <img className = 'icon-size 'src={gplus} alt=""/>
                                </a>
                            </span>
                            <div className="row"></div>
                        </div>
                    </div>
                    <div className="footer-copyright valign-wrapper">
                        <div className="grey-text text-lighten-1" style = {{width: '100%'}}>
                            &copy; 2019 ElevenX Consultancy Private Limited
                        </div>
                    </div>
                </div>                
            </footer>
        );
    }
}

export default AeroFooter;