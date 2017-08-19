'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.availableLanguages = undefined;
exports.default = createLocale;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _i18next = require('i18next');

var _i18next2 = _interopRequireDefault(_i18next);

var _en = require('./locale/en.js');

var _en2 = _interopRequireDefault(_en);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class, _temp;

var resources = {
  cs: function cs() {
    return System.import('../locale/cs.yaml');
  },
  cy: function cy() {
    return System.import('../locale/cy.yaml');
  },
  de: function de() {
    return System.import('../locale/de.yaml');
  },
  es: function es() {
    return System.import('../locale/es.yaml');
  },
  fr: function fr() {
    return System.import('../locale/fr.yaml');
  },
  ko: function ko() {
    return System.import('../locale/ko.yaml');
  },
  nl: function nl() {
    return System.import('../locale/nl.yaml');
  },
  pt: function pt() {
    return System.import('../locale/pt.yaml');
  },
  zh: function zh() {
    return System.import('../locale/zh.yaml');
  }
};

var UwaveBackend = (_temp = _class = function () {
  function UwaveBackend() {
    (0, _classCallCheck3.default)(this, UwaveBackend);

    this.type = 'backend';
    this.cache = { en: Promise.resolve(_en2.default) };
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

_i18next2.default.use(new UwaveBackend());

_i18next2.default.init({
  fallbackLng: 'en',
  defaultNS: 'uwave',
  interpolation: {
    // Prevent double-escapes: React already escapes things for us
    escapeValue: false
  }
});

var availableLanguages = exports.availableLanguages = ['en'].concat(Object.keys(resources));

function createLocale(language) {
  var locale = _i18next2.default.cloneInstance();
  locale.availableLanguages = availableLanguages;

  return new Promise(function (resolve) {
    locale.changeLanguage(language, function () {
      resolve(locale);
    });
  });
}
//# sourceMappingURL=locale.js.map
//# sourceMappingURL=locale.js.map
