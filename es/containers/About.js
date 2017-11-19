import _extends from 'babel-runtime/helpers/extends';
import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import Overlay from '../components/Overlay';
import About from '../components/About';

var AboutContainer = function (_React$Component) {
  _inherits(AboutContainer, _React$Component);

  function AboutContainer() {
    _classCallCheck(this, AboutContainer);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  AboutContainer.prototype.getAboutPageComponent = function getAboutPageComponent() {
    var uw = this.context.uwave;
    if (uw) {
      return uw.getAboutPageComponent();
    }
    return function () {
      return null;
    };
  };

  AboutContainer.prototype.render = function render() {
    return _jsx(Overlay, {
      direction: 'top'
    }, void 0, React.createElement(About, _extends({}, this.props, {
      render: this.getAboutPageComponent()
    })));
  };

  return AboutContainer;
}(React.Component);

AboutContainer.contextTypes = {
  uwave: PropTypes.object
};
export default AboutContainer;
//# sourceMappingURL=About.js.map
