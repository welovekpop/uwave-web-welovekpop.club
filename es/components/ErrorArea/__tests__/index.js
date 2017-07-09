import _jsx from 'babel-runtime/helpers/jsx';
/* eslint-env mocha */
/* global testUtils */
import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ErrorArea, { errorThemeSelector } from '../';

describe('<ErrorArea />', function () {
  it('should not show if there is no error', function () {
    expect(shallow(_jsx(ErrorArea, {
      error: null,
      onDismiss: function onDismiss() {}
    }), { context: testUtils.context }).dive().childAt(0)).to.have.prop('open', false);
  });

  it('should open if there is an error', function () {
    expect(shallow(_jsx(ErrorArea, {
      error: 'Something is WRONG!',
      onDismiss: function onDismiss() {}
    }), { context: testUtils.context }).dive().childAt(0)).to.have.prop('open', true);
  });

  it('uses the error notification palette overrides', function () {
    var notificationTheme = testUtils.muiTheme.palette.notifications;

    var contextTheme = errorThemeSelector(testUtils.context).muiTheme;

    expect(contextTheme.snackbar).to.have.property('textColor', notificationTheme.errorTextColor);
    expect(contextTheme.snackbar).to.have.property('backgroundColor', notificationTheme.errorBackgroundColor);
  });

  it('closes when user clicks anywhere on the page', function () {
    var spy = sinon.spy();

    var area = shallow(_jsx(ErrorArea, {
      error: 'Message',
      onDismiss: spy
    }), { context: testUtils.context }).dive();

    area.childAt(0).prop('onRequestClose').call();

    expect(spy.calledOnce).to.equal(true);
  });
});
//# sourceMappingURL=index.js.map
