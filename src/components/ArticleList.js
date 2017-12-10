import React from 'react';
import * as Api from '../api/Api';
import { Link } from 'react-router-dom';

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] }
  }

  componentDidMount() {
    Api.getArticles().then((articles) => {
      this.setState({ articles });
    });
  }

  render() {
    const list = this.state.articles.map((article) => (
      <div key={article.id}>
        <Item {...article} />
      </div>
    ));
    return (
      <div>
        <h3>Blog Posts</h3>
        {list}
      </div>
    );
  }
}

const Item = ({id, date, title, content}) => (
  <section>
    <div>
      {date}
    </div>
    <Link to={`/article/${id}`}>
      <h4>{title}</h4>
    </Link>
  </section>
)