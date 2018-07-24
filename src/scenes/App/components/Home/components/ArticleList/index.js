import React, { Component } from 'react';

import ArticleThumbnail from './components/ArticleThumbnail/index.js';

import './style.css'

class ArticleList extends Component {
    render() {
        let articleNodes = this.props.data.map(article => {
            return (
                    <ArticleThumbnail 
                        key={ article['_id'] }
                        title={ article.title }
                        url_name={ article.url_name }
                        summary={ article.summary }
                        thumbnail={ article.thumbnail }
                        tags={ article.tags }
                        github={ article.github }
                        time={ article.time }
                    />
            )
        })

        return (
            <div className="ArticleList">
                { articleNodes }
            </div>
        )
    }
}

export default ArticleList;