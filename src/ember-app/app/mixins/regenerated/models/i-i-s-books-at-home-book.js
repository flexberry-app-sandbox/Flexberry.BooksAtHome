import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  year: DS.attr('number'),
  dateOfBuy: DS.attr('date'),
  author: DS.belongsTo('i-i-s-books-at-home-author', { inverse: null, async: false }),
  language: DS.belongsTo('i-i-s-books-at-home-language', { inverse: null, async: false }),
  tags: DS.hasMany('i-i-s-books-at-home-tag', { inverse: 'book', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-books-at-home-book.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  year: {
    descriptionKey: 'models.i-i-s-books-at-home-book.validations.year.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  dateOfBuy: {
    descriptionKey: 'models.i-i-s-books-at-home-book.validations.dateOfBuy.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  author: {
    descriptionKey: 'models.i-i-s-books-at-home-book.validations.author.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  language: {
    descriptionKey: 'models.i-i-s-books-at-home-book.validations.language.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  tags: {
    descriptionKey: 'models.i-i-s-books-at-home-book.validations.tags.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BookE', 'i-i-s-books-at-home-book', {
    name: attr('Name', { index: 0 }),
    year: attr('Year', { index: 1 }),
    dateOfBuy: attr('Date of buy', { index: 2 }),
    author: belongsTo('i-i-s-books-at-home-author', 'Author', {
      name: attr('Name', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'name' }),
    language: belongsTo('i-i-s-books-at-home-language', 'Language', {
      name: attr('Name', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'name' }),
    tags: hasMany('i-i-s-books-at-home-tag', 'Tags', {
      name: attr('Name', { index: 0 }),
      tagType: belongsTo('i-i-s-books-at-home-tag-type', 'Tag type', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('BookL', 'i-i-s-books-at-home-book', {
    name: attr('Name', { index: 0 }),
    year: attr('Year', { index: 1 }),
    dateOfBuy: attr('Date of buy', { index: 2 }),
    author: belongsTo('i-i-s-books-at-home-author', 'Name', {
      name: attr('Name', { index: 3 })
    }, { index: -1, hidden: true }),
    language: belongsTo('i-i-s-books-at-home-language', 'Name', {
      name: attr('Name', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
