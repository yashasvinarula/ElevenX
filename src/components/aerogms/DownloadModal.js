import React, { Component } from 'react';

const measure_app = require('../../images/measure_app.png');

class DownloadModal extends Component {
    render() {
        return (
            <div id="download-modal" className="modal modal-fixed-footer">
                <div className="modal-content">
                    <h4 className = 'bold center'>Measure App</h4>
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row">
                        <div className="col s12 l4 center">
                            <img className = 'measure-app' src = {measure_app} alt = '' />
                        </div>
                        <div className="col s12 l8">
                            <div>
                                <span className = 'bold'>AeroGMS </span> is an extremely powerful <span className = 'bold'>Land Management Solution </span>- a combination of custom built <span className = 'bold'>GIS</span> and <span className="bold">MIS</span>, designed and developed by ElevenX Consultancy Pvt. Ltd.
                                <br /><br />
                                <span className = 'bold'>AeroGMS MEASURE</span> - Area, Distance, Perimeter’ is a robust utility from the AeroGMS ecosystem. 
                                <br/><br />
                                The <span className = 'bold'>WORLD’S HIGHEST RATED </span>land measurement app. It’s the most accurate, easy to use and insanely useful, in its domain.
                                <br/><br />
                                <b>Ideal for:</b>
                                <ul style = {{listStyleType: 'circle', paddingLeft: '0px', marginTop: '0px'}}>
                                    <li>Land Surveyors</li>
                                    <li>Students</li>
                                    <li>Urban Planners</li>
                                    <li>Transport Planners</li>    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="https://play.google.com/store/apps/details?id=org.elevenx.measureapp&hl=en" 
                        className="modal-close btn" 
                        target = '_blank'
                        style = {{
                            background: 'none',
                            border: '2px solid darkblue',
                            color: 'darkblue',
                            fontWeight: '700'
                        }}
                    >
                        Download App
                    </a>
                </div>
          </div>
        );
    }
}

export default DownloadModal;