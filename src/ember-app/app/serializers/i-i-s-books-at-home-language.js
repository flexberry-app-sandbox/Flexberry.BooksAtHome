import { Serializer as LanguageSerializer } from
  '../mixins/regenerated/serializers/i-i-s-books-at-home-language';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(LanguageSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
