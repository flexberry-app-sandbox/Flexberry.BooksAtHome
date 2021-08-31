import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-books-at-home-tag', 'Unit | Serializer | i-i-s-books-at-home-tag', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-books-at-home-tag',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
