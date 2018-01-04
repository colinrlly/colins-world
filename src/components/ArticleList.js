import React, { Component } from 'react';
import axios from 'axios';
import ArticleThumbnail from './ArticleThumbnail';

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadArticlesFromServer = this.loadArticlesFromServer.bind(this);
        this.loadArticlesTimer = 0;
    }

    loadArticlesFromServer() {
        axios.get(this.props.url)
            .then(res => {
                this.setState({ data: res.data });
            })
    }

    componentDidMount() {
        this.loadArticlesFromServer();
        this.loadArticlesTimer = setInterval(this.loadArticlesFromServer, this.props.pollInterval);
    }

    componentWillUnmount() {
        clearInterval(this.loadArticlesTimer);
    }

    render() {
        let articleNodes = this.state.data.map(article => {
            return (
                    <ArticleThumbnail 
                        key={ article['_id'] }
                        title={ article.title }
                        summary={ article.summary }
                        date={ article.date }
                        thumbnail={ article.thumbnail }
                        tags={ article.tags }
                        article={ article.article }
                    />
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