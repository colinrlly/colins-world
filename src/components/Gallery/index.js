import React, { Component } from 'react';

import './style.css'

class Gallery extends Component {
    render() {
        const {children} = this.props;
        const {accross} = this.props;
        
        var gallery_styles = {
            width: String(100 / accross) + '%'
        }

        const children_with_styles = React.Children.map(children, child =>
            React.cloneElement(child, { style: gallery_styles }));

        return (
            <div>
                {children_with_styles}
            </div>
        )
    }
}

export default Gallery;