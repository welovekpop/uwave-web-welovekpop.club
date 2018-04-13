import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import compose from 'recompose/compose';
import ms from 'ms';
import timed from '../../utils/timed'; // Bit weird to do it like this perhaps, convert to an english string first and
// then translate afterwards.

function translateMs(str) {
  // `ms` output of the form "3 hours"
  var _str$split = str.split(' '),
      count = _str$split[0],
      key = _str$split[1];

  return {
    key: key.replace(/s$/, '') + "s",
    count: parseInt(count, 10)
  };
}

var TimeAgo = function TimeAgo(_ref) {
  var t = _ref.t,
      currentTime = _ref.currentTime,
      timestamp = _ref.timestamp;
  var secondsAgo = Math.max(0, Math.floor((currentTime - timestamp) / 1000));
  var msString = ms(secondsAgo * 1000, {
    long: true
  });

  var _translateMs = translateMs(msString),
      key = _translateMs.key,
      count = _translateMs.count;

  return _jsx("span", {}, void 0, t('timeAgo.format', {
    time: t("timeAgo." + key, {
      count: count,
      defaultValue: msString
    })
  }));
};

TimeAgo.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  currentTime: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired
} : {};
export default compose(translate(), timed())(TimeAgo);
//# sourceMappingURL=index.js.map
