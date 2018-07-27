import React, { Component } from 'react';
import axios from 'axios';

import ArticleList from './components/ArticleList/index.js';
import PlantThumbnail from './components/PlantThumbnail/index.js';

import './style.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            data: [],
            articles_loaded: false
        };
        this.loadArticlesFromServer = this.loadArticlesFromServer.bind(this);
    }

    loadArticlesFromServer() {
        axios.get( 'http://192.168.254.44:3001/api/articles' )
            .then( res => {
                this.setState({ 
                    data: res.data,
                    articles_loaded: true
                });
            })
    }

    componentDidMount() {
        this.loadArticlesFromServer();
    }

    render() {
        var {data} = this.state;
        var {articles_loaded} = this.state;

        return (
            <div>
                <div className="introContainer">
                    <span className='intro'>Hello, my name is Colin Reilly and I am a Computer Science student at </span>
                    <a href="http://www.rit.edu/" className='intro highlight'>Rochester Institute of Technology</a>
                    <span className='intro'>. Currently I am interested in controlled environment agriculture and web development.</span>
                </div>
                <PlantThumbnail
                    articles_loaded={articles_loaded}/>
                <ArticleList
                    data={data}/>
            </div>
        )
    }
}

export default Home;