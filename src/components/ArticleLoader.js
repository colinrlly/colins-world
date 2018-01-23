import { Component } from 'react';

class ArticleLoader extends Component {
    render() {
        return require("../articles/" + this.props.article + "/article.js").default();
    }
}

export default ArticleLoader;