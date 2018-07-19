import React, { Component } from 'react';

import Title from '../../../../components/Title/index.js'
import UnderTitle from '../../../../components/UnderTitle/index.js';
import ArticleLoader from './components/ArticleLoader/index.js'

import './style.css'

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
