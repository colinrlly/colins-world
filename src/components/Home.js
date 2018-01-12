import React, { Component } from 'react';
import ArticleList from './ArticleList';

import '../static/css/home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <p className='introP'>Hello, my name is Colin Reilly and I am a Computer Science student at Rochester Institute of Technology. I create full stack web applications, analyze petascale databases, and much more. Check out my work below.</p>
                <ArticleList 
                    url='http://localhost:3001/api/articles' 
                    pollInterval={2000}/>
            </div>
        )
    }
}

export default Home;