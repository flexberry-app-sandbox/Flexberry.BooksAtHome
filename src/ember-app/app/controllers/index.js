import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.books-at-home.caption'),
          title: i18n.t('forms.application.sitemap.books-at-home.title'),
          children: [{
            link: 'i-i-s-books-at-home-tag-type-l',
            caption: i18n.t('forms.application.sitemap.books-at-home.i-i-s-books-at-home-tag-type-l.caption'),
            title: i18n.t('forms.application.sitemap.books-at-home.i-i-s-books-at-home-tag-type-l.title'),
            children: null
          }, {
            link: 'i-i-s-books-at-home-book-l',
            caption: i18n.t('forms.application.sitemap.books-at-home.i-i-s-books-at-home-book-l.caption'),
            title: i18n.t('forms.application.sitemap.books-at-home.i-i-s-books-at-home-book-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-books-at-home-language-l',
            caption: i18n.t('forms.application.sitemap.books-at-home.i-i-s-books-at-home-language-l.caption'),
            title: i18n.t('forms.application.sitemap.books-at-home.i-i-s-books-at-home-language-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-books-at-home-author-l',
            caption: i18n.t('forms.application.sitemap.books-at-home.i-i-s-books-at-home-author-l.caption'),
            title: i18n.t('forms.application.sitemap.books-at-home.i-i-s-books-at-home-author-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})