import React, { Component } from 'react';
import $ from 'jquery';

const aero10 = require('../../images/aero10.png');
const aero11 = require('../../images/aero11.png');
const aero12 = require('../../images/aero12.png');

class Analyse extends Component {
    
    componentDidMount(){
        const that = this;
        $(document).ready(function(){
            $('.aero10').hide();
            $('.aero12').hide();
            $('.aero11').show();

            $('.analyse-data').hide();
            $('.analyse-data').eq(0).show()
            $('.grey-text')
                .removeClass('text-darken-3')
                .addClass('text-darken-1');
            $('.grey-text')
                .eq(0)
                .removeClass('text-darken-1')
                .addClass('text-darken-3');

            // $('img.aero7').on('load', function () {
            //     $(this).slideDown('faster');
            // });
               
            // $('.analyse-list').click(function(){
            //     $('.analyse-data').hide();
            //     $('.grey-text')
            //         .removeClass('text-darken-3')
            //         .addClass('text-darken-1');
            //     $(this)
            //         .find('.analyse-data')
            //         .slideDown('fast');
            //     $(this)
            //         .find('.grey-text')
            //         .removeClass('text-darken-1')
            //         .addClass('text-darken-3')
                
            //         switch($(this).attr('data-img')) {
            //         case 'aero10':
            //             that.setState({img: aero10});
            //             $('.aero11').hide();
            //             $('.aero12').hide();
            //             $('.aero10').removeClass('animated slideInLeft')
            //             $('.aero10').addClass('animated slideInLeft')
            //             $('.aero10').show();

            //             break;
            //         case 'aero11':
            //             that.setState({img: aero11});
            //             $('.aero12').hide();
            //             $('.aero10').hide();
            //             $('.aero11').removeClass('animated slideInLeft')
            //             $('.aero11').addClass('animated slideInLeft')
            //             $('.aero11').show();
            //             break;
            //         case 'aero12':
            //             that.setState({img: aero12});
            //             $('.aero11').hide();
            //             $('.aero10').hide();
            //             $('.aero12').removeClass('animated slideInLeft')
            //             $('.aero12').addClass('animated slideInLeft')
            //             $('.aero12').show();
            //             break;
                        
            //         default:
            //             that.setState({img: aero10});
            //     }                
            // })
        })
    }

    constructor(){
        super();
        this.state = {
            img: aero11
        };
    }

    render() {
        return (
            <div>
                <div className = 'row hide-on-med-and-down'>
                    {/* <img id = 'img-analyse' src = {this.state.img} className = 'wow slideInLeft aero7' alt = '' /> */}
                    {/* <img id = 'img-analyse' src = {aero10} className = 'wow slideInLeft aero7 aero10' alt = '' />
                    <img id = 'img-analyse' src = {aero11} className = 'wow slideInLeft aero7 aero11' alt = '' />
                    <img id = 'img-analyse' src = {aero12} className = 'wow slideInLeft aero7 aero12' alt = '' /> */}
                <div className="col s12 l8 carousel carousel-slider">
                    <a className="carousel-item" data-img = 'aero10' href="#one!"><img src= {aero10} alt = '' /></a>
                    <a className="carousel-item" data-img = 'aero11' href="#two!"><img src= {aero11} alt = '' /></a>
                    <a className="carousel-item" data-img = 'aero12' href="#four!"><img src={aero12} alt = ''  /></a>
                </div>
                <div className="col s12 l4 analyse-p">
                    <h5 className="bold">
                        Analyse Geospatial Data<br />
                        — Anytime, Anywhere
                    </h5>
                    <ul>
                        <li className = 'analyse-list wow fadeInRight' data-wow-delay = '0.1s' data-img = 'aero11'>
                            <div className = 'aero11-title grey-text text-darken-1 left-align bold' style = {{fontSize: '16x'}}>Combine filters to study trends</div>
                            <div className = 'aero11-text analyse-data left-align' style = {{display: 'block'}}>Various filters can be combined to study various regions</div>
                        </li>
                        <li className = 'analyse-list wow fadeInRight' data-wow-delay = '0.2s' data-img = 'aero12'>
                            <div className = 'aero12-title grey-text text-darken-1 left-align bold' style = {{fontSize: '16px'}}>Generate Charts</div>
                            <div className = 'aero12-text analyse-data left-align'>Bar and Pie chart can be generated to analyse comparison of data in an efficient and easy way</div>
                        </li>
                        <li className = 'analyse-list wow fadeInRight' data-wow-delay = '0.3s' data-img = 'aero10'>
                            <div className = 'aero10-title grey-text text-darken-1 left-align bold' style = {{fontSize: '16px'}}>Download Files</div>
                            <div className = 'aero10-text analyse-data left-align'>Shape and Attribute files of a given city can be downloaded and used for offline analysis</div>
                        </li>
                    </ul>

                </div>
            </div>
                <div className = 'row hide-on-med-and-up show-on-medium-and-down'>
                    <div className="col s12">
                        <h5 className="center bold">
                            Analyse Geospatial Data<br />
                            — Anytime, Anywhere
                        </h5>
                    </div>
                    <div className="col s12 carousel carousel-slider">
                        <a className="carousel-item" data-img = 'aero10' href="#one!"><img src= {aero10} alt = '' /></a>
                        <a className="carousel-item" data-img = 'aero11' href="#two!"><img src= {aero11} alt = '' /></a>
                        <a className="carousel-item" data-img = 'aero12' href="#four!"><img src={aero12} alt = ''  /></a>
                    </div>
                    <div className="col s12">
                        <ul>
                            <li className = 'analyse-list wow fadeInRight' data-wow-delay = '0.1s' data-img = 'aero11'>
                                <div className = 'aero11-title grey-text text-darken-1 left-align bold' style = {{fontSize: '16x'}}>Combine filters to study trends</div>
                                <div className = 'aero11-text analyse-data left-align' style = {{display: 'block'}}>Various filters can be combined to study various regions</div>
                            </li>
                            <li className = 'analyse-list wow fadeInRight' data-wow-delay = '0.2s' data-img = 'aero12'>
                                <div className = 'aero12-title grey-text text-darken-1 left-align bold' style = {{fontSize: '16px'}}>Generate Charts</div>
                                <div className = 'aero12-text analyse-data left-align'>Bar and Pie chart can be generated to analyse comparison of data in an efficient and easy way</div>
                            </li>
                            <li className = 'analyse-list wow fadeInRight' data-wow-delay = '0.3s' data-img = 'aero10'>
                                <div className = 'aero10-title grey-text text-darken-1 left-align bold' style = {{fontSize: '16px'}}>Download Files</div>
                                <div className = 'aero10-text analyse-data left-align'>Shape and Attribute files of a given city can be downloaded and used for offline analysis</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Analyse;