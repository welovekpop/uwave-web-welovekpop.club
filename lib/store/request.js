"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = middleware;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _qsStringify = _interopRequireDefault(require("qs-stringify"));

var _request = require("../constants/actionTypes/request");

var _RequestActionCreators = require("../actions/RequestActionCreators");

var _configSelectors = require("../selectors/configSelectors");

var _userSelectors = require("../selectors/userSelectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isEmpty(object) {
  return !object || Object.keys(object).length === 0;
}

function makeUrl(path, params) {
  if (params === void 0) {
    params = {};
  }

  var uri = path;

  if (!isEmpty(params)) {
    // heh…
    uri += (uri.indexOf('?') !== -1 ? '&' : '?') + (0, _qsStringify.default)(params);
  }

  return uri;
}

function rejectNonOK(response) {
  if (response.status !== 200) {
    return response.json().then(function (res) {
      if (!('errors' in res)) {
        throw new Error('An unknown error occurred.');
      }

      var errors = res.errors;
      var error = (0, _objectAssign.default)(new Error(errors.map(function (err) {
        return err.title;
      }).join(', ')), {
        response: response,
        errors: errors
      });
      throw error;
    });
  }

  return response;
}

var defaultOptions = {
  apiUrl: '/api'
};

function middleware(middlewareOptions) {
  if (middlewareOptions === void 0) {
    middlewareOptions = {};
  }

  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (action.type !== _request.REQUEST_START) {
          return next(action);
        }

        var opts = (0, _extends2.default)({}, defaultOptions, middlewareOptions, (0, _configSelectors.requestOptionsSelector)(getState()));
        var token = (0, _userSelectors.tokenSelector)(getState());
        var _action$payload = action.payload,
            method = _action$payload.method,
            url = _action$payload.url,
            qs = _action$payload.qs,
            data = _action$payload.data;
        var _action$meta = action.meta,
            id = _action$meta.id,
            onStart = _action$meta.onStart,
            onComplete = _action$meta.onComplete,
            onError = _action$meta.onError;
        var completedMeta = {
          id: id,
          method: method,
          url: url,
          qs: qs,
          data: data
        };
        var requestUrl = makeUrl(opts.apiUrl + url, qs);
        var requestOptions = {
          method: method,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: 'same-origin'
        };

        if (token && token !== 'cookie') {
          requestOptions.headers.Authorization = "JWT " + token;
        }

        if (method !== 'get') {
          requestOptions.body = JSON.stringify(data);
        }

        if (onStart) {
          dispatch(onStart());
        }

        return fetch(requestUrl, requestOptions).then(rejectNonOK).then(function (res) {
          return res.json();
        }).then(function (res) {
          var responseValue = res;

          if (onComplete) {
            responseValue = dispatch(onComplete(responseValue));
          }

          dispatch((0, _RequestActionCreators.requestComplete)(res, completedMeta));
          return responseValue;
        }).catch(function (error) {
          if (onError) {
            dispatch(onError(error));
          }

          dispatch((0, _RequestActionCreators.requestCompleteError)(error, completedMeta));
          throw error;
        });
      };
    };
  };
} //# sourceMappingURL=request.js.map
//# sourceMappingURL=request.js.map
