import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('language', 'Languages');
inflector.irregular('author', 'Authors');
inflector.irregular('book', 'Books');
inflector.irregular('type', 'Types');
inflector.irregular('tag', 'Tags');

export default {};
