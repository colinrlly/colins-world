import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import ArticleList from './components/ArticleList'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        <App/>
        {/* <ArticleList 
            url='http://localhost:3001/api/articles'
            pollInterval={2000} /> */}
    </Router>
), document.getElementById('root'));

registerServiceWorker();