import React, { Component } from 'react';
import Project from './Project';
const aerogms = require('../../images/aeroLogo.png');
const ropeway = require('../../images/ropeway.jpg');

class Purpose extends Component {
    render() {
        const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        return (
            <div className = 'purpose blue lighten-5' id = 'purpose'>
                <div className = 'container'>
                    <center>
                        <button className = 'wow bounceIn round-btn services-btn blue-text text-darken-2 blue lighten-4'>
                            projects
                        </button>
                    </center>
                    <h3 className = 'center wow fadeIn' data-wow-delay = '0.3s'>Our Projects</h3>
                    <div className="row"></div>
                    <div style = {{height: '25px'}}></div>
                    <div className="center row">
                        <Project 
                            title = 'GIS Project'
                            img = {aerogms}
                            child = {1}
                            content = 'Geographic Management System is framework for city administrators to collect, analyze, extract and visualize useful information for cities and towns. It encompasses all aspects of management & planning process in an organisation, from survey to advanced analytics'
                            detailedContent = {text}
                            classesApplied = 'col s12 m8 offset-m2 l5 xl5 center card wow zoomIn faster'
                        />
                        <Project 
                            title = 'Ropeway Project'
                            img = {ropeway}
                            child = {2}
                            content = 'The Ropeways unit provides comprehensive services including Design, Engineering and Consultancy services for Passenger and Material Aerial Ropeways and Funicular Railway Projects including various support services from the concept stage to the commissioning of such projects.'
                            detailedContent = 'Detailed info about ropeway project'
                            classesApplied = 'col s12 m8 offset-m2 l5 offset-l2 xl5 center offset-xl2 card wow zoomIn faster'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Purpose;