import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ArticleThumbnail extends Component {

    render() {
        return (
            <div>
                <Link to={`/articles/${this.props.title}`}>Test Link</Link>
                <p>{ this.props.title }</p>
                <p>{ this.props.summary }</p>
                <p>{ this.props.date }</p>
                <p>{ this.props.thumbnail }</p>
                <p>{ this.props.tags }</p>
                <p>{ this.props.article }</p>
            </div>
        )
    }
}

export default ArticleThumbnail;