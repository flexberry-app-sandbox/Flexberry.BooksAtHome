import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-books-at-home-tag-type.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('TagTypeE', 'i-i-s-books-at-home-tag-type', {
    name: attr('Name', { index: 0 })
  });

  modelClass.defineProjection('TagTypeL', 'i-i-s-books-at-home-tag-type', {
    name: attr('Name', { index: 0 })
  });
};
