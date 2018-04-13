import _jsx from "@babel/runtime/helpers/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import transformStyle from '../../utils/transformStyle';

function forceReflow(el) {
  // Hopefully the minifier won't optimise this away!
  el.getBoundingClientRect();
}

var Progress = function Progress(_ref) {
  var className = _ref.className,
      currentProgress = _ref.currentProgress,
      timeRemaining = _ref.timeRemaining;

  function animate(el) {
    if (!el) return; // Set the width to the current progress without animating

    Object.assign(el.style, {
      transitionDuration: '0s'
    }, transformStyle("scaleX(" + currentProgress + ")")); // Force browser to rerender the bar immediately

    forceReflow(el); // Set up the actual animation. Progress bar goes to 100% full
    // in $timeRemaining seconds.

    Object.assign(el.style, {
      transitionDuration: timeRemaining + "s"
    }, transformStyle('scaleX(1)'));
  }

  return _jsx("div", {
    className: cx('Progress', className)
  }, void 0, React.createElement("div", {
    className: "Progress-fill",
    ref: animate
  }));
};

Progress.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  currentProgress: PropTypes.number.isRequired,
  timeRemaining: PropTypes.number.isRequired
} : {};
export default Progress;
//# sourceMappingURL=Progress.js.map
