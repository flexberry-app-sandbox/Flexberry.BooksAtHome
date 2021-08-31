import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  tagType: DS.belongsTo('i-i-s-books-at-home-tag-type', { inverse: null, async: false }),
  book: DS.belongsTo('i-i-s-books-at-home-book', { inverse: 'tags', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-books-at-home-tag.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  tagType: {
    descriptionKey: 'models.i-i-s-books-at-home-tag.validations.tagType.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  book: {
    descriptionKey: 'models.i-i-s-books-at-home-tag.validations.book.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('TagE', 'i-i-s-books-at-home-tag', {
    name: attr('Name', { index: 0 }),
    tagType: belongsTo('i-i-s-books-at-home-tag-type', 'Tag type', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};
