import React from 'react';
import * as Api from "../api/Api";

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { article: {} }
  }

  componentDidMount() {
    Api.getArticleById(this.props.match.params.id).then((article) => {
      this.setState({ article });
    })
  }

  render() {
    const { date, title, content } = this.state.article;
    return (
      <div>
        <article>
          <div>{date}</div>
          <h3>{title}</h3>
          <div>{content}</div>
        </article>
      </div>
    );
  }
}
