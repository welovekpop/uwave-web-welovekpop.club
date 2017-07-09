'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<ErrorArea />', function () {
  it('should not show if there is no error', function () {
    (0, _chai.expect)((0, _enzyme.shallow)((0, _jsx3.default)(_2.default, {
      error: null,
      onDismiss: function onDismiss() {}
    }), { context: testUtils.context }).dive().childAt(0)).to.have.prop('open', false);
  });

  it('should open if there is an error', function () {
    (0, _chai.expect)((0, _enzyme.shallow)((0, _jsx3.default)(_2.default, {
      error: 'Something is WRONG!',
      onDismiss: function onDismiss() {}
    }), { context: testUtils.context }).dive().childAt(0)).to.have.prop('open', true);
  });

  it('uses the error notification palette overrides', function () {
    var notificationTheme = testUtils.muiTheme.palette.notifications;

    var contextTheme = (0, _.errorThemeSelector)(testUtils.context).muiTheme;

    (0, _chai.expect)(contextTheme.snackbar).to.have.property('textColor', notificationTheme.errorTextColor);
    (0, _chai.expect)(contextTheme.snackbar).to.have.property('backgroundColor', notificationTheme.errorBackgroundColor);
  });

  it('closes when user clicks anywhere on the page', function () {
    var spy = _sinon2.default.spy();

    var area = (0, _enzyme.shallow)((0, _jsx3.default)(_2.default, {
      error: 'Message',
      onDismiss: spy
    }), { context: testUtils.context }).dive();

    area.childAt(0).prop('onRequestClose').call();

    (0, _chai.expect)(spy.calledOnce).to.equal(true);
  });
});
//# sourceMappingURL=index.js.map

/* eslint-env mocha */
/* global testUtils */
//# sourceMappingURL=index.js.map
