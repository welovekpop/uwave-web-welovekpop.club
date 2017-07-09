import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import { REQUEST_START, REQUEST_COMPLETE } from '../constants/actionTypes/request';

var requestID = 0;
function request(method, url) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var onStart = opts.onStart,
      onComplete = opts.onComplete,
      onError = opts.onError,
      requestOpts = _objectWithoutProperties(opts, ['onStart', 'onComplete', 'onError']);

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

export var post = function post(url, data) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return request('post', url, _extends({ data: data }, opts));
};

export var put = function put(url, data) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return request('put', url, _extends({ data: data }, opts));
};

export var del = function del(url, data) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return request('delete', url, _extends({ data: data }, opts));
};
//# sourceMappingURL=RequestActionCreators.js.map
