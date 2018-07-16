import React, { Component } from 'react';

import './style.css'

class UnderTitle extends Component {
    render() {
        return (
            <h1 className='title'>{ this.props.title }</h1>
        )
    }
}

export default UnderTitle;