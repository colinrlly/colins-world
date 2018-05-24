import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import '../static/css/fonts.css'
import ArticleContainer from './ArticleContainer'
import Home from './Home'

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
                        article={ match.params.article }/>
                }/>
            </Switch>
        )
    }
}

export default App;