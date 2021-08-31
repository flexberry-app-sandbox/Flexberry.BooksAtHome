import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-books-at-home-language', 'Unit | Model | i-i-s-books-at-home-language', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-books-at-home-author',
    'model:i-i-s-books-at-home-book',
    'model:i-i-s-books-at-home-language',
    'model:i-i-s-books-at-home-tag-type',
    'model:i-i-s-books-at-home-tag',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
