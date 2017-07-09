'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = exports.put = exports.post = exports.get = undefined;
exports.requestComplete = requestComplete;
exports.requestCompleteError = requestCompleteError;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _request = require('../constants/actionTypes/request');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestID = 0;
function request(method, url) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var onStart = opts.onStart,
      onComplete = opts.onComplete,
      onError = opts.onError,
      requestOpts = (0, _objectWithoutProperties3.default)(opts, ['onStart', 'onComplete', 'onError']);

  requestID += 1;

  return {
    type: _request.REQUEST_START,
    payload: (0, _extends3.default)({}, requestOpts, {
      method: method,
      url: url
    }),
    meta: {
      onStart: onStart,
      onComplete: onComplete,
      onError: onError,
      id: requestID
    }
  };
}

function requestComplete(response, meta) {
  return {
    type: _request.REQUEST_COMPLETE,
    payload: response,
    meta: meta
  };
}

function requestCompleteError(error, meta) {
  return {
    type: _request.REQUEST_COMPLETE,
    error: true,
    payload: error,
    meta: meta
  };
}

var get = exports.get = function get(url, opts) {
  return request('get', url, opts);
};

var post = exports.post = function post(url, data) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return request('post', url, (0, _extends3.default)({ data: data }, opts));
};

var put = exports.put = function put(url, data) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return request('put', url, (0, _extends3.default)({ data: data }, opts));
};

var del = exports.del = function del(url, data) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return request('delete', url, (0, _extends3.default)({ data: data }, opts));
};
//# sourceMappingURL=RequestActionCreators.js.map
//# sourceMappingURL=RequestActionCreators.js.map
