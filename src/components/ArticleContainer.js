import { Component } from 'react';

class ArticleContainer extends Component {
    render() {
        return require("../articles/" + this.props.article + "/article.js").default();
    }
}

export default ArticleContainer;