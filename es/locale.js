import i18next from 'i18next';
import * as en from "./locale/en.js";
var resources = {
  cs: function cs() {
    return import("./locale/cs.js"
    /* webpackChunkName: "lang_cs" */
    );
  },
  cy: function cy() {
    return import("./locale/cy.js"
    /* webpackChunkName: "lang_cy" */
    );
  },
  de: function de() {
    return import("./locale/de.js"
    /* webpackChunkName: "lang_de" */
    );
  },
  es: function es() {
    return import("./locale/es.js"
    /* webpackChunkName: "lang_es" */
    );
  },
  fr: function fr() {
    return import("./locale/fr.js"
    /* webpackChunkName: "lang_fr" */
    );
  },
  ko: function ko() {
    return import("./locale/ko.js"
    /* webpackChunkName: "lang_ko" */
    );
  },
  nl: function nl() {
    return import("./locale/nl.js"
    /* webpackChunkName: "lang_nl" */
    );
  },
  pt: function pt() {
    return import("./locale/pt.js"
    /* webpackChunkName: "lang_pt" */
    );
  },
  zh: function zh() {
    return import("./locale/zh.js"
    /* webpackChunkName: "lang_zh" */
    );
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
i18next.use(new UwaveBackend());
i18next.init({
  fallbackLng: 'en',
  defaultNS: 'uwave',
  interpolation: {
    // Prevent double-escapes: React already escapes things for us
    escapeValue: false
  }
}); // Synchronously add the fallback language.

i18next.addResourceBundle('en', 'uwave', en.uwave);
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
