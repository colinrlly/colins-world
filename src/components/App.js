import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import ArticleList from './ArticleList'
import ArticleContainer from './ArticleContainer'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={ () => 
                    <ArticleList 
                        url='http://localhost:3001/api/articles' 
                        pollInterval={2000}/>
                }/>
                <Route path="/articles/:article" render={ ({match}) => 
                    <ArticleContainer 
                        article={match.params.article}/>
                }/>
            </Switch>
        )
    }
}

export default App;