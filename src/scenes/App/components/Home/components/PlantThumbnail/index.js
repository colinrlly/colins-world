import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './style.css';

class PlantThumbnail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles_loaded: this.props.articles_loaded,  // Updated once the articles are loaded
            width: 300,
            visibility: 'hidden'
        }

        window.addEventListener('resize', this.onResize.bind(this));
    }

    onResize() {
        // Get how many ArticleThumbnails are currently showing across the first row
        var thumbs = document.getElementsByClassName('ArticleThumbnail');
        var num_across = 0;


            window.setTimeout(function() {
                if (thumbs[0]) {  // Don't try to render when on other pages
                    var previous_h = thumbs[0].getBoundingClientRect().top;

                    for (var i = 0; i < thumbs.length; i++) {
                        var position = thumbs[i].getBoundingClientRect();
                        if (position.top === previous_h) {
                            previous_h = position.top;
                            num_across++;
                        }
                    }

                    // Set width equal to width of ArticleThumbnails across
                    this.setState({
                        width: ((300 * num_across) + (30 * (num_across - 1))) + 'px',
                        visibility: 'visible'  // Only show when we have a proper width
                    });
                }
            }.bind(this), 1);  // Waiting 1 milisecond for ArticleThumbnails to be rendered............
    }

    render() {
        var {width} = this.state;
        var {visibility} = this.state;
        var {articles_loaded} = this.props;

        if (articles_loaded) {
            this.onResize();
            return (
                <div className='PlantThumbnail' style={{width: width, visibility: visibility}}>
                    <Link to={{ 
                        pathname: `/plants`}}
                        className='link'>
                        <h3>PLANT DASHBOARD</h3>
                        <p>Live statistics from my automatic grow chamber.</p>
                    </Link>
                </div>
            )
        } else {
            return (<div/>)
        }
    }
}

export default PlantThumbnail;