import React, { Component } from 'react';
import ArticleList from './ArticleList';

import '../static/css/home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="introContainer">
                    <span className='intro'>Hello, my name is Colin Reilly and I am a Computer Science student at </span>
                    <a href="http://www.rit.edu/" className='intro highlight'>Rochester Institute of Technology</a>
                    <span className='intro'>. Currently I am interested in controlled environment agriculture and web development.</span>
                </div>
                <ArticleList
                    url='/api/articles'
                    pollInterval={2000}/>
            </div>
        )
    }
}

export default Home;