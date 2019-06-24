import React, {Component} from 'react';

class Image extends Component{
    constructor(){
        super();
        this.state = {

        };
    }
    render(){
        return(
            <div style = {{position: 'relative', backgroundAttachment: 'fixed'}} className = 'img-wrapper-home'>
                <img src = {this.props.img} alt = '' style = {{width: '100%', height: '50%', backgroundAttachment: 'fixed'}}/>
                <div style = {{position: 'absolute', top: '0', background: 'black', opacity: '0.5', height: '5%', width: '100%'}}>
                </div>
                <h2 
                    style = {{
                        display: 'block', 
                        zIndex: '100000', 
                        top: '100px', 
                        position: 'absolute'
                    }}
                >
                    {this.props.text}
                 </h2>
            </div>
        )
    }
}

export default Image;