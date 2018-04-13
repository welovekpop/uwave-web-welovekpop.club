"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createLocale;
exports.availableLanguages = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var en = _interopRequireWildcard(require("./locale/en.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resources = {
  cs: function cs() {
    return Promise.resolve().then(() => require("./locale/cs.js"));
  },
  cy: function cy() {
    return Promise.resolve().then(() => require("./locale/cy.js"));
  },
  de: function de() {
    return Promise.resolve().then(() => require("./locale/de.js"));
  },
  es: function es() {
    return Promise.resolve().then(() => require("./locale/es.js"));
  },
  fr: function fr() {
    return Promise.resolve().then(() => require("./locale/fr.js"));
  },
  ko: function ko() {
    return Promise.resolve().then(() => require("./locale/ko.js"));
  },
  nl: function nl() {
    return Promise.resolve().then(() => require("./locale/nl.js"));
  },
  pt: function pt() {
    return Promise.resolve().then(() => require("./locale/pt.js"));
  },
  zh: function zh() {
    return Promise.resolve().then(() => require("./locale/zh.js"));
  }
};

var UwaveBackend =
/*#__PURE__*/
function () {
  function UwaveBackend() {
    this.type = 'backend';
    this.cache = {};
  }

  var _proto = UwaveBackend.prototype;

  _proto.getResource = function getResource(language) {
    if (this.cache[language]) {
      return this.cache[language];
    }

    if (!resources[language]) {
      return Promise.reject(new Error("The language \"" + language + "\" is not supported."));
    }

    this.cache[language] = resources[language]();
    return this.cache[language];
  };

  _proto.read = function read(language, namespace, callback) {
    this.getResource(language).then(function (resource) {
      return resource[namespace];
    }).then(function (result) {
      callback(null, result);
    }).catch(callback);
  };

  return UwaveBackend;
}();

UwaveBackend.type = 'backend';

_i18next.default.use(new UwaveBackend());

_i18next.default.init({
  fallbackLng: 'en',
  defaultNS: 'uwave',
  interpolation: {
    // Prevent double-escapes: React already escapes things for us
    escapeValue: false
  }
}); // Synchronously add the fallback language.


_i18next.default.addResourceBundle('en', 'uwave', en.uwave);

var availableLanguages = ['en'].concat(Object.keys(resources));
exports.availableLanguages = availableLanguages;

function createLocale(language) {
  var locale = _i18next.default.cloneInstance();

  locale.availableLanguages = availableLanguages;
  return new Promise(function (resolve) {
    locale.changeLanguage(language, function () {
      resolve(locale);
    });
  });
} //# sourceMappingURL=locale.js.map
//# sourceMappingURL=locale.js.map
