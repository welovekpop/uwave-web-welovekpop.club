import _extends from "@babel/runtime/helpers/builtin/extends";
import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import getContext from 'recompose/getContext';
import Select from "@material-ui/core/es/Select";
import MenuItem from "@material-ui/core/es/MenuItem";

var getResourceName = function getResourceName(i18n, language) {
  return i18n.t("locales." + language);
};

var enhance = getContext({
  i18n: PropTypes.object
});

var LanguagePicker = function LanguagePicker(_ref) {
  var i18n = _ref.i18n,
      props = _objectWithoutProperties(_ref, ["i18n"]);

  return React.createElement(Select, _extends({
    className: "LanguagePicker"
  }, props), i18n.availableLanguages.map(function (lang) {
    return _jsx(MenuItem, {
      value: lang
    }, lang, getResourceName(i18n, lang));
  }));
};

LanguagePicker.propTypes = process.env.NODE_ENV !== "production" ? {
  i18n: PropTypes.object.isRequired
} : {};
export default enhance(LanguagePicker);
//# sourceMappingURL=LanguagePicker.js.map
