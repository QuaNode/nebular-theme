/*jshint esversion: 6 */

import {
    Injectable,
    Inject
} from '@angular/core';
import {
    Http,
    Request,
    RequestMethod,
    Headers
} from '@angular/http';
import {
  Observable
} from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

var getValueForParameter = function (parameter, data, key, name) {

    if (typeof data === 'object' && typeof key === 'string' && data[key] !== undefined) return data[key];
    else return (function () {

        if (parameter.value) return typeof parameter.value === 'function' ? parameter.value(name, data) : parameter.value;
        else return getParamterFromCache(parameter.source, key)[key].value;
    }());
};

var getParamterFromCache = function (source, key) {

    if (typeof source === 'string' && typeof window[source] === 'object')
        return JSON.parse(window[source].getItem('Behaviours') || (key ? '{"' + key + '":{}}' : '{}'));
    return JSON.parse(key ? '{"' + key + '":{}}' : '{}');
};

var setParameterToCache = function (parameters, key) {

    if (typeof key === 'string' && typeof parameters[key].source === 'string' && typeof window[parameters[key].source] === 'object')
        window[parameters[key].source].setItem('Behaviours', JSON.stringify(parameters));
};

export class Behaviours {

    constructor(http, baseURL, errorCallback, defaults) {

        var self = this;
        var behavioursBody = null;
        var behavioursHeaders = null;
        var callbacks = [];
        if (!behavioursBody) http.get((typeof baseURL === 'string' && baseURL.length > 0 ? typeof baseURL.split('/')[0] === 'string' &&
            baseURL.split('/')[0].startsWith('http') ? baseURL : window.location.origin + baseURL : '') + '/behaviours').subscribe((response) => {

            behavioursBody = response.json();
            behavioursHeaders = {

                'Content-Type': response.headers.get('Content-Type')
            };
            if (typeof behavioursBody === 'object') {

                var keys = Object.keys(behavioursBody);
                for (var i = 0; i < keys.length; i++) {

                    self[keys[i]] = self.getBehaviour(keys[i]);
                }
                for (i in callbacks) {

                    var callback = callbacks[i];
                    if (typeof callback === 'function') callback();
                }
            } else {

                throw new Error('Error in initializing Behaviours');
            }
        }, (error) => {

            throw new Error('Error in initializing Behaviours: ' + error.json().message || error.statusText || ('Error status: ' + error.status));
        });
        self.getBaseUrl = self.getBaseURL = function () {

            return baseURL;
        };
        self.ready = function (cb) {

            if (typeof cb !== 'function') return;
            if (!behavioursBody) {

                callbacks.push(cb);
            } else cb();
        };
        self.getBehaviour = function (behaviourName) {

            if (typeof behaviourName !== 'string') {

                throw new Error('Invalid behaviour name');
            }
            if (!behavioursBody) {

                throw new Error('Behaviours is not ready yet');
            }
            if (behavioursBody[behaviourName]) {

                var behaviour = behavioursBody[behaviourName];
                return function (behaviourData) {

                    if (typeof behaviourData !== 'object') behaviourData = {};
                    var parameters = Object.assign(JSON.parse(window.localStorage.getItem('Behaviours') || '{}'), defaults || {});
                    var params = Object.assign(behaviour.parameters || {}, parameters);
                    var keys = Object.keys(params);
                    var headers = Object.assign({}, behavioursHeaders);
                    var data = {};
                    var url = behaviour.path;
                    for (var key in keys) {

                        if (getValueForParameter(params[keys[key]], behaviourData, keys[key], behaviourName) === undefined) continue;
                        if (Array.isArray(params[keys[key]].unless) && params[keys[key]].unless.indexOf(behaviourName) > -1) continue;
                        if (Array.isArray(params[keys[key]].for) && params[keys[key]].for.indexOf(behaviourName) === -1) continue;
                        var type = params && typeof params[keys[key]] === 'object' ? params[keys[key]].type : '';
                        switch (type) {

                            case 'header':
                                headers[params[keys[key]].key] = getValueForParameter(params[keys[key]], behaviourData, keys[key], behaviourName);
                                break;
                            case 'body':
                                var paths = params[keys[key]].key.split('.');
                                var nestedData = data;
                                var lastPath = null;
                                for (var path in paths) {

                                    if (lastPath) nestedData = nestedData[lastPath];
                                    if (!nestedData[paths[path]]) nestedData[paths[path]] = {};
                                    lastPath = paths[path];
                                }
                                if (lastPath) nestedData[lastPath] = getValueForParameter(params[keys[key]], behaviourData, keys[key], behaviourName);
                                break;
                            case 'path':
                                url = url.replace(':' + encodeURIComponent(params[keys[key]].key), encodeURIComponent(getValueForParameter(params[keys[key]],
                                    behaviourData, keys[key], behaviourName)));
                                break;
                            case 'query':
                                if (url.indexOf('?') === -1) {

                                    url += '?';
                                }
                                url += '&' + encodeURIComponent(params[keys[key]].key) + '=' +
                                    encodeURIComponent(getValueForParameter(params[keys[key]], behaviourData, keys[key], behaviourName));
                                break;
                        }
                    }
                    return http.request(new Request({

                            method: RequestMethod[behaviour.method.slice(0, 1).toUpperCase() + behaviour.method.slice(1).toLowerCase()],
                            url: (typeof baseURL === 'string' && baseURL.length > 0 ? typeof baseURL.split('/')[0] === 'string' &&
                                baseURL.split('/')[0].startsWith('http') ? baseURL : window.location.origin + baseURL : '') + url,
                            headers: new Headers(headers),
                            body: data
                        })).map((response) => {

                            headers = {};
                            data = {};
                            if (typeof behaviour.returns === 'object' && Object.keys(behaviour.returns).filter(function (key) {

                                    var paramValue, paramKey;
                                    if (behaviour.returns[key].type === 'header')
                                        headers[paramKey = behaviour.returns[key].key || key] = paramValue = response.headers.get(key);
                                    if (behaviour.returns[key].type === 'body' && typeof response.json().response === 'object' && !data[key])
                                        data[paramKey = key] = paramValue = Array.isArray(response.json().response) ? response.json().response : response.json().response[key];
                                    if (behaviour.returns[key].purpose && paramValue && paramKey) {

                                        if (!Array.isArray(behaviour.returns[key].purpose)) behaviour.returns[key].purpose = [behaviour.returns[key].purpose];
                                        for (var index in behaviour.returns[key].purpose) {

                                            var purpose = behaviour.returns[key].purpose[index];
                                            switch (typeof purpose === 'object' ? purpose.as : purpose) {

                                                case 'parameter':
                                                    var param = getParamterFromCache('localStorage');
                                                    param[paramKey] = parameters[paramKey] = {

                                                        key: key,
                                                        type: behaviour.returns[key].type
                                                    };
                                                    if (Array.isArray(purpose.unless)) param[paramKey].unless = parameters[paramKey].unless = purpose.unless;
                                                    if (Array.isArray(purpose.for)) param[paramKey].for = parameters[paramKey].for = purpose.for;
                                                    if (behaviour.returns[key].purpose.filter(function (p) {

                                                            return p === 'constant' || p.as === 'constant';
                                                        }).length > 0) param[paramKey].value = parameters[paramKey].value = paramValue;
                                                    param[paramKey].source = parameters[paramKey].source = 'localStorage';
                                                    setParameterToCache(param, paramKey);
                                                    break;
                                            }
                                        }
                                    }
                                    return behaviour.returns[key].type === 'header';
                                }).length > 0) {

                                return Object.assign(headers, Object.keys(data).length === 0 ? {

                                    data: response.json().response
                                } : data);
                            } else return response.json().response;
                        })
                        .catch((error) => {

                            var err = new Error((error.json() && error.json().message) || error.statusText ||
                                ('Error status: ' + error.status));
                            err.code = error.status;
                            var throwing = Observable.throw(err);
                            if (errorCallback) errorCallback(err);
                            return throwing;
                        });
                };
            } else {

                throw new Error('This behaviour does not exist.');
            }
        };
    }
}

Behaviours.annotations = [
    new Injectable()
];

Behaviours.parameters = [
    [new Inject(Http)]
];
