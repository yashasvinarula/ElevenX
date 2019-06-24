import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const logo_transparent = require('../../images/logo_transparent.png');

class Navbar extends Component{
    constructor(){
        super();
        this.state = {

        };
    }
    render(){
        return(
            <div id = 'nav-below'>
                <nav style = {{
                    background: 'white',
                    fontFamily: 'Montserrat, sans-seriff !important',
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    boxShadow: 'none',
                    opacity: '1'
                 }}>
                    <div className="nav-wrapper container">
                        <Link to="/" className="brand-logo">
                            <img src={logo_transparent} alt=""/>
                        </Link>
                        <Link to="#" data-target="mobile-demo" className="black-text sidenav-trigger"><i className="material-icons">menu</i></Link>
                        <ul className="right hide-on-med-and-down">
                            <li className = 'nav-li scrollToHome'><Link to="" className = 'link-nav'>Home</Link></li>
                            <li className = 'nav-li scrollToAbout'><Link to="" className = 'link-nav'>About Us</Link></li>
                            <li className = 'nav-li scrollToServices'><Link to="" className = 'link-nav'>Services</Link></li>
                            <li className = 'nav-li scrollToProjects'><Link to="" className = 'link-nav'>Projects</Link></li>
                            <li className = 'nav-li scrollToReachUs'><Link to="" className = 'link-nav'>Reach us</Link></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                        <li className = 'nav-li-m scrollTop'><Link to="">Home</Link></li>
                        <li className = 'nav-li-m scrollToAbout'><Link to="">About Us</Link></li>
                        <li className = 'nav-li-m scrollToServices'><Link to="">Services</Link></li>
                        <li className = 'nav-li-m scrollToProjects'><Link to="">Projects</Link></li>
                        <li className = 'nav-li-m scrollToReachUs'><Link to="">Reach us</Link></li>
                </ul>
            </div>            
        )
    }
}

export default Navbar;