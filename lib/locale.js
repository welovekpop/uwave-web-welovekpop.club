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

var en = _interopRequireWildcard(_en);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resources = {
  cs: function cs() {
    return Promise.resolve().then(() => require('./locale/cs.js'));
  },
  cy: function cy() {
    return Promise.resolve().then(() => require('./locale/cy.js'));
  },
  de: function de() {
    return Promise.resolve().then(() => require('./locale/de.js'));
  },
  es: function es() {
    return Promise.resolve().then(() => require('./locale/es.js'));
  },
  fr: function fr() {
    return Promise.resolve().then(() => require('./locale/fr.js'));
  },
  ko: function ko() {
    return Promise.resolve().then(() => require('./locale/ko.js'));
  },
  nl: function nl() {
    return Promise.resolve().then(() => require('./locale/nl.js'));
  },
  pt: function pt() {
    return Promise.resolve().then(() => require('./locale/pt.js'));
  },
  zh: function zh() {
    return Promise.resolve().then(() => require('./locale/zh.js'));
  }
};

var UwaveBackend = function () {
  function UwaveBackend() {
    (0, _classCallCheck3.default)(this, UwaveBackend);

    this.type = 'backend';
    this.cache = {};
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
}();

UwaveBackend.type = 'backend';

_i18next2.default.use(new UwaveBackend());

_i18next2.default.init({
  fallbackLng: 'en',
  defaultNS: 'uwave',
  interpolation: {
    // Prevent double-escapes: React already escapes things for us
    escapeValue: false
  }
});

// Synchronously add the fallback language.
_i18next2.default.addResourceBundle('en', 'uwave', en.uwave);

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
