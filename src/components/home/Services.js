import React, {Component} from 'react';

const urban = require('../../images/urban.png');
const transport = require('../../images/transport.png');
const smart_city = require('../../images/smart_city.png');
const geospatial = require('../../images/geospatial.png');
const dpr = require('../../images/dpr.png');
const research = require('../../images/research.png');


class Services extends Component{
    render(){
        return(
            <div className = 'services' style = {{background: '#f9f8f8'}}>
                <div className = 'container'>
                    <center><button className = 'wow bounceIn round-btn services-btn blue-text text-darken-2 blue lighten-4' id = 'services'>
                        Our Services
                    </button></center>
                    <h3 className = 'center wow fadeIn' data-wow-delay = '0.5s'>What We Do</h3>
                    <div className = 'row'></div>
                    <div className = 'row'>
                        <div className  = 'col s12 m6 l6 xl4 wow zoomIn faster' data-wow-delay = '0.25s'>
                            <div className = 'services-card'>
                                <div className = 'services-card-front valign-wrapperr'>
                                    <div>
                                        <img src = {urban} alt = '' className = 'service-img' />
                                        <h5>Urban Planning and Management</h5>
                                    </div>                                    
                                </div>
                                <div className = 'blue lighten-2 services-card-rear valign-wrapper'>
                                    <h6 className = 'white-text' style = {{lineHeight: '1.6'}}>
                                        Creation of Master Plans, Development Plans, Regional Plans, District Plans, Sector Plans, Colony Plans and other Local Area Plans
                                    </h6>
                                </div>                                
                            </div>
                        </div>
                        <div className  = 'col s12 m6 l6 xl4 wow zoomIn faster' data-wow-delay = '0.25s'>
                            <div className = 'services-card'>
                                <div className = 'services-card-front valign-wrapperr'>
                                    <div>
                                        <img src = {transport} alt = '' className = 'service-img' />
                                        <h5>Transport Planning & Traffic Management</h5>
                                    </div>                                    
                                </div>
                                <div className = 'blue lighten-2 services-card-rear valign-wrapper'>
                                    <h6 className = 'white-text' style = {{lineHeight: '1.6'}}>
                                        Mobility Plans, Parking Management Plan, Traffic Management Plan, City Public Transport Plan, Modelling
                                    </h6>
                                </div>                                
                            </div>
                        </div>
                        <div className  = 'col s12 m6 l6 xl4 wow zoomIn faster' data-wow-delay = '0.25s'>
                            <div className = 'services-card'>
                                <div className = 'services-card-front valign-wrapperr'>
                                    <div>
                                        <img src = {smart_city} alt = '' className = 'service-img' />
                                        <h5>Smart City Solutions</h5>
                                    </div>                                    
                                </div>
                                <div className = 'blue lighten-2 services-card-rear valign-wrapper'>
                                    <h6 className = 'white-text' style = {{lineHeight: '1.6'}}>
                                        AeroGMS (A proprietary tool by ElevenX), Intelligent Transport System, Data Analytics, Mobile Applications
                                    </h6>
                                </div>                                
                            </div>
                        </div>
                        <div className  = 'col s12 m6 l6 xl4 wow zoomIn faster' data-wow-delay = '0.25s'>
                            <div className = 'services-card'>
                                <div className = 'services-card-front valign-wrrapper'>
                                    <div>
                                        <img src = {geospatial} alt = '' className = 'service-img' />
                                        <h5>GIS and Geospatial Solutions</h5>
                                    </div>                                    
                                </div>
                                <div className = 'blue lighten-2 services-card-rear valign-wrapper'>
                                    <h6 className = 'white-text' style = {{lineHeight: '1.6'}}>
                                        GIS Based Master Plans, Location Intelligence, Geographic and 3D Modelling
                                    </h6>
                                </div>                                
                            </div>
                        </div>
                        <div className  = 'col s12 m6 l6 xl4 wow zoomIn faster' data-wow-delay = '0.25s'>
                            <div className = 'services-card'>
                                <div className = 'services-card-front valign-wrapprer'>
                                    <div className = 'center'>
                                        <img src = {dpr} alt = '' className = 'service-img' />
                                        <h5>Feasibility Studies and DPR Preparation</h5>
                                    </div>                                    
                                </div>
                                <div className = 'blue lighten-2 services-card-rear valign-wrapper'>
                                    <h6 className = 'white-text' style = {{lineHeight: '1.6'}}>
                                        Market Scenario Assessment, Stakeholder Surveys, Infrastructure Feasibility Assessment
                                    </h6>
                                </div>                                
                            </div>
                        </div>
                        <div className  = 'col s12 m6 l6 xl4 wow zoomIn faster' data-wow-delay = '0.25s'>
                            <div className = 'services-card'>
                                <div className = 'services-card-front'>
                                    <div className = 'center'>
                                        <img src = {research} alt = '' className = 'service-img' />
                                        <h5>Research Studies</h5>
                                    </div>                                    
                                </div>
                                <div className = 'blue lighten-2 services-card-rear valign-wrapper'>
                                    <h6 className = 'white-text' style = {{lineHeight: '1.6'}}>
                                        Market Scenario Assessment, Stakeholder Surveys, Infrastructure Feasibility Assessment
                                    </h6>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;