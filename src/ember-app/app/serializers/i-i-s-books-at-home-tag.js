import { Serializer as TagSerializer } from
  '../mixins/regenerated/serializers/i-i-s-books-at-home-tag';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(TagSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
