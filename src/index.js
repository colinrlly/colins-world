import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import ArticleList from './components/ArticleList'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        <App/>
    </Router>
), document.getElementById('root'));

registerServiceWorker();