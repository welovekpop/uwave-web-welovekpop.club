import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Button from "@material-ui/core/es/Button";
var enhance = translate();

var VideoDisabledMessage = function VideoDisabledMessage(_ref) {
  var t = _ref.t,
      onEnableVideo = _ref.onEnableVideo;
  return _jsx("div", {
    className: "VideoDisabledMessage"
  }, void 0, _jsx("p", {
    className: "VideoDisabledMessage-text"
  }, void 0, t('booth.videoDisabled')), _jsx(Button, {
    variant: "raised",
    color: "primary",
    onClick: onEnableVideo
  }, void 0, 'Enable?'));
};

VideoDisabledMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onEnableVideo: PropTypes.func.isRequired
} : {};
export default enhance(VideoDisabledMessage);
//# sourceMappingURL=VideoDisabledMessage.js.map
