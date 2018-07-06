import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ArticleThumbnail extends Component {
    render() {
        return (
            <div className="ArtThmbContainer">
                <Link to={{ 
                    pathname: `/articles/${ this.props.url_name }`, 
                    state: { title: this.props.title,
                             github: this.props.github,
                             time: this.props.time } }}
                    className="link">
                    <div className="ArticleThumbnail">
                        <h3>{ this.props.title }</h3>
                        <p>{ this.props.summary }</p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ArticleThumbnail;