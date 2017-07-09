import _extends from 'babel-runtime/helpers/extends';
import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

var getResourceName = function getResourceName(i18n, language) {
  return i18n.t('locales.' + language);
};

var menuStyle = {
  float: 'right',
  margin: -18
};
var itemStyle = {
  WebkitAppearance: 'initial'
};

var LanguagePicker = function LanguagePicker(props, _ref) {
  var i18n = _ref.i18n;
  return React.createElement(
    DropDownMenu,
    _extends({
      style: menuStyle
    }, props),
    i18n.availableLanguages.map(function (lang) {
      return _jsx(MenuItem, {
        style: itemStyle,
        value: lang,
        primaryText: getResourceName(i18n, lang)
      }, lang);
    })
  );
};

LanguagePicker.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default LanguagePicker;
//# sourceMappingURL=LanguagePicker.js.map
