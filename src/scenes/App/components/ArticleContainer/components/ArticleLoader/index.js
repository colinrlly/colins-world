import { Component } from 'react';

class ArticleLoader extends Component {
    render() {
        // This gigantic path of ../ is the path from this component to the articles folder
        return require('../../../../../../articles/' + this.props.article + "/article.js").default();
    }
}

export default ArticleLoader;