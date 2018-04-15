import _objectSpread from "@babel/runtime/helpers/builtin/objectSpread";
import assign from 'object-assign';
import qsStringify from 'qs-stringify';
import { REQUEST_START } from '../constants/actionTypes/request';
import { requestComplete, requestCompleteError } from '../actions/RequestActionCreators';
import { requestOptionsSelector } from '../selectors/configSelectors';
import { tokenSelector } from '../selectors/userSelectors';

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
    uri += (uri.indexOf('?') !== -1 ? '&' : '?') + qsStringify(params);
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
      var error = assign(new Error(errors.map(function (err) {
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
export default function middleware(middlewareOptions) {
  if (middlewareOptions === void 0) {
    middlewareOptions = {};
  }

  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (action.type !== REQUEST_START) {
          return next(action);
        }

        var opts = _objectSpread({}, defaultOptions, middlewareOptions, requestOptionsSelector(getState()));

        var token = tokenSelector(getState());
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

          dispatch(requestComplete(res, completedMeta));
          return responseValue;
        }).catch(function (error) {
          if (onError) {
            dispatch(onError(error));
          }

          dispatch(requestCompleteError(error, completedMeta));
          throw error;
        });
      };
    };
  };
}
//# sourceMappingURL=request.js.map
