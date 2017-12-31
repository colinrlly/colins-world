import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import ArticleList from './ArticleList'
import Test from './Test'

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={()=><ArticleList url='http://localhost:3001/api/articles' pollInterval={2000}/>}/>
                    <Route path="/test" component={Test}/>
                </Switch>
            </div>
        )
    }
}

export default App;