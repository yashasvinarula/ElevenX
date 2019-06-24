import React, { Component } from 'react';
import AeroNavbar from './AeroNavbar';
import AeroFooter from './AeroFooter';
import DownloadModal from './DownloadModal';
import Analyse from './Analyse';
import ScrollTop from '../home/ScrollTop';
import $ from 'jquery';

const aero1 = require('../../images/aero1.png');
const aero2 = require('../../images/aero2.png');
const aero3 = require('../../images/aero3.png');
const aero4 = require('../../images/aero4.png');
const aero5 = require('../../images/aero5.png');
const aero6 = require('../../images/aero6.png');


class Aerogms extends Component {

    constructor(){
        super();
        this.state = {
            count: 0,
            downloadShow: false
        }
    }

    componentDidMount(){
        const that = this;
        $(document).ready(function(){

        })        
        
    }

    render() {
        return (
            <div className = 'aerogms'>
                <AeroNavbar />
                
                <div className="row"></div>
                <div className="row"></div>
                <div className="row"></div>
                <div className="row"></div>
                
                <div className="center container">

                    <div className="aero-home valign-wrapper">
                        <img src={aero1} alt="" className = 'aero-logo' />
                    </div>

                    <div className="row"></div>
                    
                    <h5 className = 'wow slideInLeft'>
                        <b>AeroGMS </b>
                        - Survey, Digitisation & Land Management Portal for Mobile & Desktop
                    </h5>
                    
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                    
                    <img src={aero2} alt="" className = 'aero2 wow fadeIn' wow-data-delay = '0.2s'/>
                    
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                    
                    <img src={aero3} alt="" className = 'aero4 wow fadeIn' wow-data-delay = '0.8s' />
                    
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                    
                    <div className="row collect-desktop hide-on-med-and-down">
                        <div className="col s12 xl8">
                            <img src={aero5} alt="" className="aero5 wow fadeInLeft"/>
                        </div>
                        <div className="col s12 xl4">
                            <h5 className="bold wow fadeInRight">Collect Geospatial Data - <br />
                            Anytime, Anywhere</h5>
                            <p className = 'left-align wow fadeInRight' data-wow-delay = '0.1s'>
                                Digitise & Collect data in ‘real
                                time’ in user defined
                                layers and attributes with an
                                easy to use mobile app
                            </p>
                            <p className = 'left-align wow fadeInRight' data-wow-delay = '0.2s'>
                                This <span className = 'blue-text text-darken-2 bold'>GeoDigital Survey </span> saves
                                50-70% of the time and
                                resources consumed in the
                                traditional Paper Survey
                            </p>
                            <p className = 'left-align wow fadeInRight' data-wow-delay = '0.3s'>
                                Create layers and their respective
                                attributes, along with beautiful
                                custom styling, on-the-go, with
                                just a few taps.
                            </p>
                        </div>
                    </div>
                    <div className="row collect-mobile show-on-med-and-down hide-on-med-and-up">
                        <div className="col center s12">
                            <h5 className="bold wow fadeInLeft">Collect Geospatial Data - <br />
                            Anytime, Anywhere</h5>
                        </div>
                        <div className="col center s12">
                            <img src = {aero5} className = 'aero5 wow fadeInRight' alt = '' />
                        </div>
                        <div className="col s12">
                            <p className = 'left-align wow fadeInLeft' data-wow-delay = '0.1s'>
                                Digitise & Collect data in ‘real
                                time’ in user defined
                                layers and attributes with an
                                easy to use mobile app
                            </p>
                            <p className = 'left-align wow fadeInLeft' data-wow-delay = '0.2s'>
                                This <span className = 'blue-text text-darken-2 bold'>GeoDigital Survey </span> saves
                                50-70% of the time and
                                resources consumed in the
                                traditional Paper Survey
                            </p>
                            <p className = 'left-align wow fadeInLeft' data-wow-delay = '0.3s'>
                                Create layers and their respective
                                attributes, along with beautiful
                                custom styling, on-the-go, with
                                just a few taps.
                            </p>
                        </div>
                    </div>
                
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>

                    <div className="row collect-desktop hide-on-med-and-down">
                        <div className="col s12 xl4">
                            <h5 className="bold wow fadeInLeft">Manage Geospatial Data - <br />
                            Anytime, Anywhere</h5>
                            <p className = 'left-align wow fadeInLeft' data-wow-delay = '0.1s'>
                                <span className="bold blue-text text-darken-2">Visualise</span> and <span className="bold blue-text text-darken-2">Edit</span> all the layers
                                & their respective features/
                                elements in a Beautiful, Elegant
                                and a Neatly designed interface.
                            </p>
                            <p className = 'left-align wow fadeInLeft' data-wow-delay = '0.2s'>
                                With LAYER BOX and INFO BOX
                                appearing contextually on the
                                left, only the most relevant
                                features stay on the screen
                            </p>
                            <p className = 'left-align wow fadeInLeft' data-wow-delay = '0.3s'>
                                Convert text data into attractive
                                looking and functional colourcoded geospatial
                                representation.
                            </p>
                        </div>
                        <div className="col s12 xl8">
                            <img src={aero6} alt="" className="aero6 wow fadeInRight"/>
                        </div>
                    </div>
                    <div className="row collect-mobile show-on-med-and-down hide-on-med-and-up">
                        <div className="col center s12">
                            <h5 className="bold">Manage Geospatial Data - <br />
                            Anytime, Anywhere</h5>
                        </div>
                        <div className="col center s12">
                            <img src = {aero6} className = 'aero6' alt = '' />
                        </div>
                        <div className="col s12">
                            <p className = 'left-align'>
                                    <span className="blue-text bold text-darken-2">Visualise</span> and <span className="bold blue-text text-darken-2">Edit</span> all the layers
                                    & their respective features/
                                    elements in a Beautiful, Elegant
                                    and a Neatly designed interface.
                                </p>
                                <p className = 'left-align'>
                                    With LAYER BOX and INFO BOX
                                    appearing contextually on the
                                    left, only the most relevant
                                    features stay on the screen
                                </p>
                                <p className = 'left-align'>
                                    Convert text data into attractive
                                    looking and functional colourcoded geospatial
                                    representation.
                                </p>
                        </div>
                    </div>
                
                    <div className="row"></div>
                    <div className="row"></div>

                
                   <Analyse />
                
                    <div className="row"></div>
                    <div className="row"></div>

                </div>

                <div className="yellow row app-stats">
                    <div className="row container" style = {{paddingTop: '30px', paddingBottom: '30px'}}>
                        <div className="col s6 l3">
                            <a href = 'https://play.google.com/store/apps/details?id=org.elevenx.measureapp&hl=en' target = 'blank'>
                                <button className="getapp" style = {{marginTop: '20px', borderColor: 'blue'}}>Get The App</button>
                            </a>
                        </div>
                        <div className="col s3">
                            <a href = 'https://play.google.com/store/apps/details?id=org.elevenx.measureapp&hl=en' target = 'blank'>
                                <button className="getapp" style = {{marginTop: '20px', borderColor: 'blue'}}>View AeroGMS</button>
                            </a>
                        </div>
                        <div className="s6 l3"></div>
                        <div className="col s4 l2">
                            <div className="center app-stat bold grey-text text-darken-2" id = 'download-count'>
                                
                            </div>
                            <div className="center grey-text text-darken-2" style = {{fontSize: '18px'}}>Downloads</div>
                        </div>
                        <div className="col s4 l2">
                            <div className="center app-stat bold grey-text text-darken-2" id = 'countries-count'>
                                
                            </div>
                            <div className="center grey-text text-darken-2" style = {{fontSize: '18px'}}>Countries</div>
                        </div>
                        <div className="col s4 l2">
                            <div className="center app-stat bold grey-text text-darken-2" id = 'rating'>
                                &#9733;
                            </div>
                            <div className="center grey-text text-darken-2" style = {{fontSize: '18px'}}>Rating</div>
                        </div>
                    </div>
                </div>
                
                <DownloadModal />
                <ScrollTop />
                <AeroFooter />
            </div>
        );
    }
}

export default Aerogms;