import _extends from "@babel/runtime/helpers/builtin/extends";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';

function getComponentName(Component) {
  return Component.name || Component.displayName || 'Component';
}

export default function injectMediaSources() {
  return function (Component) {
    var _class, _temp2;

    return _temp2 = _class =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(_class, _React$Component);

      function _class() {
        var _temp, _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.getMediaSource = function (name) {
          return _this.context.mediaSources[name];
        }, _this.getAllMediaSources = function () {
          return _this.context.mediaSources;
        }, _temp) || _assertThisInitialized(_this);
      }

      var _proto = _class.prototype;

      _proto.render = function render() {
        return React.createElement(Component, _extends({
          getMediaSource: this.getMediaSource,
          getAllMediaSources: this.getAllMediaSources
        }, this.props));
      };

      return _class;
    }(React.Component), _class.displayName = "InjectMediaSources(" + getComponentName(Component) + ")", _class.contextTypes = {
      mediaSources: PropTypes.object
    }, _temp2;
  };
}
//# sourceMappingURL=injectMediaSources.js.map
