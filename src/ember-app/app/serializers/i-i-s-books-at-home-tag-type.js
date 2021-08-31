import { Serializer as TagTypeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-books-at-home-tag-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(TagTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
