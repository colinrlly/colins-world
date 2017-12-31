import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './components/ArticleList'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ArticleList 
        url='http://localhost:3001/api/articles'
        pollInterval={2000} />,

    document.getElementById('root')
);

registerServiceWorker();