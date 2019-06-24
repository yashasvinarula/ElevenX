import React, { Component } from 'react';
import Iframe from 'react-iframe';
// import axios from 'axios';
// const sgMail = require('@sendgrid/mail');


class ReachUs extends Component {

    componentDidMount(){
        // axios
        //     .post(`https://api.sendgrid.com/api/mail.send.jsonapi?user=aerogmsdeveloper&api_key=enbenb123&to[]=yashasvinarula99@gmail.com&toname[]=Destination&cc=ccdestination@mail.com&ccname=CCDestination&subject=Example_Subject&text=testingtextbody&from=yashasvinarula99@gmail.com`)
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err));
    }
    
    render() {
        return (
            <div className = 'reachus row' id = 'reachus' style = {{background: '#f9f8f8'}}>
                <center>
                    <button className = 'wow bounceIn round-btn services-btn blue-text text-darken-2 blue lighten-4'>
                        contact us
                    </button>
                </center>
                <h3 className = 'center wow fadeIn' data-wow-delay = '0.3s'>Reach Out To Us</h3>
                <div className="row"></div>
                <div style = {{height: '25px'}}></div>


                {/* <div className="row container">
                    <div className="col s12 l6" style = {{border: '1pxp solid #E8E8E8'}}>
                        <h4 className = 'bold'>Get in <span className="blue-text text-darken-2">Touch</span></h4>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="name" type="text" required className="validate" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="email" type="email" required className="validate" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="phone" type="number" required className="validate" />
                                <label htmlFor="phone">Phone</label>
                            </div>
                            <div className="input-field col s12">
                                <textarea id="textarea1" required className="materialize-textarea" rows = '5'></textarea>
                                <label htmlFor="textarea1">Message</label>
                            </div>
                        </div>
                        <button className="round-btn center sendmsg">
                            <span className="bold white-text">Send Message</span>
                        </button>
                    </div>
                    <div className="col s12 m12 l6 valign-wrapper iframe-container" style = {{paddingTop: '30px'}}>
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.3355784811765!2d77.12061761505205!3d28.70951558734335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01d4e67b953b%3A0xa12e395e3d5b2a21!2sElevenX+Consultancy+Pvt.+Ltd.!5e0!3m2!1sen!2sin!4v1560747837717!5m2!1sen!2sin"
                            width="100%"
                            height="80%"
                            display="initial"
                            position="relative"
                            frameBorder = '0'
                            id = 'iframe'
                            />
                    </div>
                </div> */}


               <div className="row">
                    <div className="col s12 m12 l6 form-cntnr">
                        {/* <button className = 'round-btn services-btn blue-text text-darken-2 blue lighten-4'>
                            Contact Us
                        </button> */}
                        <h4 className = 'bold' style = {{marginTop: '0px'}}>Get in <span className="blue-text text-darken-2">Touch</span></h4>
                        <form action="https://formspree.io/aerogmsdeveloper@gmail.com" method="POST">
                            <div className="row">
                                    <div className="input-field col s12">
                                        <input id="name" name = 'name' type="text" required className="validate" />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="email" name = 'email' type="email" required className="validate" />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="phone" name = 'phone' type="number" required className="validate" />
                                        <label htmlFor="phone">Phone</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <textarea name = 'message' id="textarea1" required className="materialize-textarea" rows = '5'></textarea>
                                        <label htmlFor="textarea1">Message</label>
                                    </div>
                            
                            </div>
                            <button className="round-btn sendmsg">
                                <span className="bold white-text">Send Message</span>
                            </button>
                        </form>
                    </div>
                    <div className="col s12 m12 l6 valign-wrapper iframe-container" style = {{paddingTop: '0px', paddingLeft: '10px'}}>
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.3355784811765!2d77.12061761505205!3d28.70951558734335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01d4e67b953b%3A0xa12e395e3d5b2a21!2sElevenX+Consultancy+Pvt.+Ltd.!5e0!3m2!1sen!2sin!4v1560747837717!5m2!1sen!2sin"
                        width="100%"
                        height="80%"
                        display="initial"
                        position="relative"
                        frameBorder = '0'
                        id = 'iframe'
                        />
                </div>
                </div>
            </div>
        );
    }
}

export default ReachUs;