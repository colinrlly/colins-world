import React, { Component } from 'react';
import axios from 'axios';
import ArticleThumbnail from './ArticleThumbnail';

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadArticlesFromServer = this.loadArticlesFromServer.bind(this);
    }

    loadArticlesFromServer() {
        axios.get(this.props.url)
            .then(res => {
                this.setState({ data: res.data });
            })
    }

    componentDidMount() {
        this.loadArticlesFromServer();
        setInterval(this.loadArticlesFromServer, this.props.pollInterval);
    }

    render() {
        let articleNodes = this.state.data.map(article => {
            return (
                <div>
                    <h2>Article Thumbnaill</h2>
                    <ArticleThumbnail 
                        title={ article.title }
                        summary={ article.summary }
                        date={ article.date }
                        thumbnail={ article.thumbnail }
                        tags={ article.tags }
                        article={ article.article }
                    />
                </div>
            )
        })

        return (
            <div>
                <h1>Article List</h1>
                { articleNodes }
            </div>
        )
    }
}

export default ArticleList;