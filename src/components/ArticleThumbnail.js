// title={ article.title }
// summary={ article.summary }
// date={ article.date }
// thumbnail={ article.thumbnail }
// tags={ article.tags }
// article={ article.article }

import React, { Component } from 'react';

class ArticleThumbnail extends Component {
    render() {
        return (
            <div>
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