import React, { Component } from 'react';
import { read } from 'fs';
const img = require('../../images/about.jpg');
const banner11 = require('../../images/banner11.gif');


class AboutUs extends Component {

    constructor(){
        super();
        this.state = {
            readMore: false,
            animate: true
        };
        // this.changeReadMore = this.changeReadMore.bind(this);
    }

    changeReadMore = () => {
        const {readMore} = this.state;
        this.setState({readMore: !readMore, animate: false});
    }

    render() {
        const {readMore} = this.state;
        const readMoreText = (
            <div>
                <p style = {{marginBottom: '0'}}>
                    When citizens of a nation succeed, all problems turns into opportunities and <b>EVERYONE GROWS!</b>
                    <br/><br/>
                    Through our dedicated team of professionals we want to build better cities by helping and empowering stakeholder - citizens, governments, administrators, enterprises create the value they are looking for and fulfil the vision of Urban Transformation and Smart Cities through Digital India, by delivering quality in <b>Urban and Transport Planning, GIS solutions, Research, Feasibility Studies & DPR Preparation services.</b>
                    <br/><br/>
                    <i>This is our purpose - and why we exist as an organisation.</i>
                    <br/><br/>
                    We have built a proprietary cutting edge geographic management system, 'AeroGMS', to empower Governments and Enterprises take much more informed decisions by solving every problem through geospatial data. our unique solution enables them to not only create and analyse geographic data on the phone, but also integrate customizable MIS layer with it making it scalable for everyday applications.
                </p>
                {/* <div className="center">
                    <h3>Our Purpose</h3>
                </div>
                <div className="row">
                    <div className="col s12 l6 ">
                        <div className="row">
                            <div className="col s12 m6" style = {{position: 'relative', height: '10rem'}}>
                                <i className="material-icons blue-text text-darken-1 medium" style = {{position: 'absolute', top: '0rem'}}>lightbulb_outline</i>
                                <span className="grey-text text-darken-4" style = {{paddingLeft: '4rem'}}>To Empower Stakeholders</span>
                            </div>
                            <div className="col s12 m6" style = {{position: 'relative', height: '10rem'}}>
                                <i className="material-icons blue-text text-darken-1 medium" style = {{position: 'absolute', top: '0rem'}}>lightbulb_outline</i>
                                <span className="grey-text text-darken-4" style = {{paddingLeft: '4rem'}}>To Empower Stakeholders</span>
                            </div>
                            <div className="col s12 m6" style = {{position: 'relative', height: '10rem'}}>
                                <i className="material-icons blue-text text-darken-1 medium" style = {{position: 'absolute', top: '0rem'}}>lightbulb_outline</i>
                                <span className="grey-text text-darken-4" style = {{paddingLeft: '4rem'}}>To Empower Stakeholders</span>
                            </div>
                            <div className="col s12 m6" style = {{position: 'relative', height: '10rem'}}>
                                <i className="material-icons blue-text text-darken-1 medium" style = {{position: 'absolute', top: '0rem'}}>lightbulb_outline</i>
                                <span className="grey-text text-darken-4" style = {{paddingLeft: '4rem'}}>To Empower Stakeholders</span>
                            </div>
                        </div>
                    </div>
                    <div className = 'col s8 m6 l6 img-container hide-on-med-and-down'>
                        <img src = {img} alt = '' />
                    </div>                     */}
                {/* </div> */}
            </div>
        )

        return (
            <div className = 'aboutus blue lighten-5' id = 'aboutus'>
                <div className="container">
                    <center>
                        <button className = 'wow bounceIn round-btn services-btn blue-text text-darken-2 blue lighten-4'>
                            ElevenX
                        </button>              
                    </center>
                        <h3 className = 'center wow fadeIn' data-wow-delay = '0.5s'>About Us</h3>
                        {/* <div className="row"></div> */}
                        {/* <h5 className = 'center buck'>
                            "The best way to <span className = 'bold'>PREDICT</span><br/>the <span className = 'bold'>FUTURE</span>,<br />is to <span className = 'bold'>PLAN</span> and <span className = 'bold'>CREATE</span> it"
                        </h5> */}
                        {/* <div className="row"></div> */}
                        <div className = 'hide-on-med-and-down show-on-medium-and-up' style = {{height: '25px'}}></div>
                        <div className="row hide-on-med-and-down show-on-medium-and-up"></div>
                        <div className="row">
                            <div className="col s12 center l5" style = {{height: '300px', overflow: 'hidden', padding: '0'}} >
                                <img src = {img} alt = '' style = {{maxWidth: '465px', height: '100%', width: '100%'}} />
                            </div>
                            <div className="col s12 show-on-medium-and-down	hide-on-med-and-up" style = {{height: '25px'}}></div>
                            <div className="col s12 l6 offset-l1">
                                At ElevenX, we strongly believe that efficient planning and management of towns, cities and neighbourhoods can improve the quality of life for 1.35 billion Indians            
                                <br/><br/>
                                When citizens of a nation succeed, all problems turns into opportunities and <b>EVERYONE GROWS!</b>
                                <br/><br/>
                                Through our dedicated team of professionals we want to build better cities by helping and empowering stakeholder - citizens, governments, administrators, enterprises create the value they are looking for and fulfil the vision of Urban Transformation and Smart Cities through Digital India, by delivering quality in <b>Urban and Transport Planning, GIS solutions, Research, Feasibility Studies & DPR Preparation services.</b>
                            </div>
                        </div>
                        <div className="row"></div>
                        <h5 className = 'center'><i>This is our purpose - and why we exist as an organisation.</i></h5>
                        {/* At ElevenX, we strongly believe that efficient planning and management of towns, cities and neighbourhoods can improve the quality of life for 1.35 billion Indians
                        {readMoreText} */}
                </div>

                {/* <div className = 'desktopaboutus container' style = {{position: 'relative'}}>
                  <div className = 'row'></div>
                    <div className = 'row'>
                        <div className = 'col s8 m6 l6 img-container wow zoomIn' data-wow-delay = '0.3s'>
                            <img src = {img} alt = '' style = {{width: '100%', height: '100%'}} />
                        </div>
                        <div className = 'col s8 m6 l4 offset-l2' style = {{position: 'relative', height: '300px'}}>
                            <button className = 'wow bounceIn round-btn services-btn blue-text text-darken-2 blue lighten-4'>
                                ElevenX
                            </button>
                            <h3 className = 'wow fadeIn' data-wow-delay = '0.5s'>About Us</h3>
                            <p className = 'wow fadeInLeft' data-wow-delay = '0.6s' style = {{textAlign: 'left'}}>
                                {
                                    !readMore 
                                    ? 'At ElevenX, we strongly believe that efficient planning and management of towns, cities and neighbourhoods can improve the quality of life for 1.35 billion Indians'
                                    : 'At ElevenX, we strongly believe that efficient planning and management of towns, cities and neighbourhoods can improve the quality of life for 1.35 billion Indians. Through smart ideas and solutions, supported by data driven decisions, innovation and sustainability proliferates enabling prosperity of citizens'
                                }
                            </p>
                            {
                                !readMore && (
                                    <button 
                                        onClick = {this.changeReadMore} 
                                        className = {this.state.animate ? 'round-btn read-more black-text blue lighten-4 wow fadeInLeft' : 'round-btn read-more black-text blue lighten-4'}
                                        data-wow-delay = '0.5s' 
                                        style = {{
                                            float: 'right',
                                            height: '40px',
                                            width: '120px',
                                            borderColor: 'blue',
                                            fontSize: '16px',
                                            position: 'absolute',
                                            bottom: '0',
                                            right: '0'
                                        }}
                                    >
                                        Read More
                                    </button>
                                )
                            }
                            
                        </div>
                    </div>
                    {readMore && readMoreText}
                    {readMore && (
                        <button onClick = {this.changeReadMore} className = 'round-btn read-more black-text blue lighten-4' 
                            style = {{
                                float: 'right',
                                height: '40px',
                                width: '120px',
                                borderColor: 'blue',
                                fontSize: '16px',
                                position: 'absolute',
                                bottom: '-47px',
                                right: '0'
                            }}
                        >
                            Show Less
                        </button>
                    )}
                </div>
                <div className="responsiveaboutus container" style = {{position: 'relative'}}>
                    <div className="center">
                            <button className = 'wow bounceIn round-btn services-btn blue-text text-darken-2 blue lighten-4'>
                                ElevenX
                            </button>
                            <h3 className = 'wow fadeIn' data-wow-delay = '0.5s'>About Us</h3>
                            <img src = {img} alt = '' style = {{width: '100%', height: '100%'}} />
                            
                    </div>
                    <p className = 'wow fadeInLeft' data-wow-delay = '0.6s' style = {{textAlign: 'left'}}>
                        {
                            'At ElevenX, we strongly believe that efficient planning and management of towns, cities and neighbourhoods can improve the quality of life for 1.35 billion Indians. Through smart ideas and solutions, supported by data driven decisions, innovation and sustainability proliferates enabling prosperity of citizens'
                        }
                    </p>
                    {
                        !readMore && (
                            <button 
                                onClick = {this.changeReadMore} 
                                className = {this.state.animate ? 'round-btn read-more black-text blue lighten-4 wow fadeInLeft' : 'round-btn read-more black-text blue lighten-4'}
                                data-wow-delay = '0.5s' 
                                style = {{
                                    float: 'right',
                                    height: '40px',
                                    width: '120px',
                                    borderColor: 'blue',
                                    fontSize: '16px',
                                    position: 'absolute',
                                    bottom: '-40px',
                                    right: '35px'
                                }}
                            >
                                Read More
                            </button>
                        )
                    }
                    {readMore && readMoreText}
                    {readMore && (
                        <button onClick = {this.changeReadMore} className = 'round-btn read-more black-text blue lighten-4' 
                            style = {{
                                float: 'right',
                                height: '40px',
                                width: '120px',
                                borderColor: 'blue',
                                fontSize: '16px',
                                position: 'absolute',
                                bottom: '-47px',
                                right: '0'
                            }}
                        >
                            Show Less
                        </button>
                    )}
                </div> */}
            </div>
        );
    }
}

export default AboutUs;