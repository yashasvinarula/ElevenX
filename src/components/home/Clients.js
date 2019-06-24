import React, { Component } from 'react';

const nhai = require('../../images/nhai.png');
const sdmc = require('../../images/sdmc.png');
const wapcos = require('../../images/wapcos.png');
const pmidc = require('../../images/pmidc.png');


class Clients extends Component {
    render() {
        return (
            <div className = 'grey lighten-3 clients'>
               <div className="container">
               <center>
                    <button className = 'wow bounceIn round-btn services-btn blue-text text-darken-2 blue lighten-4'>
                        Clients
                    </button>              
                </center>
                <h3 className = 'center wow fadeIn' data-wow-delay = '0.5s'>Our Clients</h3>
                <div className="row"></div>
                <div style = {{height: '25px'}}></div>
                <div className="row">
                    <div className="col s12 m6 l6 xl3  center wow fadeIn" data-wow-delay = '0.6s' style = {{marginBottom: '20px'}}>
                        <img src={nhai} alt="" style = {{width: '80%', height: '150px', maxWidth: '180px'}}/>
                    </div>
                    <div className="col s12 m6 l6 xl3 center wow fadeIn" data-wow-delay = '0.6s' style = {{marginBottom: '20px'}}>
                        <img src={sdmc} alt="" style = {{width: '60%', height: '150px', maxWidth: '180px'}}/>
                    </div>
                    <div className="col s12 m6 l6 xl3 center wow fadeIn" data-wow-delay = '0.6s' style = {{marginBottom: '20px'}}>
                        <img src={wapcos} alt="" style = {{width: '60%', height: '150px', maxWidth: '180px'}}/>
                    </div>
                    <div className="col s12 m6 l6 xl3 center wow fadeIn" data-wow-delay = '0.6s' style = {{marginBottom: '20px'}}>
                        <img src={pmidc} alt="" style = {{width: '60%', height: '150px', maxWidth: '180px'}}/>
                    </div>
                </div>
                </div> 
            </div>
        );
    }
}

export default Clients;