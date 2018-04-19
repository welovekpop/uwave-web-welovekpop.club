import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import { REQUEST_START, REQUEST_COMPLETE } from '../constants/actionTypes/request';
var requestID = 0;

function request(method, url, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var _opts = opts,
      onStart = _opts.onStart,
      onComplete = _opts.onComplete,
      onError = _opts.onError,
      requestOpts = _objectWithoutProperties(_opts, ["onStart", "onComplete", "onError"]);

  requestID += 1;
  return {
    type: REQUEST_START,
    payload: _extends({}, requestOpts, {
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

export function requestComplete(response, meta) {
  return {
    type: REQUEST_COMPLETE,
    payload: response,
    meta: meta
  };
}
export function requestCompleteError(error, meta) {
  return {
    type: REQUEST_COMPLETE,
    error: true,
    payload: error,
    meta: meta
  };
}
export var get = function get(url, opts) {
  return request('get', url, opts);
};
export var post = function post(url, data, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return request('post', url, _extends({
    data: data
  }, opts));
};
export var put = function put(url, data, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return request('put', url, _extends({
    data: data
  }, opts));
};
export var del = function del(url, data, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return request('delete', url, _extends({
    data: data
  }, opts));
};
//# sourceMappingURL=RequestActionCreators.js.map
