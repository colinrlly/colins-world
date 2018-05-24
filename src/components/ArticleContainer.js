import React, { Component } from 'react';
import ArticleLoader from './ArticleLoader'

import '../static/css/article.css'

class ArticleContainer extends Component {
    render() {
        return (
            <div className="articleContainer">
                <h1>{this.props.title}</h1>
                <ArticleLoader
                    article={this.props.article}/>
            </div>
        )
    }
}

export default ArticleContainer;