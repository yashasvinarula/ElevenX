import React, {Component} from 'react';

const handshake = require('../../images/handshake.png');
const banner11 = require('../../images/banner11.gif');

class Carousel extends Component{
    constructor(){
        super();
        this.state = {

        };
    }

    render(){
        return(
            <div className = 'homepage-img' id = 'carousel' style = {{overflow: 'hidden'}}>
                <img src = {handshake} alt = '' style = {{width: '100%', height: '120%'}} className = 'show-on-medium-and-down	hide-on-med-and-up' />
                {/* <img src = {banner11} alt = '' style = {{width: '100%', height: '100%'}}/> */}
                 <div className = 'img-wrapper'>
                 </div>
                 <div className = 'overlay-text'>
                    <h2 className = 'wow slideInLeft white-text bold'>Welcome to <br />
                    <span className = 'blue-text text-lighten-1'>11X Consultancy</span>
                    </h2>
                    <h5 className = 'wow slideInRight faster white-text' style = {{fontWeight: '400', lineHeight: '1.5'}}>
                    ElevenX provides reliable business planning, <br />
                    management, and advisory services backed by <br />
                    years of experience in the industry.
                    </h5>
                    <button className = 'wow fadeIn round-btn about-us scrollToAbout' data-wow-delay = '0.3s'>About Us</button>
                    <button className = 'wow fadeIn round-btn contact-us scrollToReachUs' data-wow-delay = '0.3s'>Contact Us</button>
                 </div>
            </div>
        )
    }
}

export default Carousel;