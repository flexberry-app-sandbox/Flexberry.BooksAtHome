import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-books-at-home-author-l');
  this.route('i-i-s-books-at-home-author-e',
  { path: 'i-i-s-books-at-home-author-e/:id' });
  this.route('i-i-s-books-at-home-author-e.new',
  { path: 'i-i-s-books-at-home-author-e/new' });
  this.route('i-i-s-books-at-home-book-l');
  this.route('i-i-s-books-at-home-book-e',
  { path: 'i-i-s-books-at-home-book-e/:id' });
  this.route('i-i-s-books-at-home-book-e.new',
  { path: 'i-i-s-books-at-home-book-e/new' });
  this.route('i-i-s-books-at-home-language-l');
  this.route('i-i-s-books-at-home-language-e',
  { path: 'i-i-s-books-at-home-language-e/:id' });
  this.route('i-i-s-books-at-home-language-e.new',
  { path: 'i-i-s-books-at-home-language-e/new' });
  this.route('i-i-s-books-at-home-tag-type-l');
  this.route('i-i-s-books-at-home-tag-type-e',
  { path: 'i-i-s-books-at-home-tag-type-e/:id' });
  this.route('i-i-s-books-at-home-tag-type-e.new',
  { path: 'i-i-s-books-at-home-tag-type-e/new' });
});

export default Router;
