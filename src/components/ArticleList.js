import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ArticleThumbnail from './ArticleThumbnail';
import Isotope from 'isotope-layout'

import '../static/css/articleList.css'

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadArticlesFromServer = this.loadArticlesFromServer.bind(this);
        this.initIsotope = this.initIsotope.bind( this );
}

    loadArticlesFromServer( callback ) {
        axios.get( this.props.url )
            .then( res => {
                this.setState({ data: res.data });
                callback();
            })
    }

    initIsotope() {
        var grid = ReactDOM.findDOMNode( this );
        var iso = new Isotope( grid );
        console.log(iso);
    }

    componentDidMount() {
        this.loadArticlesFromServer( this.initIsotope );
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
            <div className="ArticleList">
                { articleNodes }
            </div>
        )
    }
}

export default ArticleList;