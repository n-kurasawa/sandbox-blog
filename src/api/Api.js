import axios from 'axios';

const url = 'https://blog-77588.firebaseio.com/articles.json';

const getArticles = () => {
  return axios.get(url).then((response) => (
    response.data
  ))
}

const getArticleById = (id) => {
  return axios.get(url).then((response) => (
    response.data[id - 1]
  ));
}

export {
  getArticles,
  getArticleById
}