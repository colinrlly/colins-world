import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import ArticleContainer from './components/ArticleContainer/index.js'
import Home from './components/Home/index.js'
import Plants from './components/Plants/index.js'

import './styles.css'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={ () => 
                    <Home/>
                }/>
                <Route path="/articles/:article" render={ ({match, location}) =>
                    <ArticleContainer 
                        title={ location.state.title }
                        github={ location.state.github }
                        time={ location.state.time }
                        article={ match.params.article }/>  // comes from :article
                }/>
                <Route path="/plants" render={ () =>
                    <Plants/>
                }/>
            </Switch>
        )
    }
}

export default App;