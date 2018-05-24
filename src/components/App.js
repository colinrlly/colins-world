import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import ArticleContainer from './ArticleContainer'
import Home from './Home'

import '../static/css/fonts.css'

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
                        article={ match.params.article }/>
                }/>
            </Switch>
        )
    }
}

export default App;