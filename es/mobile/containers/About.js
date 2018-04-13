import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Overlay from '../../components/Overlay';
import OverlayHeader from '../../components/Overlay/Header';
import OverlayContent from '../../components/Overlay/Content';
var enhance = translate();

var AboutContainer =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(AboutContainer, _React$Component);

  function AboutContainer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AboutContainer.prototype;

  _proto.getAboutPageComponent = function getAboutPageComponent() {
    var uw = this.context.uwave;

    if (uw) {
      return uw.getAboutPageComponent();
    }

    return null;
  };

  _proto.render = function render() {
    var About = this.getAboutPageComponent();
    if (!About) return null;

    var _props = this.props,
        t = _props.t,
        onCloseOverlay = _props.onCloseOverlay,
        props = _objectWithoutProperties(_props, ["t", "onCloseOverlay"]);

    return _jsx(Overlay, {}, void 0, _jsx(OverlayHeader, {
      title: t('about.about'),
      onCloseOverlay: onCloseOverlay
    }), _jsx(OverlayContent, {
      className: "AboutPanel"
    }, void 0, React.createElement(About, props)));
  };

  return AboutContainer;
}(React.Component);

AboutContainer.contextTypes = {
  uwave: PropTypes.object
};
AboutContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onCloseOverlay: PropTypes.func.isRequired
} : {};
export default enhance(AboutContainer);
//# sourceMappingURL=About.js.map
