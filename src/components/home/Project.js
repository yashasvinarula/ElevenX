import React, { Component } from 'react';

class Project extends Component {
    render() {
        const {img, title, content, detailedContent, classesApplied, child} = this.props;
        const id = `modal-${child}`;
        let arr = [1,2,3,4,5,6]
        return (
            <div className  = {classesApplied} data-wow-delay = '0.5s' style = {{height: 'auto', overflow : 'auto', marginBottom: '20px'}}>
                <div className="card-image center">
                    <img src = {img} alt = '' style = {{paddingLeft: '0%', paddingTop: '10px'}}/>
                </div>
                <div className="card-content" style = {{overflow: 'auto'}}>
                    <div className="bold card-title grey-text text-darken-2">{title}</div>
                    <p>{content}</p>
                </div>
                {
                    child === 1 && 
                    <div className="right-align blue-text card-action">
                        <a 
                            className = 'blue-text modal-triggerr' 
                            href= {child === 2 ? `#${id}` : '/aerogms'}
                        >
                            Know More
                        </a>
                    </div>
                }
                
                <div id={id} className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h4 className = 'center-align'>{title}</h4>
                        <div className="center">
                            <img src = {img} alt = "" />
                        </div>
                        <div>
                            {
                                arr.map(item => (
                                    <div key = {item}>
                                        {detailedContent}
                                        <br/>
                                        <br/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;