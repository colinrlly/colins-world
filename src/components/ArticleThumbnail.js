import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ArticleThumbnail extends Component {
    render() {
        return (
            <div className="ArtThmbContainer">
                <Link to={`/articles/${this.props.title}`} className="link">
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