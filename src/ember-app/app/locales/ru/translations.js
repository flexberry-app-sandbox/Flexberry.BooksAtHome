import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Books at home',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Books at home',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Books at home',
          title: 'Books at home'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'books-at-home': {
          caption: 'BooksAtHome',
          title: 'BooksAtHome',
          'i-i-s-books-at-home-tag-type-l': {
            caption: 'Tag type',
            title: ''
          },
          'i-i-s-books-at-home-book-l': {
            caption: 'Books',
            title: ''
          },
          'i-i-s-books-at-home-language-l': {
            caption: 'Language',
            title: ''
          },
          'i-i-s-books-at-home-author-l': {
            caption: 'Author',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
