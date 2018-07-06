import React, { Component } from 'react';
import ArticleLoader from './ArticleLoader'

import '../static/css/article.css'

class ArticleContainer extends Component {
    render() {
        return (
            <div className='articleContainer'>
                <h1 className='title'>{ this.props.title }</h1>
                <div className='underTitleContainer'>
                    <span className='underTitle'>{ this.props.time }</span>
                    { this.props.github ?
                        <div className='githubLinkContainer'>
                            <span className='underTitle underTitleSpacer'>.</span>
                            <a href={ this.props.github } className='underTitle highlight'><span>GITHUB</span></a> 
                        </div>
                        : '' 
                    }
                </div>
                <ArticleLoader
                    article={ this.props.article }/>
            </div>
        )
    }
}

export default ArticleContainer;
