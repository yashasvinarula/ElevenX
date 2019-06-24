import React, { Component } from 'react';

class ScrollTop extends Component {
    render(){
        return (
            <button className="section btn-floating btn-large waves-effect waves-light grey darken-2 scrolltop scrollToHome" style = {{display: 'none'}}>
                <i className="material-icons">arrow_upward</i>
            </button>
        );
    }
}

export default ScrollTop;