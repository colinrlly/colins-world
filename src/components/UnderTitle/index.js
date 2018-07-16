import React, { Component } from 'react';

import './style.css'

class UnderTitle extends Component {
    render() {
        return (
            <div className='underTitleContainer'>
                <span className='underTitle'>{ this.props.time }</span>
                { this.props.github ?
                    <div className='githubLinkContainer'>
                        <span className='underTitle underTitleSpacer'>.</span>
                        <a href={ this.props.github } className='underTitle highlight'><span>GITHUB</span></a> 
                    </div>
                    : '' 
                }
            </div>
        )
    }
}

export default UnderTitle;