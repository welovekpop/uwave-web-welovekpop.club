import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import injectMediaSources from '../../../utils/injectMediaSources';

var ImportSourceBlock = function ImportSourceBlock(_ref) {
  var getMediaSource = _ref.getMediaSource,
      sourceType = _ref.sourceType,
      title = _ref.title,
      children = _ref.children;
  return _jsx("div", {
    className: "ImportSourceBlock PlaylistImport-source"
  }, void 0, _jsx("img", {
    className: "ImportSourceBlock-image",
    alt: title,
    title: title,
    src: getMediaSource(sourceType).logo
  }), children);
};

ImportSourceBlock.propTypes = process.env.NODE_ENV !== "production" ? {
  getMediaSource: PropTypes.func.isRequired,
  sourceType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
} : {};
export default injectMediaSources()(ImportSourceBlock);
//# sourceMappingURL=ImportSourceBlock.js.map
