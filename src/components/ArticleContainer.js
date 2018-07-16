import React, { Component } from 'react';
import ArticleLoader from './ArticleLoader'
import UnderTitle from './UnderTitle/index.js';
import Title from './Title/index.js'

import '../static/css/article.css'

class ArticleContainer extends Component {
    render() {
        return (
            <div className='articleContainer'>
                <Title
                    title={ this.props.title }/>
                <UnderTitle
                    time={ this.props.time }
                    github={ this.props.github }/>
                <ArticleLoader
                    article={ this.props.article }/>
            </div>
        )
    }
}

export default ArticleContainer;
