import _classCallCheck from 'babel-runtime/helpers/classCallCheck';

var _class, _temp;

import i18next from 'i18next';
import en from './locale/en.js';

var resources = {
  cs: function cs() {
    return System.import('./locale/cs.js');
  },
  cy: function cy() {
    return System.import('./locale/cy.js');
  },
  de: function de() {
    return System.import('./locale/de.js');
  },
  es: function es() {
    return System.import('./locale/es.js');
  },
  fr: function fr() {
    return System.import('./locale/fr.js');
  },
  ko: function ko() {
    return System.import('./locale/ko.js');
  },
  nl: function nl() {
    return System.import('./locale/nl.js');
  },
  pt: function pt() {
    return System.import('./locale/pt.js');
  },
  zh: function zh() {
    return System.import('./locale/zh.js');
  }
};

var UwaveBackend = (_temp = _class = function () {
  function UwaveBackend() {
    _classCallCheck(this, UwaveBackend);

    this.type = 'backend';
    this.cache = { en: Promise.resolve(en) };
  }

  UwaveBackend.prototype.getResource = function getResource(language) {
    if (this.cache[language]) {
      return this.cache[language];
    }
    if (!resources[language]) {
      return Promise.reject(new Error('The language "' + language + '" is not supported.'));
    }

    this.cache[language] = resources[language]();

    return this.cache[language];
  };

  UwaveBackend.prototype.read = function read(language, namespace, callback) {
    this.getResource(language).then(function (resource) {
      return resource[namespace];
    }).then(function (result) {
      callback(null, result);
    }).catch(callback);
  };

  return UwaveBackend;
}(), _class.type = 'backend', _temp);


i18next.use(new UwaveBackend());

i18next.init({
  fallbackLng: 'en',
  defaultNS: 'uwave',
  interpolation: {
    // Prevent double-escapes: React already escapes things for us
    escapeValue: false
  }
});

export var availableLanguages = ['en'].concat(Object.keys(resources));

export default function createLocale(language) {
  var locale = i18next.cloneInstance();
  locale.availableLanguages = availableLanguages;

  return new Promise(function (resolve) {
    locale.changeLanguage(language, function () {
      resolve(locale);
    });
  });
}
//# sourceMappingURL=locale.js.map
