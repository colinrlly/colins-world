import React, { Component } from 'react';
import axios from 'axios';

import ArticleThumbnail from './components/ArticleThumbnail/index.js';

import './style.css'

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadArticlesFromServer = this.loadArticlesFromServer.bind( this );
    }

    loadArticlesFromServer() {
        axios.get( this.props.url )
            .then( res => {
                this.setState({ data: res.data });
            })
    }

    componentDidMount() {
        this.loadArticlesFromServer();
    }

    render() {
        let articleNodes = this.state.data.map(article => {
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