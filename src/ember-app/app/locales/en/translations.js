import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISBooksAtHomeAuthorLForm from './forms/i-i-s-books-at-home-author-l';
import IISBooksAtHomeBookLForm from './forms/i-i-s-books-at-home-book-l';
import IISBooksAtHomeLanguageLForm from './forms/i-i-s-books-at-home-language-l';
import IISBooksAtHomeTagTypeLForm from './forms/i-i-s-books-at-home-tag-type-l';
import IISBooksAtHomeAuthorEForm from './forms/i-i-s-books-at-home-author-e';
import IISBooksAtHomeBookEForm from './forms/i-i-s-books-at-home-book-e';
import IISBooksAtHomeLanguageEForm from './forms/i-i-s-books-at-home-language-e';
import IISBooksAtHomeTagTypeEForm from './forms/i-i-s-books-at-home-tag-type-e';
import IISBooksAtHomeAuthorModel from './models/i-i-s-books-at-home-author';
import IISBooksAtHomeBookModel from './models/i-i-s-books-at-home-book';
import IISBooksAtHomeLanguageModel from './models/i-i-s-books-at-home-language';
import IISBooksAtHomeTagTypeModel from './models/i-i-s-books-at-home-tag-type';
import IISBooksAtHomeTagModel from './models/i-i-s-books-at-home-tag';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-books-at-home-author': IISBooksAtHomeAuthorModel,
    'i-i-s-books-at-home-book': IISBooksAtHomeBookModel,
    'i-i-s-books-at-home-language': IISBooksAtHomeLanguageModel,
    'i-i-s-books-at-home-tag-type': IISBooksAtHomeTagTypeModel,
    'i-i-s-books-at-home-tag': IISBooksAtHomeTagModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'books-at-home': {
          caption: 'books-at-home',
          title: 'books-at-home',
          'i-i-s-books-at-home-tag-type-l': {
            caption: 'i-i-s-books-at-home-tag-type-l',
            title: 'i-i-s-books-at-home-tag-type-l'
          },
          'i-i-s-books-at-home-book-l': {
            caption: 'i-i-s-books-at-home-book-l',
            title: 'i-i-s-books-at-home-book-l'
          },
          'i-i-s-books-at-home-language-l': {
            caption: 'i-i-s-books-at-home-language-l',
            title: 'i-i-s-books-at-home-language-l'
          },
          'i-i-s-books-at-home-author-l': {
            caption: 'i-i-s-books-at-home-author-l',
            title: 'i-i-s-books-at-home-author-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-books-at-home-author-l': IISBooksAtHomeAuthorLForm,
    'i-i-s-books-at-home-book-l': IISBooksAtHomeBookLForm,
    'i-i-s-books-at-home-language-l': IISBooksAtHomeLanguageLForm,
    'i-i-s-books-at-home-tag-type-l': IISBooksAtHomeTagTypeLForm,
    'i-i-s-books-at-home-author-e': IISBooksAtHomeAuthorEForm,
    'i-i-s-books-at-home-book-e': IISBooksAtHomeBookEForm,
    'i-i-s-books-at-home-language-e': IISBooksAtHomeLanguageEForm,
    'i-i-s-books-at-home-tag-type-e': IISBooksAtHomeTagTypeEForm
  },

});

export default translations;
