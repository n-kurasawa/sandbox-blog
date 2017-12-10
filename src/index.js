import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from './components/Container';
import ArticleList from './components/ArticleList';
import Article from './components/Article';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Container>
          <Route exact path='/' component={ArticleList} />
          <Route exact path='/article/:id' render={({match}) => (
            <Article match={match} />
          )} />
        </Container>
      </BrowserRouter>
    );
  }
}

render(<App/>, document.getElementById('app'));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    console.log('ServiceWorker registration failed: ', err);
  });
}