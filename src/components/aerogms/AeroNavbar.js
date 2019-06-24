import React, { Component } from 'react';
const logo = require('../../images/logo_transparent.png');

class AeroNavbar extends Component {
    render() {
        return (
            <div id = 'nav-below'>
                <nav style = {{
                    background: 'white',
                    fontFamily: 'Montserrat, sans-seriff !important',
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    boxShadow: 'none',
                    opacity: '1'
                }}>
                    <div className="nav-wrapper container" >
                        <a href ="/" className="brand-logo">
                            <img src={logo} alt=""/>
                        </a>
                        <a href ="#" data-target="mobile-demo" className="black-text sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li className = 'nav-li scrollToHome'><a href ="/#carousel" className = 'link-nav'>Home</a></li>
                            <li className = 'nav-li scrollToAbout'><a href ="/#aboutus" className = 'link-nav'>About Us</a></li>
                            <li className = 'nav-li scrollToServices'><a href ="/#services" className = 'link-nav'>Services</a></li>
                            <li className = 'nav-li scrollToProjects'><a href ="/#purpose" className = 'link-nav'>Projects</a></li>
                            <li className = 'nav-li scrollToReachUs'><a href ="/#reachus" className = 'link-nav'>Reach us</a></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                        <li className = 'nav-li-m scrollTop'><a href ="/#carousel">Home</a></li>
                        <li className = 'nav-li-m scrollToAbout'><a href ="/#aboutus">About Us</a></li>
                        <li className = 'nav-li-m scrollToServices'><a href ="/#services">Services</a></li>
                        <li className = 'nav-li-m scrollToAerogms'><a href ="/#purpose">AeroGMS</a></li>
                        <li className = 'nav-li-m scrollToReachUs'><a href ="/#reachus">Reach us</a></li>
                </ul>
        </div>            
        );
    }
}

export default AeroNavbar;