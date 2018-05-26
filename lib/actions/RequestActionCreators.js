"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestComplete = requestComplete;
exports.requestCompleteError = requestCompleteError;
exports.del = exports.put = exports.post = exports.get = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _ActionTypes = require("../constants/ActionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestID = 0;

function request(method, url, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var _opts = opts,
      onStart = _opts.onStart,
      onComplete = _opts.onComplete,
      onError = _opts.onError,
      requestOpts = (0, _objectWithoutProperties2.default)(_opts, ["onStart", "onComplete", "onError"]);
  requestID += 1;
  return {
    type: _ActionTypes.REQUEST_START,
    payload: (0, _extends2.default)({}, requestOpts, {
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
    type: _ActionTypes.REQUEST_COMPLETE,
    payload: response,
    meta: meta
  };
}

function requestCompleteError(error, meta) {
  return {
    type: _ActionTypes.REQUEST_COMPLETE,
    error: true,
    payload: error,
    meta: meta
  };
}

var get = function get(url, opts) {
  return request('get', url, opts);
};

exports.get = get;

var post = function post(url, data, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return request('post', url, (0, _extends2.default)({
    data: data
  }, opts));
};

exports.post = post;

var put = function put(url, data, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return request('put', url, (0, _extends2.default)({
    data: data
  }, opts));
};

exports.put = put;

var del = function del(url, data, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return request('delete', url, (0, _extends2.default)({
    data: data
  }, opts));
};

exports.del = del;
//# sourceMappingURL=RequestActionCreators.js.map
