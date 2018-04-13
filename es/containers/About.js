import _jsx from "@babel/runtime/helpers/jsx";
import _extends from "@babel/runtime/helpers/extends";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import Overlay from '../components/Overlay';
import About from '../components/About';

var AboutContainer =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(AboutContainer, _React$Component);

  function AboutContainer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AboutContainer.prototype;

  _proto.getAboutPageComponent = function getAboutPageComponent() {
    if (this.hasAboutPageComponent()) {
      var uw = this.context.uwave;
      return uw.getAboutPageComponent();
    }

    return function () {
      return null;
    };
  };

  _proto.hasAboutPageComponent = function hasAboutPageComponent() {
    var uw = this.context.uwave;
    return Boolean(uw && uw.getAboutPageComponent());
  };

  _proto.render = function render() {
    return _jsx(Overlay, {
      direction: "top"
    }, void 0, React.createElement(About, _extends({}, this.props, {
      hasAboutPage: this.hasAboutPageComponent(),
      render: this.getAboutPageComponent()
    })));
  };

  return AboutContainer;
}(React.Component);

AboutContainer.contextTypes = {
  uwave: PropTypes.object
};
export { AboutContainer as default };
//# sourceMappingURL=About.js.map
