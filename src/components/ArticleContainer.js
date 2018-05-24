import React, { Component } from 'react';
import ArticleLoader from './ArticleLoader'

import '../static/css/article.css'

class ArticleContainer extends Component {
    render() {
        return (
            <div className='articleContainer'>
                <h1 className='title'>{ this.props.title }</h1>
                <div className='underTitleContainer'>
                    { this.props.github ?
                        <div className='githubLinkContainer'>
                            <a href={ this.props.github } className='underTitle highlight'><span>GITHUB</span></a> 
                            <span className='underTitle underTitleSpacer'>.</span>
                        </div>
                        : '' 
                    }
                    <span className='underTitle'>{ this.props.time }</span>
                </div>
                <ArticleLoader
                    article={ this.props.article }/>
            </div>
        )
    }
}

export default ArticleContainer;
