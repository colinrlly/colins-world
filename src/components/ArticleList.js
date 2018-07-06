import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Isotope from 'isotope-layout'
import ArticleThumbnail from './ArticleThumbnail';

import '../static/css/articleList.css'

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadArticlesFromServer = this.loadArticlesFromServer.bind( this );
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
        new Isotope( grid, {
            itemSelector: '.ArtThmbContainer',
            masonry: {
                columnWidth: 350,
                isFitWidth: true,
                gutter: 50
            }
        });
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