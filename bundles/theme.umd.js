(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs/ReplaySubject'), require('rxjs/Subject'), require('rxjs/BehaviorSubject'), require('rxjs/add/operator/publish'), require('rxjs/add/operator/map'), require('rxjs/add/operator/filter'), require('rxjs/add/operator/pairwise'), require('rxjs/add/operator/distinctUntilChanged'), require('rxjs/add/operator/debounceTime'), require('rxjs/add/operator/startWith'), require('@angular/forms'), require('@angular/router'), require('rxjs/add/operator/toPromise'), require('rxjs/add/operator/takeWhile'), require('rxjs/add/operator/share'), require('rxjs/Observable'), require('rxjs/add/observable/of'), require('rxjs/add/operator/delay')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'rxjs/ReplaySubject', 'rxjs/Subject', 'rxjs/BehaviorSubject', 'rxjs/add/operator/publish', 'rxjs/add/operator/map', 'rxjs/add/operator/filter', 'rxjs/add/operator/pairwise', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/startWith', '@angular/forms', '@angular/router', 'rxjs/add/operator/toPromise', 'rxjs/add/operator/takeWhile', 'rxjs/add/operator/share', 'rxjs/Observable', 'rxjs/add/observable/of', 'rxjs/add/operator/delay'], factory) :
	(factory((global.nb = global.nb || {}, global.nb.theme = global.nb.theme || {}),global.ng.core,global.ng.common,global.Rx,global.Rx,global.Rx,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.ng.forms,global.ng.router,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx));
}(this, (function (exports,_angular_core,_angular_common,rxjs_ReplaySubject,rxjs_Subject,rxjs_BehaviorSubject,rxjs_add_operator_publish,rxjs_add_operator_map,rxjs_add_operator_filter,rxjs_add_operator_pairwise,rxjs_add_operator_distinctUntilChanged,rxjs_add_operator_debounceTime,rxjs_add_operator_startWith,_angular_forms,_angular_router,rxjs_add_operator_toPromise,rxjs_add_operator_takeWhile,rxjs_add_operator_share,rxjs_Observable) { 'use strict';

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var nbThemeOptionsToken = new _angular_core.InjectionToken('NB_THEME_OPTIONS');
var nbMediaBreakpointsToken = new _angular_core.InjectionToken('NB_MEDIA_BREAKPOINTS');
var nbBuiltInJSThemesToken = new _angular_core.InjectionToken('NB_BUILT_IN_THEMES');
var nbJSThemesToken = new _angular_core.InjectionToken('NB_THEMES');

var NbColorHelper = (function () {
    function NbColorHelper() {
    }
    NbColorHelper.shade = function (color, weight) {
        return NbColorHelper.mix('#000000', color, weight);
    };
    NbColorHelper.tint = function (color, weight) {
        return NbColorHelper.mix('#ffffff', color, weight);
    };
    NbColorHelper.mix = function (color1, color2, weight) {
        var d2h = function (d) { return d.toString(16); };
        var h2d = function (h) { return parseInt(h, 16); };
        var result = '#';
        for (var i = 1; i < 7; i += 2) {
            var firstPart = h2d(color1.substr(i, 2));
            var secondPart = h2d(color2.substr(i, 2));
            var resultPart = d2h(Math.floor(secondPart + (firstPart - secondPart) * (weight / 100.0)));
            result += ('0' + resultPart).slice(-2);
        }
        return result;
    };
    NbColorHelper.hexToRgbA = function (hex, alpha) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length === 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
        }
        throw new Error('Bad Hex');
    };
    return NbColorHelper;
}());

var palette = {
    primary: '#8a7fff',
    success: '#40dc7e',
    info: '#4ca6ff',
    warning: '#ffa100',
    danger: '#ff4c6a',
};
var DEFAULT_THEME = {
    name: 'default',
    variables: {
        fontMain: 'Helvetica',
        fontSecondary: 'Helvetica',
        bg: '#ffffff',
        fg: '#a4abb3',
        fgHeading: '#2a2a2a',
        fgText: '#3b3b3b',
        fgHighlight: '#41d974',
        layoutBg: '#ebeff5',
        separator: '#ebeef2',
        primary: palette.primary,
        success: palette.success,
        info: palette.info,
        warning: palette.warning,
        danger: palette.danger,
        primaryLight: NbColorHelper.tint(palette.primary, 15),
        successLight: NbColorHelper.tint(palette.success, 15),
        infoLight: NbColorHelper.tint(palette.info, 15),
        warningLight: NbColorHelper.tint(palette.warning, 15),
        dangerLight: NbColorHelper.tint(palette.danger, 15),
    },
};

var palette$1 = {
    primary: '#7659ff',
    success: '#00d977',
    info: '#0088ff',
    warning: '#ffa100',
    danger: '#ff386a',
};
var COSMIC_THEME = {
    name: 'cosmic',
    base: 'default',
    variables: {
        bg: '#3d3780',
        fg: '#a1a1e5',
        fgHeading: '#ffffff',
        fgText: '#d1d1ff',
        fgHighlight: '#00f9a6',
        layoutBg: '#2f296b',
        separator: '#342e73',
        primary: palette$1.primary,
        success: palette$1.success,
        info: palette$1.info,
        warning: palette$1.warning,
        danger: palette$1.danger,
        primaryLight: NbColorHelper.tint(palette$1.primary, 20),
        successLight: NbColorHelper.tint(palette$1.success, 20),
        infoLight: NbColorHelper.tint(palette$1.info, 20),
        warningLight: NbColorHelper.tint(palette$1.warning, 20),
        dangerLight: NbColorHelper.tint(palette$1.danger, 20),
    },
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$1 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var BUILT_IN_THEMES = [
    DEFAULT_THEME,
    COSMIC_THEME,
];
/**
 * Js Themes registry - provides access to the JS themes' variables.
 * Usually shouldn't be used directly, but through the NbThemeService class methods (getJsTheme).
 */
var NbJSThemesRegistry = (function () {
    function NbJSThemesRegistry(builtInThemes, newThemes) {
        if (newThemes === void 0) { newThemes = []; }
        var _this = this;
        this.builtInThemes = builtInThemes;
        this.newThemes = newThemes;
        this.themes = {};
        var themes = this.combineByNames(newThemes, builtInThemes);
        themes.forEach(function (theme) {
            _this.register(theme, theme.name, theme.base);
        });
    }
    /**
     * Registers a new JS theme
     * @param config any
     * @param themeName string
     * @param baseTheme string
     */
    NbJSThemesRegistry.prototype.register = function (config, themeName, baseTheme) {
        var base = this.has(baseTheme) ? this.get(baseTheme) : {};
        this.themes[themeName] = this.mergeDeep({}, base, config);
    };
    /**
     * Checks whether the theme is registered
     * @param themeName
     * @returns boolean
     */
    NbJSThemesRegistry.prototype.has = function (themeName) {
        return !!this.themes[themeName];
    };
    /**
     * Return a theme
     * @param themeName
     * @returns NbJSThemeOptions
     */
    NbJSThemesRegistry.prototype.get = function (themeName) {
        if (!this.themes[themeName]) {
            throw Error("NbThemeConfig: no theme '" + themeName + "' found registered.");
        }
        return JSON.parse(JSON.stringify(this.themes[themeName]));
    };
    NbJSThemesRegistry.prototype.combineByNames = function (newThemes, oldThemes) {
        var _this = this;
        if (newThemes) {
            var mergedThemes_1 = [];
            newThemes.forEach(function (theme) {
                var sameOld = oldThemes.find(function (tm) { return tm.name === theme.name; })
                    || {};
                var mergedTheme = _this.mergeDeep({}, sameOld, theme);
                mergedThemes_1.push(mergedTheme);
            });
            oldThemes.forEach(function (theme) {
                if (!mergedThemes_1.find(function (tm) { return tm.name === theme.name; })) {
                    mergedThemes_1.push(theme);
                }
            });
            return mergedThemes_1;
        }
        return oldThemes;
    };
    NbJSThemesRegistry.prototype.isObject = function (item) {
        return item && typeof item === 'object' && !Array.isArray(item);
    };
    // TODO: move to helpers
    NbJSThemesRegistry.prototype.mergeDeep = function (target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        if (!sources.length) {
            return target;
        }
        var source = sources.shift();
        if (this.isObject(target) && this.isObject(source)) {
            for (var key in source) {
                if (this.isObject(source[key])) {
                    if (!target[key]) {
                        Object.assign(target, (_a = {}, _a[key] = {}, _a));
                    }
                    this.mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, (_b = {}, _b[key] = source[key], _b));
                }
            }
        }
        return this.mergeDeep.apply(this, [target].concat(sources));
        var _a, _b;
    };
    return NbJSThemesRegistry;
}());
NbJSThemesRegistry = __decorate$2([
    _angular_core.Injectable(),
    __param$1(0, _angular_core.Inject(nbBuiltInJSThemesToken)),
    __param$1(1, _angular_core.Inject(nbJSThemesToken)),
    __metadata$1("design:paramtypes", [Array, Array])
], NbJSThemesRegistry);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$2 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var DEFAULT_MEDIA_BREAKPOINTS = [
    {
        name: 'xs',
        width: 0,
    },
    {
        name: 'is',
        width: 400,
    },
    {
        name: 'sm',
        width: 576,
    },
    {
        name: 'md',
        width: 768,
    },
    {
        name: 'lg',
        width: 992,
    },
    {
        name: 'xl',
        width: 1200,
    },
    {
        name: 'xxl',
        width: 1400,
    },
    {
        name: 'xxxl',
        width: 1600,
    },
];
/**
 * Manages media breakpoints
 *
 * Provides access to available media breakpoints to convert window width to a configured breakpoint,
 * e.g. 200px - *xs* breakpoint
 */
exports.NbMediaBreakpointsService = (function () {
    function NbMediaBreakpointsService(breakpoints) {
        this.breakpoints = breakpoints;
        this.breakpointsMap = this.breakpoints.reduce(function (res, b) {
            res[b.name] = b.width;
            return res;
        }, {});
    }
    /**
     * Returns a configured breakpoint by width
     * @param width number
     * @returns {Z|{name: string, width: number}}
     */
    NbMediaBreakpointsService.prototype.getByWidth = function (width) {
        var unknown = { name: 'unknown', width: width };
        var breakpoints = this.getBreakpoints();
        return breakpoints
            .find(function (point, index) {
            var next = breakpoints[index + 1];
            return width >= point.width && (!next || width < next.width);
        }) || unknown;
    };
    /**
     * Returns a configured breakpoint by name
     * @param name string
     * @returns NbMediaBreakpoint
     */
    NbMediaBreakpointsService.prototype.getByName = function (name) {
        var unknown = { name: 'unknown', width: NaN };
        var breakpoints = this.getBreakpoints();
        return breakpoints.find(function (point) { return name === point.name; }) || unknown;
    };
    /**
     * Returns a list of configured breakpoints for the theme
     * @returns NbMediaBreakpoint[]
     */
    NbMediaBreakpointsService.prototype.getBreakpoints = function () {
        return this.breakpoints;
    };
    /**
     * Returns a map of configured breakpoints for the theme
     * @returns {[p: string]: number}
     */
    NbMediaBreakpointsService.prototype.getBreakpointsMap = function () {
        return this.breakpointsMap;
    };
    return NbMediaBreakpointsService;
}());
exports.NbMediaBreakpointsService = __decorate$3([
    _angular_core.Injectable(),
    __param$2(0, _angular_core.Inject(nbMediaBreakpointsToken)),
    __metadata$2("design:paramtypes", [Object])
], exports.NbMediaBreakpointsService);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Main Nebular service. Includes various helper methods.
 */
exports.NbThemeService = (function () {
    function NbThemeService(options, breakpointService, jsThemesRegistry) {
        this.options = options;
        this.breakpointService = breakpointService;
        this.jsThemesRegistry = jsThemesRegistry;
        this.themeChanges$ = new rxjs_ReplaySubject.ReplaySubject(1);
        this.appendToLayoutTop$ = new rxjs_ReplaySubject.ReplaySubject();
        this.createLayoutTop$ = new rxjs_Subject.Subject();
        this.appendLayoutClass$ = new rxjs_Subject.Subject();
        this.removeLayoutClass$ = new rxjs_Subject.Subject();
        this.changeWindowWidth$ = new rxjs_ReplaySubject.ReplaySubject(2);
        if (options && options.name) {
            this.changeTheme(options.name);
        }
    }
    NbThemeService.prototype.changeTheme = function (name) {
        this.themeChanges$.next({ name: name, previous: this.currentTheme });
        this.currentTheme = name;
    };
    NbThemeService.prototype.changeWindowWidth = function (width) {
        this.changeWindowWidth$.next(width);
    };
    NbThemeService.prototype.appendToLayoutTop = function (component) {
        var subject = new rxjs_ReplaySubject.ReplaySubject(1);
        this.appendToLayoutTop$.next({ component: component, listener: subject });
        return subject.asObservable();
    };
    /**
     * Returns a theme object with variables (color/paddings/etc) on a theme change.
     * Once subscribed - returns current theme.
     *
     * @returns {Observable<NbJSThemeOptions>}
     */
    NbThemeService.prototype.getJsTheme = function () {
        var _this = this;
        return this.onThemeChange().map(function (theme) {
            return _this.jsThemesRegistry.get(theme.name);
        });
    };
    NbThemeService.prototype.clearLayoutTop = function () {
        var observable = new rxjs_BehaviorSubject.BehaviorSubject(null);
        this.createLayoutTop$.next({ listener: observable });
        this.appendToLayoutTop$ = new rxjs_ReplaySubject.ReplaySubject();
        return observable.asObservable();
    };
    /**
     * Triggers media query breakpoint change
     * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
     * ```
     *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
     * ```
     * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
     */
    NbThemeService.prototype.onMediaQueryChange = function () {
        var _this = this;
        return this.changeWindowWidth$
            .startWith(undefined)
            .pairwise()
            .map(function (_a) {
            var prevWidth = _a[0], width = _a[1];
            return [
                _this.breakpointService.getByWidth(prevWidth),
                _this.breakpointService.getByWidth(width),
            ];
        })
            .filter(function (_a) {
            var prevPoint = _a[0], point = _a[1];
            return prevPoint.name !== point.name;
        })
            .distinctUntilChanged(null, function (params) { return params[0].name + params[1].name; })
            .publish()
            .refCount();
    };
    NbThemeService.prototype.onThemeChange = function () {
        return this.themeChanges$.publish().refCount();
    };
    NbThemeService.prototype.onAppendToTop = function () {
        return this.appendToLayoutTop$.publish().refCount();
    };
    NbThemeService.prototype.onClearLayoutTop = function () {
        return this.createLayoutTop$.publish().refCount();
    };
    NbThemeService.prototype.appendLayoutClass = function (className) {
        this.appendLayoutClass$.next(className);
    };
    NbThemeService.prototype.onAppendLayoutClass = function () {
        return this.appendLayoutClass$.publish().refCount();
    };
    NbThemeService.prototype.removeLayoutClass = function (className) {
        this.removeLayoutClass$.next(className);
    };
    NbThemeService.prototype.onRemoveLayoutClass = function () {
        return this.removeLayoutClass$.publish().refCount();
    };
    return NbThemeService;
}());
exports.NbThemeService = __decorate$1([
    _angular_core.Injectable(),
    __param(0, _angular_core.Inject(nbThemeOptionsToken)),
    __metadata("design:paramtypes", [Object, exports.NbMediaBreakpointsService,
        NbJSThemesRegistry])
], exports.NbThemeService);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Service to control the global page spinner.
 */
exports.NbSpinnerService = (function () {
    function NbSpinnerService() {
        this.loaders = [];
        this.selector = 'nb-global-spinner';
    }
    /**
     * Appends new loader to the list of loader to be completed before
     * spinner will be hidden
     * @param method Promise<any>
     */
    NbSpinnerService.prototype.registerLoader = function (method) {
        this.loaders.push(method);
    };
    /**
     * Clears the list of loader
     */
    NbSpinnerService.prototype.clear = function () {
        this.loaders = [];
    };
    /**
     * Start the loader process, show spinnder and execute loaders
     */
    NbSpinnerService.prototype.load = function () {
        this.showSpinner();
        this.executeAll();
    };
    NbSpinnerService.prototype.executeAll = function (done) {
        var _this = this;
        if (done === void 0) { done = function () { }; }
        Promise.all(this.loaders).then(function (values) {
            _this.hideSpinner();
            done.call(null, values);
        })
            .catch(function (error) {
            // TODO: Promise.reject
            console.error(error);
        });
    };
    // TODO is there any better way of doing this?
    NbSpinnerService.prototype.showSpinner = function () {
        var el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'block';
        }
    };
    NbSpinnerService.prototype.hideSpinner = function () {
        var el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'none';
        }
    };
    NbSpinnerService.prototype.getSpinnerElement = function () {
        return document.getElementById(this.selector);
    };
    return NbSpinnerService;
}());
exports.NbSpinnerService = __decorate$4([
    _angular_core.Injectable()
], exports.NbSpinnerService);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.NbThemeModule = NbThemeModule_1 = (function () {
    function NbThemeModule() {
    }
    // TODO: check the options (throw exception?)
    /**
     * Main Theme Module
     *
     * @param nbThemeOptions {NbThemeOptions} Main theme options
     * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
     * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
     *
     * @returns {ModuleWithProviders}
     */
    NbThemeModule.forRoot = function (nbThemeOptions, nbJSThemes, nbMediaBreakpoints) {
        return {
            ngModule: NbThemeModule_1,
            providers: [
                { provide: nbThemeOptionsToken, useValue: nbThemeOptions || {} },
                { provide: nbBuiltInJSThemesToken, useValue: BUILT_IN_THEMES },
                { provide: nbJSThemesToken, useValue: nbJSThemes || [] },
                { provide: nbMediaBreakpointsToken, useValue: nbMediaBreakpoints || DEFAULT_MEDIA_BREAKPOINTS },
                NbJSThemesRegistry,
                exports.NbThemeService,
                exports.NbMediaBreakpointsService,
                exports.NbSpinnerService,
            ],
        };
    };
    return NbThemeModule;
}());
exports.NbThemeModule = NbThemeModule_1 = __decorate([
    _angular_core.NgModule({
        imports: [
            _angular_common.CommonModule,
        ],
        exports: [],
    })
], exports.NbThemeModule);
var NbThemeModule_1;

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbSharedModule = (function () {
    function NbSharedModule() {
    }
    return NbSharedModule;
}());
NbSharedModule = __decorate$6([
    _angular_core.NgModule({
        exports: [
            _angular_common.CommonModule,
            // TODO: probably we don't need FormsModule in SharedModule
            _angular_forms.FormsModule,
            _angular_router.RouterModule,
        ],
    })
], NbSharedModule);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Component intended to be used within  the `<nb-card>` component.
 * It adds styles for a preset header section.
 *
 * @styles
 *
 * card-header-font-family:
 * card-header-font-size:
 * card-header-font-weight:
 * card-header-fg:
 * card-header-fg-heading:
 * card-header-active-bg:
 * card-header-active-fg:
 * card-header-disabled-bg:
 * card-header-primary-bg:
 * card-header-info-bg:
 * card-header-success-bg:
 * card-header-warning-bg:
 * card-header-danger-bg:
 */
var NbCardHeaderComponent = (function () {
    function NbCardHeaderComponent() {
    }
    return NbCardHeaderComponent;
}());
NbCardHeaderComponent = __decorate$7([
    _angular_core.Component({
        selector: 'nb-card-header',
        template: "<ng-content></ng-content>",
    })
], NbCardHeaderComponent);
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset body section.
 */
var NbCardBodyComponent = (function () {
    function NbCardBodyComponent() {
    }
    return NbCardBodyComponent;
}());
NbCardBodyComponent = __decorate$7([
    _angular_core.Component({
        selector: 'nb-card-body',
        template: "<ng-content></ng-content>",
    })
], NbCardBodyComponent);
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset footer section.
 */
var NbCardFooterComponent = (function () {
    function NbCardFooterComponent() {
    }
    return NbCardFooterComponent;
}());
NbCardFooterComponent = __decorate$7([
    _angular_core.Component({
        selector: 'nb-card-footer',
        template: "<ng-content></ng-content>",
    })
], NbCardFooterComponent);
/**
 * Basic content container component.
 *
 * @example While this component can be used alone, it also provides a number
 * of child components for common card sections:
 * ```
 * <nb-card-header></nb-card-header>
 * <nb-card-body></nb-card-body>
 * <nb-card-footer></nb-card-footer>
 * ```
 *
 * @styles
 *
 * card-line-height:
 * card-font-weight:
 * card-fg-text:
 * card-bg:
 * card-height-xxsmall:
 * card-height-xsmall:
 * card-height-small:
 * card-height-medium:
 * card-height-large:
 * card-height-xlarge:
 * card-height-xxlarge:
 * card-shadow:
 * card-border-radius:
 * card-padding:
 * card-margin:
 * card-separator:
 *
 */
var NbCardComponent = NbCardComponent_1 = (function () {
    function NbCardComponent() {
    }
    Object.defineProperty(NbCardComponent.prototype, "xxsmall", {
        get: function () {
            return this.size === NbCardComponent_1.SIZE_XXSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "xsmall", {
        get: function () {
            return this.size === NbCardComponent_1.SIZE_XSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "small", {
        get: function () {
            return this.size === NbCardComponent_1.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "medium", {
        get: function () {
            return this.size === NbCardComponent_1.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "large", {
        get: function () {
            return this.size === NbCardComponent_1.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "xlarge", {
        get: function () {
            return this.size === NbCardComponent_1.SIZE_XLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "xxlarge", {
        get: function () {
            return this.size === NbCardComponent_1.SIZE_XXLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "active", {
        get: function () {
            return this.status === NbCardComponent_1.STATUS_ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "disabled", {
        get: function () {
            return this.status === NbCardComponent_1.STATUS_DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "primary", {
        get: function () {
            return this.status === NbCardComponent_1.STATUS_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "info", {
        get: function () {
            return this.status === NbCardComponent_1.STATUS_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "success", {
        get: function () {
            return this.status === NbCardComponent_1.STATUS_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "warning", {
        get: function () {
            return this.status === NbCardComponent_1.STATUS_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "danger", {
        get: function () {
            return this.status === NbCardComponent_1.STATUS_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "setSize", {
        /**
         * Card size, available sizes:
         * xxsmall, xsmall, small, medium, large, xlarge, xxlarge
         * @param {string} val
         */
        set: function (val) {
            this.size = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "setStatus", {
        /**
         * Card status (adds specific styles):
         * active, disabled, primary, info, success, warning, danger
         * @param {string} val
         */
        set: function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    return NbCardComponent;
}());
NbCardComponent.SIZE_XXSMALL = 'xxsmall';
NbCardComponent.SIZE_XSMALL = 'xsmall';
NbCardComponent.SIZE_SMALL = 'small';
NbCardComponent.SIZE_MEDIUM = 'medium';
NbCardComponent.SIZE_LARGE = 'large';
NbCardComponent.SIZE_XLARGE = 'xlarge';
NbCardComponent.SIZE_XXLARGE = 'xxlarge';
NbCardComponent.STATUS_ACTIVE = 'active';
NbCardComponent.STATUS_DISABLED = 'disabled';
NbCardComponent.STATUS_PRIMARY = 'primary';
NbCardComponent.STATUS_INFO = 'info';
NbCardComponent.STATUS_SUCCESS = 'success';
NbCardComponent.STATUS_WARNING = 'warning';
NbCardComponent.STATUS_DANGER = 'danger';
__decorate$7([
    _angular_core.HostBinding('class.xxsmall-card'),
    __metadata$3("design:type", Object),
    __metadata$3("design:paramtypes", [])
], NbCardComponent.prototype, "xxsmall", null);
__decorate$7([
    _angular_core.HostBinding('class.xsmall-card'),
    __metadata$3("design:type", Object),
    __metadata$3("design:paramtypes", [])
], NbCardComponent.prototype, "xsmall", null);
__decorate$7([
    _angular_core.HostBinding('class.small-card'),
    __metadata$3("design:type", Object),
    __metadata$3("design:paramtypes", [])
], NbCardComponent.prototype, "small", null);
__decorate$7([
    _angular_core.HostBinding('class.medium-card'),
    __metadata$3("design:type", Object),
    __metadata$3("design:paramtypes", [])
], NbCardComponent.prototype, "medium", null);
__decorate$7([
    _angular_core.HostBinding('class.large-card'),
    __metadata$3("design:type", Object),
    __metadata$3("design:paramtypes", [])
], NbCardComponent.prototype, "large", null);
__decorate$7([
    _angular_core.HostBinding('class.xlarge-card'),
    __metadata$3("design:type", Object),
    __metadata$3("design:paramtypes", [])
], NbCardComponent.prototype, "xlarge", null);
__decorate$7([
    _angular_core.HostBinding('class.xxlarge-card'),
    __metadata$3("design:type", Object),
    __metadata$3("design:paramtypes", [])
], NbCardComponent.prototype, "xxlarge", null);
__decorate$7([
    _angular_core.HostBinding('class.active-card'),
    __metadata$3("design:type", Object),
    __metadata$3("design:paramtypes", [])
], NbCardComponent.prototype, "active", null);
__decorate$7([
    _angular_core.HostBinding('class.disabled-card'),
    __metadata$3("design:type", Object),
    __metadata$3("design:paramtypes", [])
], NbCardComponent.prototype, "disabled", null);
__decorate$7([
    _angular_core.HostBinding('class.primary-card'),
    __metadata$3("design:type", Object),
    __metadata$3("design:paramtypes", [])
], NbCardComponent.prototype, "primary", null);
__decorate$7([
    _angular_core.HostBinding('class.info-card'),
    __metadata$3("design:type", Object),
    __metadata$3("design:paramtypes", [])
], NbCardComponent.prototype, "info", null);
__decorate$7([
    _angular_core.HostBinding('class.success-card'),
    __metadata$3("design:type", Object),
    __metadata$3("design:paramtypes", [])
], NbCardComponent.prototype, "success", null);
__decorate$7([
    _angular_core.HostBinding('class.warning-card'),
    __metadata$3("design:type", Object),
    __metadata$3("design:paramtypes", [])
], NbCardComponent.prototype, "warning", null);
__decorate$7([
    _angular_core.HostBinding('class.danger-card'),
    __metadata$3("design:type", Object),
    __metadata$3("design:paramtypes", [])
], NbCardComponent.prototype, "danger", null);
__decorate$7([
    _angular_core.Input('size'),
    __metadata$3("design:type", String),
    __metadata$3("design:paramtypes", [String])
], NbCardComponent.prototype, "setSize", null);
__decorate$7([
    _angular_core.Input('status'),
    __metadata$3("design:type", String),
    __metadata$3("design:paramtypes", [String])
], NbCardComponent.prototype, "setStatus", null);
NbCardComponent = NbCardComponent_1 = __decorate$7([
    _angular_core.Component({
        selector: 'nb-card',
        styles: [":host{display:flex;flex-direction:column} "],
        template: "\n    <ng-content></ng-content>\n    <ng-content select=\"nb-card-header\"></ng-content>\n    <ng-content select=\"nb-card-body\"></ng-content>\n    <ng-content select=\"nb-card-footer\"></ng-content>\n  ",
    })
], NbCardComponent);
var NbCardComponent_1;

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NB_CARD_COMPONENTS = [
    NbCardComponent,
    NbCardBodyComponent,
    NbCardFooterComponent,
    NbCardHeaderComponent,
];
exports.NbCardModule = (function () {
    function NbCardModule() {
    }
    return NbCardModule;
}());
exports.NbCardModule = __decorate$5([
    _angular_core.NgModule({
        imports: [
            NbSharedModule,
        ],
        declarations: NB_CARD_COMPONENTS.slice(),
        exports: NB_CARD_COMPONENTS.slice(),
    })
], exports.NbCardModule);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */ function convertToBoolProperty(val) {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return (val === 'true' || val === '');
    }
    return !!val;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$9 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * A container component which determines a content position inside of the layout.
 * The layout could contain unlimited columns (not including the sidebars).
 *
 * @example By default the columns are ordered from the left to the right,
 * but it's also possible to overwrite this behavior by setting a `left` attribute to the column,
 * moving it to the very first position:
 * ```
 * <nb-layout>
 *   <nb-layout-column>Second</nb-layout-column>
 *   <nb-layout-column>Third</nb-layout-column>
 *   <nb-layout-column left>First</nb-layout-column>
 * </nb-layout>
 * ```
 */
var NbLayoutColumnComponent = (function () {
    function NbLayoutColumnComponent() {
    }
    Object.defineProperty(NbLayoutColumnComponent.prototype, "left", {
        /**
         * Move the column to the very left position in the layout.
         * @param {boolean} val
         */
        set: function (val) {
            this.leftValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    return NbLayoutColumnComponent;
}());
__decorate$9([
    _angular_core.HostBinding('class.left'),
    __metadata$4("design:type", Boolean)
], NbLayoutColumnComponent.prototype, "leftValue", void 0);
__decorate$9([
    _angular_core.Input(),
    __metadata$4("design:type", Boolean),
    __metadata$4("design:paramtypes", [Boolean])
], NbLayoutColumnComponent.prototype, "left", null);
NbLayoutColumnComponent = __decorate$9([
    _angular_core.Component({
        selector: 'nb-layout-column',
        template: "\n    <ng-content></ng-content>\n  ",
    })
], NbLayoutColumnComponent);
/**
 * Page header component.
 * Located on top of the page above the layout columns and sidebars.
 * Could be made `fixed` by setting the corresponding property. In the fixed mode the header becomes
 * sticky to the top of the nb-layout (to of the page).
 */
var NbLayoutHeaderComponent = (function () {
    function NbLayoutHeaderComponent() {
    }
    Object.defineProperty(NbLayoutHeaderComponent.prototype, "fixed", {
        /**
         * Makes the header sticky to the top of the nb-layout.
         * @param {boolean} val
         */
        set: function (val) {
            this.fixedValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    return NbLayoutHeaderComponent;
}());
__decorate$9([
    _angular_core.HostBinding('class.fixed'),
    __metadata$4("design:type", Boolean)
], NbLayoutHeaderComponent.prototype, "fixedValue", void 0);
__decorate$9([
    _angular_core.Input(),
    __metadata$4("design:type", Boolean),
    __metadata$4("design:paramtypes", [Boolean])
], NbLayoutHeaderComponent.prototype, "fixed", null);
NbLayoutHeaderComponent = __decorate$9([
    _angular_core.Component({
        selector: 'nb-layout-header',
        template: "\n    <nav [class.fixed]=\"fixedValue\">\n      <ng-content></ng-content>\n    </nav>\n  ",
    })
], NbLayoutHeaderComponent);
/**
 * Page footer.
 * Located under the nb-layout content (specifically, under the columns).
 * Could be made `fixed`, becoming sticky to the bottom of the view port (window).
 */
var NbLayoutFooterComponent = (function () {
    function NbLayoutFooterComponent() {
    }
    Object.defineProperty(NbLayoutFooterComponent.prototype, "fixed", {
        /**
         * Makes the footer sticky to the bottom of the window.
         * @param {boolean} val
         */
        set: function (val) {
            this.fixedValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    return NbLayoutFooterComponent;
}());
__decorate$9([
    _angular_core.HostBinding('class.fixed'),
    __metadata$4("design:type", Boolean)
], NbLayoutFooterComponent.prototype, "fixedValue", void 0);
__decorate$9([
    _angular_core.Input(),
    __metadata$4("design:type", Boolean),
    __metadata$4("design:paramtypes", [Boolean])
], NbLayoutFooterComponent.prototype, "fixed", null);
NbLayoutFooterComponent = __decorate$9([
    _angular_core.Component({
        selector: 'nb-layout-footer',
        template: "\n    <nav [class.fixed]=\"fixedValue\">\n      <ng-content></ng-content>\n    </nav>\n  ",
    })
], NbLayoutFooterComponent);
/**
 * The general Nebular component-container.
 * It is required that all children component of the framework are located inside of the nb-layout.
 *
 * Can contain the following components inside:
 *
 * ```
 * nb-layout-header
 * nb-layout-column
 * nb-sidebar
 * nb-layout-footer
 * ```
 *
 * By default the layout fills up the full view-port.
 * The window scrollbars are disabled on the body and moved inside of the nb-layout, so that the scrollbars
 * won't mess with the fixed nb-header.
 *
 * The children components are projected into the flexible layout structure allowing to adjust the layout behavior
 * based on the settings provided.
 *
 * The layout content (columns) becomes centered when the window width is more than
 * the value specified in the theme variable `layout-content-width`.
 *
 * The layout also contains the area on the very top (the first child of the nb-layout), which could be used
 * to dynamically append some components like modals or spinners/loaders
 * so that they are located on top of the elements hierarchy.
 * More details are below under the `ThemeService` section.
 *
 * The layout component is also responsible for changing of the application themes.
 * It listens to the `themeChange` event and change the theme CSS class appended to body.
 * Based on the class appended a specific CSS-theme is applied to the application.
 * More details of the Theme System could be found here [Enabling Theme System](#/docs/concepts/theme-system)
 *
 * @example A simple layout example:
 *
 * ```
 * <nb-layout>
 *   <nb-layout-header>Great Company</nb-layout-header>
 *
 *   <nb-layout-column>
 *     Hello World!
 *   </nb-layout-column>
 *
 *   <nb-layout-footer>Contact us</nb-layout-footer>
 * </nb-layout>
 * ```
 *
 * @example For example, it is possible to ask the layout to center the columns (notice: we added a `center` attribute
 * to the layout:
 *
 * ```
 * <nb-layout center>
 *   <nb-layout-header>Great Company</nb-layout-header>
 *
 *   <nb-layout-column>
 *     Hello World!
 *   </nb-layout-column>
 *
 *   <nb-layout-footer>Contact us</nb-layout-footer>
 * </nb-layout>
 * ```
 *
 * @styles
 *
 * layout-font-family
 * layout-font-size
 * layout-line-height
 * layout-fg
 * layout-bg
 * layout-min-height
 * layout-content-width
 * layout-window-mode-min-width
 * layout-window-mode-max-width: window mode only, after this value layout turns into floating window
 * layout-window-mode-bg: window mode only, background
 * layout-window-mode-padding-top: window mode only, max padding from top
 * layout-window-shadow: window mode shadow
 * layout-padding
 * layout-medium-padding
 * layout-small-padding

 */
var NbLayoutComponent = (function () {
    function NbLayoutComponent(themeService, spinnerService, componentFactoryResolver, elementRef, renderer) {
        var _this = this;
        this.themeService = themeService;
        this.spinnerService = spinnerService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.centerValue = false;
        this.windowModeValue = false;
        this.withScrollValue = false;
        this.afterViewInit$ = new rxjs_BehaviorSubject.BehaviorSubject(null);
        this.themeSubscription = this.themeService.onThemeChange().subscribe(function (theme) {
            var body = document.getElementsByTagName('body')[0];
            if (theme.previous) {
                _this.renderer.removeClass(body, "nb-theme-" + theme.previous);
            }
            _this.renderer.addClass(body, "nb-theme-" + theme.name);
        });
        this.appendClassSubscription = this.themeService.onAppendLayoutClass().subscribe(function (className) {
            _this.renderer.addClass(_this.elementRef.nativeElement, className);
        });
        this.removeClassSubscription = this.themeService.onRemoveLayoutClass().subscribe(function (className) {
            _this.renderer.removeClass(_this.elementRef.nativeElement, className);
        });
        this.spinnerService.registerLoader(new Promise(function (resolve, reject) {
            _this.afterViewInit$.subscribe(function (_) { return resolve(); });
        }));
        this.spinnerService.load();
        // trigger first time so that after the change we have the initial value
        this.themeService.changeWindowWidth(window.innerWidth);
    }
    Object.defineProperty(NbLayoutComponent.prototype, "center", {
        /**
         * Defines whether the layout columns will be centered after some width
         * @param {boolean} val
         */
        set: function (val) {
            this.centerValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbLayoutComponent.prototype, "windowMode", {
        /**
         * Defines whether the layout enters a 'window' mode, when the layout content (including sidebars and fixed header)
         * becomes centered by width with a margin from the top of the screen, like a floating window.
         * Automatically enables `withScroll` mode, as in the window mode scroll must be inside the layout and cannot be on
         * window. (TODO: check this)
         * @param {boolean} val
         */
        set: function (val) {
            this.windowModeValue = convertToBoolProperty(val);
            this.withScroll = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbLayoutComponent.prototype, "withScroll", {
        /**
         * Defines whether to move the scrollbars to layout or leave it at the body level.
         * Automatically set to true when `windowMode` is enabled.
         * @param {boolean} val
         */
        set: function (val) {
            this.withScrollValue = convertToBoolProperty(val);
            // TODO: is this the best way of doing it? as we don't have access to body from theme styles
            // TODO: add e2e test
            var body = document.getElementsByTagName('body')[0];
            if (this.withScrollValue) {
                this.renderer.setStyle(body, 'overflow', 'hidden');
            }
            else {
                this.renderer.setStyle(body, 'overflow', 'initial');
            }
        },
        enumerable: true,
        configurable: true
    });
    NbLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.appendSubscription = this.themeService.onAppendToTop()
            .subscribe(function (data) {
            var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(data.component);
            var componentRef = _this.veryTopRef.createComponent(componentFactory);
            data.listener.next(componentRef);
            data.listener.complete();
        });
        this.clearSubscription = this.themeService.onClearLayoutTop()
            .subscribe(function (data) {
            _this.veryTopRef.clear();
            data.listener.next(true);
        });
        this.afterViewInit$.next(true);
    };
    NbLayoutComponent.prototype.ngOnDestroy = function () {
        this.themeService.clearLayoutTop();
        this.themeSubscription.unsubscribe();
        this.appendClassSubscription.unsubscribe();
        this.removeClassSubscription.unsubscribe();
        this.appendSubscription.unsubscribe();
        this.clearSubscription.unsubscribe();
    };
    NbLayoutComponent.prototype.onResize = function (event) {
        this.themeService.changeWindowWidth(event.target.innerWidth);
    };
    return NbLayoutComponent;
}());
__decorate$9([
    _angular_core.HostBinding('class.window-mode'),
    __metadata$4("design:type", Boolean)
], NbLayoutComponent.prototype, "windowModeValue", void 0);
__decorate$9([
    _angular_core.HostBinding('class.with-scroll'),
    __metadata$4("design:type", Boolean)
], NbLayoutComponent.prototype, "withScrollValue", void 0);
__decorate$9([
    _angular_core.Input(),
    __metadata$4("design:type", Boolean),
    __metadata$4("design:paramtypes", [Boolean])
], NbLayoutComponent.prototype, "center", null);
__decorate$9([
    _angular_core.Input(),
    __metadata$4("design:type", Boolean),
    __metadata$4("design:paramtypes", [Boolean])
], NbLayoutComponent.prototype, "windowMode", null);
__decorate$9([
    _angular_core.Input(),
    __metadata$4("design:type", Boolean),
    __metadata$4("design:paramtypes", [Boolean])
], NbLayoutComponent.prototype, "withScroll", null);
__decorate$9([
    _angular_core.ViewChild('layoutTopDynamicArea', { read: _angular_core.ViewContainerRef }),
    __metadata$4("design:type", _angular_core.ViewContainerRef)
], NbLayoutComponent.prototype, "veryTopRef", void 0);
__decorate$9([
    _angular_core.HostListener('window:resize', ['$event']),
    __metadata$4("design:type", Function),
    __metadata$4("design:paramtypes", [Object]),
    __metadata$4("design:returntype", void 0)
], NbLayoutComponent.prototype, "onResize", null);
NbLayoutComponent = __decorate$9([
    _angular_core.Component({
        selector: 'nb-layout',
        styles: [":host{-webkit-font-smoothing:antialiased}:host .layout{display:flex;flex-direction:column}:host /deep/ nb-layout-header{display:block}:host /deep/ nb-layout-header nav{align-items:center;display:flex}:host /deep/ nb-layout-header.fixed{position:fixed;left:0;right:0;z-index:1040}:host .layout-container{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:row}:host .layout-container /deep/ nb-sidebar{order:0}:host .layout-container /deep/ nb-sidebar.right{order:2}:host .layout-container /deep/ nb-sidebar .fixed{position:fixed;width:100%;overflow-y:auto;height:100%}:host .layout-container .content{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:column}:host .layout-container .content.center{max-width:100%;position:relative;margin-left:auto;margin-right:auto}:host .layout-container .content .columns{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:row}:host .layout-container .content .columns /deep/ nb-layout-column{order:2;flex:1 0}:host .layout-container .content .columns /deep/ nb-layout-column.left{order:1}:host .layout-container .content /deep/ nb-layout-footer{display:block;margin-top:auto}:host .layout-container .content /deep/ nb-layout-footer nav{justify-content:center;display:flex} "],
        template: "\n    <ng-template #layoutTopDynamicArea></ng-template>\n    <div class=\"scrollable-container\">\n      <div class=\"layout\">\n        <ng-content select=\"nb-layout-header\"></ng-content>\n        <div class=\"layout-container\">\n          <ng-content select=\"nb-sidebar\"></ng-content>\n          <div class=\"content\" [class.center]=\"centerValue\">\n            <div class=\"columns\">\n              <ng-content select=\"nb-layout-column\"></ng-content>\n            </div>\n            <ng-content select=\"nb-layout-footer\"></ng-content>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
    }),
    __metadata$4("design:paramtypes", [exports.NbThemeService,
        exports.NbSpinnerService,
        _angular_core.ComponentFactoryResolver,
        _angular_core.ElementRef,
        _angular_core.Renderer2])
], NbLayoutComponent);

var __decorate$8 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NB_LAYOUT_COMPONENTS = [
    NbLayoutComponent,
    NbLayoutColumnComponent,
    NbLayoutFooterComponent,
    NbLayoutHeaderComponent,
];
exports.NbLayoutModule = (function () {
    function NbLayoutModule() {
    }
    return NbLayoutModule;
}());
exports.NbLayoutModule = __decorate$8([
    _angular_core.NgModule({
        imports: [
            NbSharedModule,
        ],
        declarations: NB_LAYOUT_COMPONENTS.slice(),
        exports: NB_LAYOUT_COMPONENTS.slice(),
    })
], exports.NbLayoutModule);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$12 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var itemClick$ = new rxjs_ReplaySubject.ReplaySubject(1);
var addItems$ = new rxjs_ReplaySubject.ReplaySubject(1);
var navigateHome$ = new rxjs_ReplaySubject.ReplaySubject(1);
var getSelectedItem$ = new rxjs_ReplaySubject.ReplaySubject(1);
var itemSelect$ = new rxjs_ReplaySubject.ReplaySubject(1);
var itemHover$ = new rxjs_ReplaySubject.ReplaySubject(1);
var submenuToggle$ = new rxjs_ReplaySubject.ReplaySubject(1);
/**
 * Menu Item options
 * TODO: check if we need both URL and LINK
 */
var NbMenuItem = (function () {
    function NbMenuItem() {
        /**
         * Item is selected when partly or fully equal to the current url
         * @type {string}
         */
        this.pathMatch = 'full'; // TODO: is not set if item is initialized by default, should be set anyway
    }
    return NbMenuItem;
}());
// TODO: map select events to router change events
// TODO: review the interface
/**
 * Menu Service. Allows you to listen to menu events, or to interact with a menu.
 */
exports.NbMenuService = (function () {
    function NbMenuService() {
    }
    /**
     * Add items to the end of the menu items list
     * @param {List<NbMenuItem>} items
     * @param {string} tag
     */
    NbMenuService.prototype.addItems = function (items, tag) {
        addItems$.next({ tag: tag, items: items });
    };
    /**
     * Navigate to the home menu item
     * @param {string} tag
     */
    NbMenuService.prototype.navigateHome = function (tag) {
        navigateHome$.next({ tag: tag });
    };
    /**
     * Returns currently selected item. Won't subscribe to the future events.
     * @param {string} tag
     * @returns {Observable<{tag: string; item: NbMenuItem}>}
     */
    NbMenuService.prototype.getSelectedItem = function (tag) {
        var listener = new rxjs_BehaviorSubject.BehaviorSubject(null);
        getSelectedItem$.next({ tag: tag, listener: listener });
        return listener.asObservable();
    };
    NbMenuService.prototype.onItemClick = function () {
        return itemClick$.publish().refCount();
    };
    NbMenuService.prototype.onItemSelect = function () {
        return itemSelect$.publish().refCount();
    };
    NbMenuService.prototype.onItemHover = function () {
        return itemHover$.publish().refCount();
    };
    NbMenuService.prototype.onSubmenuToggle = function () {
        return submenuToggle$.publish().refCount();
    };
    return NbMenuService;
}());
exports.NbMenuService = __decorate$12([
    _angular_core.Injectable()
], exports.NbMenuService);
var NbMenuInternalService = (function () {
    function NbMenuInternalService(router, location) {
        this.router = router;
        this.location = location;
        this.items = [];
        this.items = [];
    }
    NbMenuInternalService.prototype.getItems = function () {
        return this.items;
    };
    NbMenuInternalService.prototype.prepareItems = function (items) {
        var _this = this;
        items.forEach(function (i) { return _this.setParent(i); });
        items.forEach(function (i) { return _this.prepareItem(i); });
    };
    NbMenuInternalService.prototype.resetItems = function (items) {
        var _this = this;
        items.forEach(function (i) { return _this.resetItem(i); });
    };
    NbMenuInternalService.prototype.collapseAll = function (items, except) {
        var _this = this;
        items.forEach(function (i) { return _this.collapseItem(i, except); });
    };
    NbMenuInternalService.prototype.onAddItem = function () {
        return addItems$.publish().refCount();
    };
    NbMenuInternalService.prototype.onNavigateHome = function () {
        return navigateHome$.publish().refCount();
    };
    NbMenuInternalService.prototype.onGetSelectedItem = function () {
        return getSelectedItem$.publish().refCount();
    };
    NbMenuInternalService.prototype.itemHover = function (item, tag) {
        itemHover$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.submenuToggle = function (item, tag) {
        submenuToggle$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.itemSelect = function (item, tag) {
        itemSelect$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.itemClick = function (item, tag) {
        itemClick$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.resetItem = function (item) {
        var _this = this;
        item.selected = false;
        item.children && item.children.forEach(function (child) {
            _this.resetItem(child);
        });
    };
    NbMenuInternalService.prototype.collapseItem = function (item, except) {
        var _this = this;
        if (except && item === except) {
            return;
        }
        item.expanded = false;
        item.children && item.children.forEach(function (child) {
            _this.collapseItem(child);
        });
    };
    NbMenuInternalService.prototype.setParent = function (item) {
        var _this = this;
        item.children && item.children.forEach(function (child) {
            child.parent = item;
            _this.setParent(child);
        });
    };
    NbMenuInternalService.prototype.prepareItem = function (item) {
        var _this = this;
        item.selected = false;
        var exact = item.pathMatch === 'full';
        var location = this.location.path();
        if ((exact && location === item.link) || (!exact && location.includes(item.link))
            || (exact && item.fragment && location.substr(location.indexOf('#') + 1).includes(item.fragment))) {
            item.selected = true;
            this.selectParent(item);
        }
        item.children && item.children.forEach(function (child) {
            _this.prepareItem(child);
        });
    };
    NbMenuInternalService.prototype.selectParent = function (item) {
        var parent = item.parent;
        if (parent) {
            parent.selected = true;
            parent.expanded = true;
            this.selectParent(parent);
        }
    };
    return NbMenuInternalService;
}());
NbMenuInternalService = __decorate$12([
    _angular_core.Injectable(),
    __metadata$6("design:paramtypes", [_angular_router.Router, _angular_common.Location])
], NbMenuInternalService);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$11 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbMenuItemComponent = (function () {
    function NbMenuItemComponent(router) {
        this.router = router;
        this.menuItem = null;
        this.hoverItem = new _angular_core.EventEmitter();
        this.toggleSubMenu = new _angular_core.EventEmitter();
        this.selectItem = new _angular_core.EventEmitter();
        this.itemClick = new _angular_core.EventEmitter();
    }
    NbMenuItemComponent.prototype.onToggleSubMenu = function (item) {
        this.toggleSubMenu.emit(item);
    };
    NbMenuItemComponent.prototype.onHoverItem = function (item) {
        this.hoverItem.emit(item);
    };
    NbMenuItemComponent.prototype.onSelectItem = function (item) {
        this.selectItem.emit(item);
    };
    NbMenuItemComponent.prototype.onItemClick = function (item) {
        this.itemClick.emit(item);
    };
    return NbMenuItemComponent;
}());
__decorate$11([
    _angular_core.Input(),
    __metadata$5("design:type", Object)
], NbMenuItemComponent.prototype, "menuItem", void 0);
__decorate$11([
    _angular_core.Output(),
    __metadata$5("design:type", Object)
], NbMenuItemComponent.prototype, "hoverItem", void 0);
__decorate$11([
    _angular_core.Output(),
    __metadata$5("design:type", Object)
], NbMenuItemComponent.prototype, "toggleSubMenu", void 0);
__decorate$11([
    _angular_core.Output(),
    __metadata$5("design:type", Object)
], NbMenuItemComponent.prototype, "selectItem", void 0);
__decorate$11([
    _angular_core.Output(),
    __metadata$5("design:type", Object)
], NbMenuItemComponent.prototype, "itemClick", void 0);
NbMenuItemComponent = __decorate$11([
    _angular_core.Component({
        // tslint:disable-next-line:component-selector
        selector: '[nbMenuItem]',
        template: "<span *ngIf=\"menuItem.group\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> {{ menuItem.title }} </span> <a *ngIf=\"menuItem.link && !menuItem.url && !menuItem.children && !menuItem.group\" [routerLink]=\"menuItem.link\" [fragment]=\"menuItem.fragment\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"onSelectItem(menuItem)\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"menuItem.url && !menuItem.children && !menuItem.link && !menuItem.group\" [attr.href]=\"menuItem.url\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"onSelectItem(menuItem)\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"!menuItem.children && !menuItem.link && !menuItem.url && !menuItem.group\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"$event.preventDefault(); onItemClick(menuItem);\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"menuItem.children\" (click)=\"$event.preventDefault(); onToggleSubMenu(menuItem);\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" href=\"#\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> <i class=\"ion chevron\" [class.ion-chevron-left]=\"!menuItem.expanded\" [class.ion-chevron-down]=\"menuItem.expanded\"></i> </a> <ul *ngIf=\"menuItem.children\" [class.collapsed]=\"!(menuItem.children && menuItem.expanded)\" [class.expanded]=\"menuItem.expanded\" class=\"menu-items\"> <li nbMenuItem *ngFor=\"let item of menuItem.children\" [menuItem]=\"item\" [class.menu-group]=\"item.group\" (hoverItem)=\"onHoverItem($event)\" (toggleSubMenu)=\"onToggleSubMenu($event)\" (selectItem)=\"onSelectItem($event)\" (itemClick)=\"onItemClick($event)\" class=\"menu-item\"></li> </ul> ",
    }),
    __metadata$5("design:paramtypes", [_angular_router.Router])
], NbMenuItemComponent);
/**
 * Vertical menu component.
 *
 * Accepts a list of menu items and renders them accordingly. Supports multi-level menus.
 *
 * @styles
 *
 * menu-font-family:
 * menu-font-size:
 * menu-font-weight:
 * menu-fg:
 * menu-bg:
 * menu-active-fg:
 * menu-active-bg:
 * menu-active-font-weight:
 * menu-submenu-bg:
 * menu-submenu-fg:
 * menu-submenu-active-fg:
 * menu-submenu-active-bg:
 * menu-submenu-active-border-color:
 * menu-submenu-active-shadow:
 * menu-submenu-hover-fg:
 * menu-submenu-hover-bg:
 * menu-submenu-item-border-width:
 * menu-submenu-item-border-radius:
 * menu-submenu-item-padding:
 * menu-submenu-item-container-padding:
 * menu-submenu-padding:
 * menu-group-font-weight:
 * menu-group-font-size:
 * menu-group-fg:
 * menu-group-padding
 * menu-item-padding:
 * menu-item-separator:
 * menu-icon-font-size:
 * menu-icon-margin:
 * menu-icon-color:
 * menu-icon-active-color:
 */
var NbMenuComponent = (function () {
    function NbMenuComponent(menuInternalService, router) {
        this.menuInternalService = menuInternalService;
        this.router = router;
        this.alive = true;
        this.autoCollapseValue = false;
    }
    Object.defineProperty(NbMenuComponent.prototype, "inverse", {
        /**
         * Makes colors inverse based on current theme
         * @type boolean
         */
        set: function (val) {
            this.inverseValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbMenuComponent.prototype, "autoCollapse", {
        /**
         * Collapse all opened submenus on the toggle event
         * Default value is "false"
         * @type boolean
         */
        set: function (val) {
            this.autoCollapseValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuInternalService
            .onAddItem()
            .takeWhile(function () { return _this.alive; })
            .subscribe(function (data) {
            if (_this.compareTag(data.tag)) {
                (_a = _this.items).push.apply(_a, data.items);
                _this.menuInternalService.prepareItems(_this.items);
            }
            var _a;
        });
        this.menuInternalService.onNavigateHome()
            .takeWhile(function () { return _this.alive; })
            .subscribe(function (data) {
            if (_this.compareTag(data.tag)) {
                _this.navigateHome();
            }
        });
        this.menuInternalService
            .onGetSelectedItem()
            .filter(function (data) { return !data.tag || data.tag === _this.tag; })
            .takeWhile(function () { return _this.alive; })
            .subscribe(function (data) {
            data.listener.next({ tag: _this.tag, item: _this.getSelectedItem(_this.items) });
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router.NavigationEnd) {
                _this.menuInternalService.prepareItems(_this.items);
            }
        });
        (_a = this.items).push.apply(_a, this.menuInternalService.getItems());
        this.menuInternalService.prepareItems(this.items);
        var _a;
    };
    NbMenuComponent.prototype.onHoverItem = function (item) {
        this.menuInternalService.itemHover(item, this.tag);
    };
    NbMenuComponent.prototype.onToggleSubMenu = function (item) {
        if (this.autoCollapseValue) {
            this.menuInternalService.collapseAll(this.items, item);
        }
        item.expanded = !item.expanded;
        this.menuInternalService.submenuToggle(item, this.tag);
    };
    // TODO: is not fired on page reload
    NbMenuComponent.prototype.onSelectItem = function (item) {
        this.menuInternalService.resetItems(this.items);
        item.selected = true;
        this.menuInternalService.itemSelect(item, this.tag);
    };
    NbMenuComponent.prototype.onItemClick = function (item) {
        this.menuInternalService.itemClick(item, this.tag);
    };
    NbMenuComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbMenuComponent.prototype.navigateHome = function () {
        var homeItem = this.getHomeItem(this.items);
        if (homeItem) {
            this.menuInternalService.resetItems(this.items);
            homeItem.selected = true;
            if (homeItem.link) {
                this.router.navigate([homeItem.link]);
            }
            if (homeItem.url) {
                window.location.href = homeItem.url;
            }
        }
    };
    NbMenuComponent.prototype.getHomeItem = function (items) {
        var _this = this;
        var home = null;
        items.forEach(function (item) {
            if (item.home) {
                home = item;
            }
            if (item.home && item.children && item.children.length > 0) {
                home = _this.getHomeItem(item.children);
            }
        });
        return home;
    };
    NbMenuComponent.prototype.compareTag = function (tag) {
        return !tag || tag === this.tag;
    };
    NbMenuComponent.prototype.getSelectedItem = function (items) {
        var _this = this;
        var selected = null;
        items.forEach(function (item) {
            if (item.selected) {
                selected = item;
            }
            if (item.selected && item.children && item.children.length > 0) {
                selected = _this.getSelectedItem(item.children);
            }
        });
        return selected;
    };
    return NbMenuComponent;
}());
__decorate$11([
    _angular_core.HostBinding('class.inverse'),
    __metadata$5("design:type", Boolean)
], NbMenuComponent.prototype, "inverseValue", void 0);
__decorate$11([
    _angular_core.Input(),
    __metadata$5("design:type", String)
], NbMenuComponent.prototype, "tag", void 0);
__decorate$11([
    _angular_core.Input(),
    __metadata$5("design:type", Array)
], NbMenuComponent.prototype, "items", void 0);
__decorate$11([
    _angular_core.Input(),
    __metadata$5("design:type", Boolean),
    __metadata$5("design:paramtypes", [Boolean])
], NbMenuComponent.prototype, "inverse", null);
__decorate$11([
    _angular_core.Input(),
    __metadata$5("design:type", Boolean),
    __metadata$5("design:paramtypes", [Boolean])
], NbMenuComponent.prototype, "autoCollapse", null);
NbMenuComponent = __decorate$11([
    _angular_core.Component({
        selector: 'nb-menu',
        styles: [":host /deep/ {display:block}:host /deep/ .menu-items,:host /deep/ .menu-item>.menu-items{list-style-type:none;overflow:hidden}:host /deep/ .menu-items.collapsed,:host /deep/ .menu-item>.menu-items.collapsed{max-height:0;transition:max-height 0.15s ease-out}:host /deep/ .menu-items.expanded,:host /deep/ .menu-item>.menu-items.expanded{max-height:300px;transition:max-height 0.3s ease-in}:host /deep/ .menu-item a{display:flex;color:inherit;text-decoration:none;align-items:center}:host /deep/ .menu-item a .menu-title{flex:1} "],
        template: "\n    <ul class=\"menu-items\">\n      <li nbMenuItem *ngFor=\"let item of items\"\n                      [menuItem]=\"item\"\n                      [class.menu-group]=\"item.group\"\n                      (hoverItem)=\"onHoverItem($event)\"\n                      (toggleSubMenu)=\"onToggleSubMenu($event)\"\n                      (selectItem)=\"onSelectItem($event)\"\n                      (itemClick)=\"onItemClick($event)\"\n                      class=\"menu-item\"></li>\n    </ul>\n  ",
    }),
    __metadata$5("design:paramtypes", [NbMenuInternalService, _angular_router.Router])
], NbMenuComponent);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$10 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var nbMenuComponents = [NbMenuComponent, NbMenuItemComponent];
var NB_MENU_PROVIDERS = [exports.NbMenuService, NbMenuInternalService];
exports.NbMenuModule = NbMenuModule_1 = (function () {
    function NbMenuModule() {
    }
    NbMenuModule.forRoot = function () {
        return {
            ngModule: NbMenuModule_1,
            providers: NB_MENU_PROVIDERS.slice(),
        };
    };
    return NbMenuModule;
}());
exports.NbMenuModule = NbMenuModule_1 = __decorate$10([
    _angular_core.NgModule({
        imports: [NbSharedModule],
        declarations: nbMenuComponents.slice(),
        exports: nbMenuComponents.slice(),
    })
], exports.NbMenuModule);
var NbMenuModule_1;

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$14 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Route tabset components.
 * Renders tabs inside of a router-outlet.
 *
 * @example basic usage example
 *
 * ```
 *  tabs = [
 *  {
 *    title: 'Route tab #1',
 *    route: '/pages/description',
 *  },
 *  {
 *    title: 'Route tab #2',
 *    route: '/pages/images',
 *    }
 *  ];
 *
 *  <nb-route-tabset [tabs]="tabs"></nb-route-tabset>
 * ```
 *
 * @styles
 *
 * route-tabs-font-family:
 * route-tabs-font-size:
 * route-tabs-active-bg:
 * route-tabs-active-font-weight:
 * route-tabs-padding:
 * route-tabs-header-bg:
 * route-tabs-separator:
 * route-tabs-fg:
 * route-tabs-fg-heading:
 * route-tabs-bg:
 * route-tabs-selected:
 */
var NbRouteTabsetComponent = (function () {
    function NbRouteTabsetComponent(router) {
        this.router = router;
        this.fullWidthValue = false;
        /**
         * Emits when tab is selected
         * @type {EventEmitter<any>}
         */
        this.changeTab = new _angular_core.EventEmitter();
    }
    Object.defineProperty(NbRouteTabsetComponent.prototype, "fullWidth", {
        /**
         * Take full width of a parent
         * @param {boolean} val
         */
        set: function (val) {
            this.fullWidthValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbRouteTabsetComponent.prototype.selectTab = function (tab) {
        this.changeTab.emit(tab);
        this.router.navigate([tab.route]);
    };
    return NbRouteTabsetComponent;
}());
__decorate$14([
    _angular_core.HostBinding('class.full-width'),
    __metadata$7("design:type", Boolean)
], NbRouteTabsetComponent.prototype, "fullWidthValue", void 0);
__decorate$14([
    _angular_core.Input(),
    __metadata$7("design:type", Array)
], NbRouteTabsetComponent.prototype, "tabs", void 0);
__decorate$14([
    _angular_core.Input(),
    __metadata$7("design:type", Boolean),
    __metadata$7("design:paramtypes", [Boolean])
], NbRouteTabsetComponent.prototype, "fullWidth", null);
__decorate$14([
    _angular_core.Output(),
    __metadata$7("design:type", Object)
], NbRouteTabsetComponent.prototype, "changeTab", void 0);
NbRouteTabsetComponent = __decorate$14([
    _angular_core.Component({
        selector: 'nb-route-tabset',
        styles: ["ul{display:flex;flex-direction:row;list-style-type:none;margin:0}ul li{cursor:pointer;margin-bottom:-1px;text-align:center}ul li.active a::before{display:block}ul li a{position:relative;text-decoration:none;display:inline-block}ul li a::before{display:none;position:absolute;content:'';width:100%;height:6px;border-radius:3px;bottom:-2px;left:0}:host.full-width ul{justify-content:space-around} "],
        template: "\n    <ul>\n      <li *ngFor=\"let tab of tabs\"\n          (click)=\"$event.preventDefault(); selectTab(tab)\"\n          routerLink=\"{{tab.route}}\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{ exact: true }\">\n        <a href>{{tab.title}}</a>\n      </li>\n    </ul>\n    <router-outlet></router-outlet>\n  ",
    }),
    __metadata$7("design:paramtypes", [_angular_router.Router])
], NbRouteTabsetComponent);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$13 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.NbRouteTabsetModule = (function () {
    function NbRouteTabsetModule() {
    }
    return NbRouteTabsetModule;
}());
exports.NbRouteTabsetModule = __decorate$13([
    _angular_core.NgModule({
        imports: [
            NbSharedModule,
        ],
        declarations: [
            NbRouteTabsetComponent,
        ],
        exports: [
            NbRouteTabsetComponent,
        ],
    })
], exports.NbRouteTabsetModule);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$17 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Sidebar service.
 *
 * Root module service to control the sidebar from any part of the app.
 */
exports.NbSidebarService = (function () {
    function NbSidebarService() {
        this.toggle$ = new rxjs_Subject.Subject();
        this.expand$ = new rxjs_Subject.Subject();
        this.collapse$ = new rxjs_Subject.Subject();
    }
    /**
     * Subscribe to toggle events
     *
     * @returns Observable<{ compact: boolean, tag: string }>
     */
    NbSidebarService.prototype.onToggle = function () {
        return this.toggle$.publish().refCount();
    };
    /**
     * Subscribe to expand events
     * @returns Observable<{ tag: string }>
     */
    NbSidebarService.prototype.onExpand = function () {
        return this.expand$.publish().refCount();
    };
    /**
     * Subscribe to collapse evens
     * @returns Observable<{ tag: string }>
     */
    NbSidebarService.prototype.onCollapse = function () {
        return this.collapse$.publish().refCount();
    };
    /**
     * Toggle a sidebar
     * @param boolean compact
     * @param tag tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    NbSidebarService.prototype.toggle = function (compact, tag) {
        if (compact === void 0) { compact = false; }
        this.toggle$.next({ compact: compact, tag: tag });
    };
    /**
     * Expands a sidebar
     * @param tag tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    NbSidebarService.prototype.expand = function (tag) {
        this.expand$.next({ tag: tag });
    };
    /**
     * Collapses a sidebar
     * @param {tag} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    NbSidebarService.prototype.collapse = function (tag) {
        this.collapse$.next({ tag: tag });
    };
    return NbSidebarService;
}());
exports.NbSidebarService = __decorate$17([
    _angular_core.Injectable()
], exports.NbSidebarService);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$16 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Sidebar header container.
 *
 * Placeholder which contains a sidebar header content,
 * placed at the very top of the sidebar outside of the scroll area.
 */
var NbSidebarHeaderComponent = (function () {
    function NbSidebarHeaderComponent() {
    }
    return NbSidebarHeaderComponent;
}());
NbSidebarHeaderComponent = __decorate$16([
    _angular_core.Component({
        selector: 'nb-sidebar-header',
        template: "\n    <ng-content></ng-content>\n  ",
    })
], NbSidebarHeaderComponent);
/**
 * Sidebar footer container.
 *
 * Placeholder which contains a sidebar footer content,
 * placed at the very bottom of the sidebar outside of the scroll area.
 */
var NbSidebarFooterComponent = (function () {
    function NbSidebarFooterComponent() {
    }
    return NbSidebarFooterComponent;
}());
NbSidebarFooterComponent = __decorate$16([
    _angular_core.Component({
        selector: 'nb-sidebar-footer',
        template: "\n    <ng-content></ng-content>\n  ",
    })
], NbSidebarFooterComponent);
/**
 * Layout sidebar component.
 *
 * Sidebar can be place on the left or the right side of the layout, can be fixed (shown above the content)
 * or can push the layout when opened.
 *
 * There are three states - `expanded`, `collapsed`, `compacted`.
 * By default sidebar content is fixed and saves its position while the page is being scrolled.
 *
 * Sidebar also supports a `responsive` behavior, listening to window size change and changing its size respectably.
 *
 * @example Minimal sidebar example
 * ```
 * <nb-sidebar>
 *   Sidebar content.
 * </nb-sidebar>
 * ```
 *
 * @example Example of fixed sidebar located on the left side, initially collapsed.
 *
 * ```
 * <nb-sidebar left fixed state="collapsed">
 *  <nb-sidebar-header>Header</nb-sidebar-header>
 *  <nb-sidebar-content>
 *    Menu or another component here
 *  </nb-sidebar-content>
 *  <nb-sidebar-footer>
 *    Footer components here
 *  </nb-sidebar-footer>
 * </nb-sidebar>
 * ```
 *
 * @styles
 *
 * sidebar-font-size: Sidebar content font size
 * sidebar-line-height: Sidebar content line height
 * sidebar-fg: Foreground color
 * sidebar-bg: Background color
 * sidebar-height: Content height
 * sidebar-width: Expanded width
 * sidebar-width-compact: Compacted width
 * sidebar-padding: Sidebar content padding
 * sidebar-header-height: Sidebar header height
 * sidebar-footer-height: Sidebar footer height
 * sidebar-shadow: Sidebar container shadow
 *
 */
var NbSidebarComponent = NbSidebarComponent_1 = (function () {
    function NbSidebarComponent(sidebarService, themeService, element) {
        this.sidebarService = sidebarService;
        this.themeService = themeService;
        this.element = element;
        this.responsiveValue = false;
        this.fixedValue = false;
        this.rightValue = false;
        this.leftValue = true;
        this.responsiveState = NbSidebarComponent_1.RESPONSIVE_STATE_PC;
    }
    Object.defineProperty(NbSidebarComponent.prototype, "expanded", {
        // TODO: rename stateValue to state (take a look to the card component)
        get: function () {
            return this.stateValue === NbSidebarComponent_1.STATE_EXPANDED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "collapsed", {
        get: function () {
            return this.stateValue === NbSidebarComponent_1.STATE_COLLAPSED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "compacted", {
        get: function () {
            return this.stateValue === NbSidebarComponent_1.STATE_COMPACTED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "right", {
        /**
         * Places sidebar on the left side
         * @type {boolean}
         */
        set: function (val) {
            this.rightValue = convertToBoolProperty(val);
            this.leftValue = !this.rightValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "left", {
        /**
         * Places sidebar on the right side
         * @type {boolean}
         */
        set: function (val) {
            this.leftValue = convertToBoolProperty(val);
            this.rightValue = !this.leftValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "fixed", {
        /**
         * Makes sidebar fixed (shown above the layout content)
         * @type {boolean}
         */
        set: function (val) {
            this.fixedValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "state", {
        /**
         * Initial sidebar state, `expanded`|`collapsed`|`compacted`
         * @type {string}
         */
        set: function (val) {
            this.stateValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "responsive", {
        /**
         * Makes sidebar listen to media query events and change its behaviour
         * @type {boolean}
         */
        set: function (val) {
            this.responsiveValue = convertToBoolProperty(val);
            this.toggleResponsive(this.responsiveValue);
        },
        enumerable: true,
        configurable: true
    });
    NbSidebarComponent.prototype.toggleResponsive = function (enabled) {
        if (enabled) {
            this.mediaQuerySubscription = this.onMediaQueryChanges();
        }
        else if (this.mediaQuerySubscription) {
            this.mediaQuerySubscription.unsubscribe();
        }
    };
    NbSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toggleSubscription = this.sidebarService.onToggle()
            .subscribe(function (data) {
            if (!_this.tag || _this.tag === data.tag) {
                _this.toggle(data.compact);
            }
        });
        this.expandSubscription = this.sidebarService.onExpand()
            .subscribe(function (data) {
            if (!_this.tag || _this.tag === data.tag) {
                _this.expand();
            }
        });
        this.collapseSubscription = this.sidebarService.onCollapse()
            .subscribe(function (data) {
            if (!_this.tag || _this.tag === data.tag) {
                _this.collapse();
            }
        });
    };
    NbSidebarComponent.prototype.ngOnDestroy = function () {
        this.toggleSubscription.unsubscribe();
        this.expandSubscription.unsubscribe();
        this.collapseSubscription.unsubscribe();
        if (this.mediaQuerySubscription) {
            this.mediaQuerySubscription.unsubscribe();
        }
    };
    NbSidebarComponent.prototype.onClick = function (event) {
        var menu = this.element.nativeElement.querySelector('nb-menu');
        if (menu && menu.contains(event.target)) {
            this.expand();
        }
    };
    /**
     * Collapses the sidebar
     */
    NbSidebarComponent.prototype.collapse = function () {
        this.state = NbSidebarComponent_1.STATE_COLLAPSED;
    };
    /**
     * Expands the sidebar
     */
    NbSidebarComponent.prototype.expand = function () {
        this.state = NbSidebarComponent_1.STATE_EXPANDED;
    };
    /**
     * Compacts the sidebar (minimizes)
     */
    NbSidebarComponent.prototype.compact = function () {
        this.state = NbSidebarComponent_1.STATE_COMPACTED;
    };
    /**
     * Toggles sidebar state (expanded|collapsed|compacted)
     * @param {boolean} compact If true, then sidebar state will be changed between expanded & compacted,
     * otherwise - between expanded & collapsed. False by default.
     *
     * @example Toggle sidebar state
     *
     * ```
     * this.sidebar.toggle(true);
     * ```
     */
    NbSidebarComponent.prototype.toggle = function (compact) {
        if (compact === void 0) { compact = false; }
        if (this.responsiveEnabled()) {
            if (this.responsiveState === NbSidebarComponent_1.RESPONSIVE_STATE_MOBILE) {
                compact = false;
            }
        }
        var closedStates = [NbSidebarComponent_1.STATE_COMPACTED, NbSidebarComponent_1.STATE_COLLAPSED];
        if (compact) {
            this.state = closedStates.indexOf(this.stateValue) >= 0 ?
                NbSidebarComponent_1.STATE_EXPANDED : NbSidebarComponent_1.STATE_COMPACTED;
        }
        else {
            this.state = closedStates.indexOf(this.stateValue) >= 0 ?
                NbSidebarComponent_1.STATE_EXPANDED : NbSidebarComponent_1.STATE_COLLAPSED;
        }
    };
    NbSidebarComponent.prototype.onMediaQueryChanges = function () {
        var _this = this;
        return this.themeService.onMediaQueryChange()
            .subscribe(function (_a) {
            var prev = _a[0], current = _a[1];
            // TODO: get width by the key and define only max width for the tablets and mobiles
            var tablet = ['xs', 'is', 'sm', 'md', 'lg'];
            var mobile = ['xs', 'is'];
            if (tablet.indexOf(current.name) !== -1) {
                _this.fixed = true;
                _this.compact();
                _this.responsiveState = NbSidebarComponent_1.RESPONSIVE_STATE_TABLET;
            }
            if (mobile.indexOf(current.name) !== -1) {
                _this.collapse();
                _this.responsiveState = NbSidebarComponent_1.RESPONSIVE_STATE_MOBILE;
            }
            if (tablet.indexOf(current.name) === -1 && prev.width < current.width) {
                _this.expand();
                _this.fixed = false;
                _this.responsiveState = NbSidebarComponent_1.RESPONSIVE_STATE_PC;
            }
        });
    };
    NbSidebarComponent.prototype.responsiveEnabled = function () {
        return this.responsiveValue;
    };
    return NbSidebarComponent;
}());
NbSidebarComponent.STATE_EXPANDED = 'expanded';
NbSidebarComponent.STATE_COLLAPSED = 'collapsed';
NbSidebarComponent.STATE_COMPACTED = 'compacted';
NbSidebarComponent.RESPONSIVE_STATE_MOBILE = 'mobile';
NbSidebarComponent.RESPONSIVE_STATE_TABLET = 'tablet';
NbSidebarComponent.RESPONSIVE_STATE_PC = 'pc';
__decorate$16([
    _angular_core.HostBinding('class.fixed'),
    __metadata$8("design:type", Boolean)
], NbSidebarComponent.prototype, "fixedValue", void 0);
__decorate$16([
    _angular_core.HostBinding('class.right'),
    __metadata$8("design:type", Boolean)
], NbSidebarComponent.prototype, "rightValue", void 0);
__decorate$16([
    _angular_core.HostBinding('class.left'),
    __metadata$8("design:type", Boolean)
], NbSidebarComponent.prototype, "leftValue", void 0);
__decorate$16([
    _angular_core.HostBinding('class.expanded'),
    __metadata$8("design:type", Object),
    __metadata$8("design:paramtypes", [])
], NbSidebarComponent.prototype, "expanded", null);
__decorate$16([
    _angular_core.HostBinding('class.collapsed'),
    __metadata$8("design:type", Object),
    __metadata$8("design:paramtypes", [])
], NbSidebarComponent.prototype, "collapsed", null);
__decorate$16([
    _angular_core.HostBinding('class.compacted'),
    __metadata$8("design:type", Object),
    __metadata$8("design:paramtypes", [])
], NbSidebarComponent.prototype, "compacted", null);
__decorate$16([
    _angular_core.Input(),
    __metadata$8("design:type", Boolean),
    __metadata$8("design:paramtypes", [Boolean])
], NbSidebarComponent.prototype, "right", null);
__decorate$16([
    _angular_core.Input(),
    __metadata$8("design:type", Boolean),
    __metadata$8("design:paramtypes", [Boolean])
], NbSidebarComponent.prototype, "left", null);
__decorate$16([
    _angular_core.Input(),
    __metadata$8("design:type", Boolean),
    __metadata$8("design:paramtypes", [Boolean])
], NbSidebarComponent.prototype, "fixed", null);
__decorate$16([
    _angular_core.Input(),
    __metadata$8("design:type", String),
    __metadata$8("design:paramtypes", [String])
], NbSidebarComponent.prototype, "state", null);
__decorate$16([
    _angular_core.Input(),
    __metadata$8("design:type", Boolean),
    __metadata$8("design:paramtypes", [Boolean])
], NbSidebarComponent.prototype, "responsive", null);
__decorate$16([
    _angular_core.Input(),
    __metadata$8("design:type", String)
], NbSidebarComponent.prototype, "tag", void 0);
NbSidebarComponent = NbSidebarComponent_1 = __decorate$16([
    _angular_core.Component({
        selector: 'nb-sidebar',
        styles: [":host{display:flex;flex-direction:column;overflow:hidden;z-index:auto;order:0}:host .scrollable{overflow-y:auto;overflow-x:hidden;flex:1}:host .main-container{position:fixed;transform:translate3d(0, 0, 0);display:flex;flex-direction:column}:host.right{order:4;margin-right:0;margin-left:auto}:host.fixed{position:fixed;height:100%;z-index:999;top:0;bottom:0;left:0}:host.fixed.right{right:0}:host /deep/ nb-sidebar-footer{margin-top:auto;display:block}:host /deep/ nb-sidebar-header{display:block} "],
        template: "\n    <div class=\"main-container\">\n      <ng-content select=\"nb-sidebar-header\"></ng-content>\n      <div class=\"scrollable\" (click)=\"onClick($event)\">\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"nb-sidebar-footer\"></ng-content>\n    </div>\n  ",
    }),
    __metadata$8("design:paramtypes", [exports.NbSidebarService,
        exports.NbThemeService,
        _angular_core.ElementRef])
], NbSidebarComponent);
var NbSidebarComponent_1;

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$15 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NB_SIDEBAR_COMPONENTS = [
    NbSidebarComponent,
    NbSidebarFooterComponent,
    NbSidebarHeaderComponent,
];
var NB_SIDEBAR_PROVIDERS = [
    exports.NbSidebarService,
];
exports.NbSidebarModule = NbSidebarModule_1 = (function () {
    function NbSidebarModule() {
    }
    NbSidebarModule.forRoot = function () {
        return {
            ngModule: NbSidebarModule_1,
            providers: NB_SIDEBAR_PROVIDERS.slice(),
        };
    };
    return NbSidebarModule;
}());
exports.NbSidebarModule = NbSidebarModule_1 = __decorate$15([
    _angular_core.NgModule({
        imports: [
            NbSharedModule,
        ],
        declarations: NB_SIDEBAR_COMPONENTS.slice(),
        exports: NB_SIDEBAR_COMPONENTS.slice(),
    })
], exports.NbSidebarModule);
var NbSidebarModule_1;

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$19 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Specific tab container.
 */
var NbTabComponent = (function () {
    function NbTabComponent() {
        this.activeValue = false;
        // TODO: it makes sense to add 'lazyLoad' input to 'nb-tabset' component and make this functionality configurable
        this.init = false;
    }
    Object.defineProperty(NbTabComponent.prototype, "active", {
        get: function () {
            return this.activeValue;
        },
        set: function (val) {
            this.activeValue = convertToBoolProperty(val);
            if (this.activeValue) {
                this.init = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    return NbTabComponent;
}());
__decorate$19([
    _angular_core.Input(),
    __metadata$9("design:type", String)
], NbTabComponent.prototype, "tabTitle", void 0);
__decorate$19([
    _angular_core.Input(),
    __metadata$9("design:type", String)
], NbTabComponent.prototype, "route", void 0);
__decorate$19([
    _angular_core.HostBinding('class.content-active'),
    __metadata$9("design:type", Boolean)
], NbTabComponent.prototype, "activeValue", void 0);
__decorate$19([
    _angular_core.Input(),
    __metadata$9("design:type", Object),
    __metadata$9("design:paramtypes", [Boolean])
], NbTabComponent.prototype, "active", null);
NbTabComponent = __decorate$19([
    _angular_core.Component({
        selector: 'nb-tab',
        template: "\n    <ng-container *ngIf=\"init\">\n      <ng-content></ng-content>\n    </ng-container>\n  ",
    })
], NbTabComponent);
// TODO: Combine tabset with route-tabset, so that we can:
// - have similar interface
// - easy to migrate from one to another
// - can mix them both (route/content tab)
/**
 *
 * Dynamic tabset component.
 * Renders `<nb-tab></ng-tab> containers inside.
 *
 * @example Basic tabset example
 *
 * ```
 * <nb-tabset>
 *  <nb-tab tabTitle="Simple Tab #1">
 *    Tab content 1
 *  </nb-tab>
 *  <nb-tab tabTitle="Simple Tab #2">
 *    Tab content 2
 *  </nb-tab>
 * </nb-tabset>
 *
 * @styles
 *
 * tabs-font-family:
 * tabs-font-size:
 * tabs-content-font-family:
 * tabs-content-font-size:
 * tabs-active-bg:
 * tabs-active-font-weight:
 * tabs-padding:
 * tabs-content-padding:
 * tabs-header-bg:
 * tabs-separator:
 * tabs-fg:
 * tabs-fg-text:
 * tabs-fg-heading:
 * tabs-bg:
 * tabs-selected:
 *
 ```
 */
var NbTabsetComponent = (function () {
    function NbTabsetComponent(route) {
        this.route = route;
        this.fullWidthValue = false;
        /**
         * Emits when tab is selected
         * @type EventEmitter<any>
         */
        this.changeTab = new _angular_core.EventEmitter();
    }
    Object.defineProperty(NbTabsetComponent.prototype, "fullWidth", {
        /**
         * Take full width of a parent
         * @param {boolean} val
         */
        set: function (val) {
            this.fullWidthValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbTabsetComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            var activeTab = _this.tabs.find(function (tab) { return _this.routeParam ? tab.route === params[_this.routeParam] : tab.active; });
            _this.selectTab(activeTab || _this.tabs.first);
        });
    };
    // TODO: navigate to routeParam
    NbTabsetComponent.prototype.selectTab = function (selectedTab) {
        this.tabs.forEach(function (tab) { return tab.active = tab === selectedTab; });
        this.changeTab.emit(selectedTab);
    };
    return NbTabsetComponent;
}());
__decorate$19([
    _angular_core.ContentChildren(NbTabComponent),
    __metadata$9("design:type", _angular_core.QueryList)
], NbTabsetComponent.prototype, "tabs", void 0);
__decorate$19([
    _angular_core.HostBinding('class.full-width'),
    __metadata$9("design:type", Boolean)
], NbTabsetComponent.prototype, "fullWidthValue", void 0);
__decorate$19([
    _angular_core.Input(),
    __metadata$9("design:type", Boolean),
    __metadata$9("design:paramtypes", [Boolean])
], NbTabsetComponent.prototype, "fullWidth", null);
__decorate$19([
    _angular_core.Input(),
    __metadata$9("design:type", String)
], NbTabsetComponent.prototype, "routeParam", void 0);
__decorate$19([
    _angular_core.Output(),
    __metadata$9("design:type", Object)
], NbTabsetComponent.prototype, "changeTab", void 0);
NbTabsetComponent = __decorate$19([
    _angular_core.Component({
        selector: 'nb-tabset',
        styles: [":host{display:block}:host.full-width ul{justify-content:space-around}:host /deep/ nb-tab{flex:1;-ms-flex:1 1 auto;overflow:auto;display:none}:host /deep/ nb-tab.content-active{display:block}ul{display:flex;flex-direction:row;list-style-type:none;margin:0}ul li{cursor:pointer;margin-bottom:-1px;text-align:center}ul li.active a::before{display:block}ul li a{position:relative;text-decoration:none;display:inline-block}ul li a::before{display:none;position:absolute;content:'';width:100%;height:6px;border-radius:3px;bottom:-2px;left:0} "],
        template: "\n    <ul>\n      <li *ngFor=\"let tab of tabs\"\n          (click)=\"selectTab(tab)\"\n          [class.active]=\"tab.active\">\n        <a href (click)=\"$event.preventDefault()\">{{ tab.tabTitle }}</a>\n      </li>\n    </ul>\n    <ng-content select=\"nb-tab\"></ng-content>\n  ",
    }),
    __metadata$9("design:paramtypes", [_angular_router.ActivatedRoute])
], NbTabsetComponent);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$18 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NB_TABSET_COMPONENTS = [
    NbTabsetComponent,
    NbTabComponent,
];
exports.NbTabsetModule = (function () {
    function NbTabsetModule() {
    }
    return NbTabsetModule;
}());
exports.NbTabsetModule = __decorate$18([
    _angular_core.NgModule({
        imports: [
            NbSharedModule,
        ],
        declarations: NB_TABSET_COMPONENTS.slice(),
        exports: NB_TABSET_COMPONENTS.slice(),
    })
], exports.NbTabsetModule);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$21 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$10 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Represents a component showing a user avatar (picture) with a user name on the right.
 *
 * Can be used as a user profile link or can bring a user context menu.
 *
 * @styles
 *
 * user-font-size:
 * user-line-height:
 * user-bg:
 * user-fg:
 * user-fg-highlight:
 * user-font-family-secondary:
 * user-size-small:
 * user-size-medium:
 * user-size-large:
 * user-size-xlarge:
 * user-menu-fg:
 * user-menu-bg:
 * user-menu-active-fg:
 * user-menu-active-bg:
 * user-menu-border:
 */
var NbUserComponent = NbUserComponent_1 = (function () {
    function NbUserComponent(el) {
        this.el = el;
        /**
         * Specifies a name to be shown on the right of a user picture
         * @type string
         */
        this.name = 'Anonymous';
        /**
         * List of menu items for a user context menu (shown when clicked)
         * @type NbUserMenuItem[]
         */
        this.menu = [];
        /**
         * Outputs when a context menu item is clicked
         * @type EventEmitter<NbUserMenuItem>
         */
        this.menuClick = new _angular_core.EventEmitter();
        this.showNameValue = true;
        this.showTitleValue = true;
        this.showInitialsValue = true;
        this.isMenuShown = false;
    }
    Object.defineProperty(NbUserComponent.prototype, "small", {
        get: function () {
            return this.sizeValue === NbUserComponent_1.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "medium", {
        get: function () {
            return this.sizeValue === NbUserComponent_1.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "large", {
        get: function () {
            return this.sizeValue === NbUserComponent_1.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "xlarge", {
        get: function () {
            return this.sizeValue === NbUserComponent_1.SIZE_XLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "size", {
        /**
         * Size of the component, small|medium|large
         * @type string
         */
        set: function (val) {
            this.sizeValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "showName", {
        /**
         * Whether to show a user name or not
         * @type boolean
         */
        set: function (val) {
            this.showNameValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "showTitle", {
        /**
         * Whether to show a user title or not
         * @type boolean
         */
        set: function (val) {
            this.showTitleValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "showInitials", {
        /**
         * Whether to show a user initials (if no picture specified) or not
         * @type boolean
         */
        set: function (val) {
            this.showInitialsValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "onlyPicture", {
        /**
         * Whether to show only a picture or also show the name and title
         * @type boolean
         */
        set: function (val) {
            this.showNameValue = this.showTitleValue = !convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "inverse", {
        /**
         * Makes colors inverse based on current theme
         * @type boolean
         */
        set: function (val) {
            this.inverseValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbUserComponent.prototype.itemClick = function (event, item) {
        this.menuClick.emit(item);
        return false;
    };
    /**
     * Toggles a context menu
     */
    NbUserComponent.prototype.toggleMenu = function () {
        this.isMenuShown = !this.isMenuShown;
    };
    NbUserComponent.prototype.hideMenu = function (event) {
        if (!this.el.nativeElement.contains(event.target)) {
            this.isMenuShown = false;
        }
    };
    NbUserComponent.prototype.getInitials = function () {
        if (this.name) {
            var names = this.name.split(' ');
            return names.map(function (n) { return n.charAt(0); }).splice(0, 2).join('').toUpperCase();
        }
        return '';
    };
    NbUserComponent.prototype.hasMenu = function () {
        return this.menu && this.menu.length > 0;
    };
    return NbUserComponent;
}());
// TODO: it makes sense use object instead of list of variables (or even enum)
/*
  static readonly SIZE = {
   SMALL: 'small',
   MEDIUM: 'medium',
   LARGE: 'large',
  };
 */
NbUserComponent.SIZE_SMALL = 'small';
NbUserComponent.SIZE_MEDIUM = 'medium';
NbUserComponent.SIZE_LARGE = 'large';
NbUserComponent.SIZE_XLARGE = 'xlarge';
__decorate$21([
    _angular_core.HostBinding('class.inverse'),
    __metadata$10("design:type", Boolean)
], NbUserComponent.prototype, "inverseValue", void 0);
__decorate$21([
    _angular_core.HostBinding('class.small'),
    __metadata$10("design:type", Object),
    __metadata$10("design:paramtypes", [])
], NbUserComponent.prototype, "small", null);
__decorate$21([
    _angular_core.HostBinding('class.medium'),
    __metadata$10("design:type", Object),
    __metadata$10("design:paramtypes", [])
], NbUserComponent.prototype, "medium", null);
__decorate$21([
    _angular_core.HostBinding('class.large'),
    __metadata$10("design:type", Object),
    __metadata$10("design:paramtypes", [])
], NbUserComponent.prototype, "large", null);
__decorate$21([
    _angular_core.HostBinding('class.xlarge'),
    __metadata$10("design:type", Object),
    __metadata$10("design:paramtypes", [])
], NbUserComponent.prototype, "xlarge", null);
__decorate$21([
    _angular_core.Input(),
    __metadata$10("design:type", String)
], NbUserComponent.prototype, "name", void 0);
__decorate$21([
    _angular_core.Input(),
    __metadata$10("design:type", String)
], NbUserComponent.prototype, "title", void 0);
__decorate$21([
    _angular_core.Input(),
    __metadata$10("design:type", String)
], NbUserComponent.prototype, "picture", void 0);
__decorate$21([
    _angular_core.Input(),
    __metadata$10("design:type", String)
], NbUserComponent.prototype, "color", void 0);
__decorate$21([
    _angular_core.Input(),
    __metadata$10("design:type", Array)
], NbUserComponent.prototype, "menu", void 0);
__decorate$21([
    _angular_core.Input(),
    __metadata$10("design:type", String),
    __metadata$10("design:paramtypes", [String])
], NbUserComponent.prototype, "size", null);
__decorate$21([
    _angular_core.Input(),
    __metadata$10("design:type", Boolean),
    __metadata$10("design:paramtypes", [Boolean])
], NbUserComponent.prototype, "showName", null);
__decorate$21([
    _angular_core.Input(),
    __metadata$10("design:type", Boolean),
    __metadata$10("design:paramtypes", [Boolean])
], NbUserComponent.prototype, "showTitle", null);
__decorate$21([
    _angular_core.Input(),
    __metadata$10("design:type", Boolean),
    __metadata$10("design:paramtypes", [Boolean])
], NbUserComponent.prototype, "showInitials", null);
__decorate$21([
    _angular_core.Input(),
    __metadata$10("design:type", Boolean),
    __metadata$10("design:paramtypes", [Boolean])
], NbUserComponent.prototype, "onlyPicture", null);
__decorate$21([
    _angular_core.Input(),
    __metadata$10("design:type", Boolean),
    __metadata$10("design:paramtypes", [Boolean])
], NbUserComponent.prototype, "inverse", null);
__decorate$21([
    _angular_core.Output(),
    __metadata$10("design:type", Object)
], NbUserComponent.prototype, "menuClick", void 0);
__decorate$21([
    _angular_core.HostListener('document:click', ['$event']),
    __metadata$10("design:type", Function),
    __metadata$10("design:paramtypes", [Object]),
    __metadata$10("design:returntype", void 0)
], NbUserComponent.prototype, "hideMenu", null);
NbUserComponent = NbUserComponent_1 = __decorate$21([
    _angular_core.Component({
        selector: 'nb-user',
        styles: [":host{display:flex}.user-container{position:relative;display:flex;align-items:center}.user-container.with-menu{cursor:pointer}.user-picture{border-radius:50%;flex-shrink:0}.user-picture.image{background-size:cover;background-repeat:no-repeat}.user-picture.background{display:flex;align-items:center;justify-content:center}.user-title{font-size:0.75rem}.info-container{margin-left:0.5rem}.user-context-menu{position:absolute;transform:translate(-50%, 0);left:50%;z-index:1000;top:calc(100% + 10px);background-clip:padding-box;border-radius:5px;font-size:0.875rem;line-height:1.5rem}.user-context-menu ul{margin:0;padding:0.5rem 0;list-style:none}.user-context-menu ul li{display:block;white-space:nowrap}.user-context-menu ul li>a{padding:0.375rem 3rem;display:block}.user-context-menu ul li.arrow{position:absolute;transform:translate(-50%, 0);left:50%;top:-22px;width:0;height:0;border:11px solid transparent}.user-context-menu ul li.arrow::after{position:absolute;content:' ';width:0;height:0;top:-9px;left:0;margin-left:-12px;display:block;border:12px solid transparent} "],
        template: "<div class=\"user-container\" (click)=\"toggleMenu()\" [ngClass]=\"{'with-menu' : hasMenu()}\"> <div *ngIf=\"picture\" class=\"user-picture image\" style.background-image=\"url({{picture}})\"></div> <div *ngIf=\"!picture\" class=\"user-picture background\" [style.background-color]=\"color\"> <ng-container *ngIf=\"showInitialsValue\"> {{ getInitials() }} </ng-container> </div> <div class=\"info-container\"> <div *ngIf=\"showNameValue && name\" class=\"user-name\">{{ name }}</div> <div *ngIf=\"showTitleValue && title\" class=\"user-title\">{{ title }}</div> </div> <div *ngIf=\"hasMenu()\" [ngStyle]=\"{display: isMenuShown ? 'block' : 'none'}\" class=\"user-context-menu\"> <ul> <li class=\"arrow\"></li> <li *ngFor=\"let item of menu\"> <span *ngIf=\"item.icon\" class=\"item-icon {{ item.icon  }}\"></span> <a *ngIf=\"item.link && !item.url\" [routerLink]=\"item.link\" [attr.target]=\"item.target\">{{ item.title }}</a> <a *ngIf=\"item.url && !item.link\" [attr.href]=\"item.url\" [attr.target]=\"item.target\">{{ item.title }}</a> <a *ngIf=\"!item.link && !item.url\" href=\"#\" [attr.target]=\"item.target\" (click)=\"itemClick($event, item)\">{{ item.title }}</a> </li> </ul> </div> </div> ",
    }),
    __metadata$10("design:paramtypes", [_angular_core.ElementRef])
], NbUserComponent);
var NbUserComponent_1;

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$20 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NB_USER_COMPONENTS = [
    NbUserComponent,
];
exports.NbUserModule = (function () {
    function NbUserModule() {
    }
    return NbUserModule;
}());
exports.NbUserModule = __decorate$20([
    _angular_core.NgModule({
        imports: [
            NbSharedModule,
        ],
        declarations: NB_USER_COMPONENTS.slice(),
        exports: NB_USER_COMPONENTS.slice(),
    })
], exports.NbUserModule);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$23 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$11 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Action item, display a link with an icon, or any other content provided instead.
 */
var NbActionComponent = (function () {
    function NbActionComponent() {
        this.disabledValue = false;
    }
    Object.defineProperty(NbActionComponent.prototype, "disabled", {
        /**
         * Disables the item (changes item opacity and mouse cursor)
         * @type boolean
         */
        set: function (val) {
            this.disabledValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    return NbActionComponent;
}());
__decorate$23([
    _angular_core.HostBinding('class.disabled'),
    __metadata$11("design:type", Boolean)
], NbActionComponent.prototype, "disabledValue", void 0);
__decorate$23([
    _angular_core.Input(),
    __metadata$11("design:type", String)
], NbActionComponent.prototype, "icon", void 0);
__decorate$23([
    _angular_core.Input(),
    __metadata$11("design:type", Boolean),
    __metadata$11("design:paramtypes", [Boolean])
], NbActionComponent.prototype, "disabled", null);
NbActionComponent = __decorate$23([
    _angular_core.Component({
        selector: 'nb-action',
        template: "\n    <a class=\"icon-container\" href=\"#\" *ngIf=\"icon; else showContent\" (click)=\"$event.preventDefault()\">\n      <i class=\"control-icon {{ icon }}\"></i>\n    </a>\n    <ng-template #showContent>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
    })
], NbActionComponent);
/**
 * Shows a horizontal list of actions, available in multiple sizes
 * Aligns items vertically.
 *
 * @styles
 *
 * actions-font-size:
 * actions-font-family:
 * actions-line-height:
 * actions-fg:
 * actions-bg:
 * actions-separator:
 * actions-padding:
 * actions-size-small:
 * actions-size-medium:
 * actions-size-large:
 */
var NbActionsComponent = NbActionsComponent_1 = (function () {
    function NbActionsComponent() {
        this.fullWidthValue = false;
    }
    Object.defineProperty(NbActionsComponent.prototype, "small", {
        get: function () {
            return this.sizeValue === NbActionsComponent_1.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "medium", {
        get: function () {
            return this.sizeValue === NbActionsComponent_1.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "large", {
        get: function () {
            return this.sizeValue === NbActionsComponent_1.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "size", {
        /**
         * Size of the component, small|medium|large
         * @type string
         */
        set: function (val) {
            this.sizeValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "inverse", {
        /**
         * Makes colors inverse based on current theme
         * @type boolean
         */
        set: function (val) {
            this.inverseValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "fullWidth", {
        /**
         * Component will fill full width of the container
         * @type boolean
         */
        set: function (val) {
            this.fullWidthValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    return NbActionsComponent;
}());
NbActionsComponent.SIZE_SMALL = 'small';
NbActionsComponent.SIZE_MEDIUM = 'medium';
NbActionsComponent.SIZE_LARGE = 'large';
__decorate$23([
    _angular_core.HostBinding('class.inverse'),
    __metadata$11("design:type", Boolean)
], NbActionsComponent.prototype, "inverseValue", void 0);
__decorate$23([
    _angular_core.HostBinding('class.small'),
    __metadata$11("design:type", Object),
    __metadata$11("design:paramtypes", [])
], NbActionsComponent.prototype, "small", null);
__decorate$23([
    _angular_core.HostBinding('class.medium'),
    __metadata$11("design:type", Object),
    __metadata$11("design:paramtypes", [])
], NbActionsComponent.prototype, "medium", null);
__decorate$23([
    _angular_core.HostBinding('class.large'),
    __metadata$11("design:type", Object),
    __metadata$11("design:paramtypes", [])
], NbActionsComponent.prototype, "large", null);
__decorate$23([
    _angular_core.HostBinding('class.full-width'),
    __metadata$11("design:type", Boolean)
], NbActionsComponent.prototype, "fullWidthValue", void 0);
__decorate$23([
    _angular_core.Input(),
    __metadata$11("design:type", String),
    __metadata$11("design:paramtypes", [String])
], NbActionsComponent.prototype, "size", null);
__decorate$23([
    _angular_core.Input(),
    __metadata$11("design:type", Boolean),
    __metadata$11("design:paramtypes", [Boolean])
], NbActionsComponent.prototype, "inverse", null);
__decorate$23([
    _angular_core.Input(),
    __metadata$11("design:type", Boolean),
    __metadata$11("design:paramtypes", [Boolean])
], NbActionsComponent.prototype, "fullWidth", null);
NbActionsComponent = NbActionsComponent_1 = __decorate$23([
    _angular_core.Component({
        selector: 'nb-actions',
        styles: [":host{display:flex;align-items:center}:host /deep/ nb-action{display:flex;flex-wrap:wrap;align-items:center}:host /deep/ nb-action:first-child{border-left:none !important}:host /deep/ nb-action i.control-icon:hover{cursor:pointer}:host /deep/ nb-action.disabled{cursor:not-allowed}:host /deep/ nb-action.disabled>*{opacity:0.5}:host /deep/ nb-action.disabled a,:host /deep/ nb-action.disabled i{cursor:not-allowed !important} "],
        template: "\n    <ng-content select=\"nb-action\"></ng-content>\n  ",
    })
], NbActionsComponent);
var NbActionsComponent_1;

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$22 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NB_ACTIONS_COMPONENTS = [
    NbActionComponent,
    NbActionsComponent,
];
exports.NbActionsModule = (function () {
    function NbActionsModule() {
    }
    return NbActionsModule;
}());
exports.NbActionsModule = __decorate$22([
    _angular_core.NgModule({
        imports: [
            NbSharedModule,
        ],
        declarations: NB_ACTIONS_COMPONENTS.slice(),
        exports: NB_ACTIONS_COMPONENTS.slice(),
    })
], exports.NbActionsModule);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$26 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Search component service, connects you code to a page-level search component.
 */
exports.NbSearchService = (function () {
    function NbSearchService() {
        this.searchSubmittings$ = new rxjs_Subject.Subject();
        this.searchActivations$ = new rxjs_Subject.Subject();
        this.searchDeactivations$ = new rxjs_Subject.Subject();
    }
    /***
     * Activate (open) search component
     * @param {string} searchType
     * @param {string} tag
     */
    NbSearchService.prototype.activateSearch = function (searchType, tag) {
        this.searchActivations$.next({ searchType: searchType, tag: tag });
    };
    /**
     * Deactibate (close) search component
     * @param {string} searchType
     * @param {string} tag
     */
    NbSearchService.prototype.deactivateSearch = function (searchType, tag) {
        this.searchDeactivations$.next({ searchType: searchType, tag: tag });
    };
    /**
     * Trigger search submit
     * @param {string} term
     * @param {string} tag
     */
    NbSearchService.prototype.submitSearch = function (term, tag) {
        this.searchSubmittings$.next({ term: term, tag: tag });
    };
    /**
     * Subscribe to 'activate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    NbSearchService.prototype.onSearchActivate = function () {
        return this.searchActivations$.share();
    };
    /**
     * Subscribe to 'deactivate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    NbSearchService.prototype.onSearchDeactivate = function () {
        return this.searchDeactivations$.share();
    };
    /**
     * Subscribe to 'submit' event (when submit button clicked)
     * @returns Observable<{term: string; tag?: string}>
     */
    NbSearchService.prototype.onSearchSubmit = function () {
        return this.searchSubmittings$.share();
    };
    return NbSearchService;
}());
exports.NbSearchService = __decorate$26([
    _angular_core.Injectable()
], exports.NbSearchService);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$25 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$12 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * search-field-component is used under the hood by nb-search component
 * can't be used itself
 */
var NbSearchFieldComponent = NbSearchFieldComponent_1 = (function () {
    function NbSearchFieldComponent() {
        this.searchClose = new _angular_core.EventEmitter();
        this.search = new _angular_core.EventEmitter();
        this.tabOut = new _angular_core.EventEmitter();
        this.showSearch = false;
    }
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalZoomin", {
        get: function () {
            return this.searchType === NbSearchFieldComponent_1.TYPE_MODAL_ZOOMIN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "rotateLayout", {
        get: function () {
            return this.searchType === NbSearchFieldComponent_1.TYPE_ROTATE_LAYOUT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalMove", {
        get: function () {
            return this.searchType === NbSearchFieldComponent_1.TYPE_MODAL_MOVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "curtain", {
        get: function () {
            return this.searchType === NbSearchFieldComponent_1.TYPE_CURTAIN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "columnCurtain", {
        get: function () {
            return this.searchType === NbSearchFieldComponent_1.TYPE_COLUMN_CURTAIN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalDrop", {
        get: function () {
            return this.searchType === NbSearchFieldComponent_1.TYPE_MODAL_DROP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalHalf", {
        get: function () {
            return this.searchType === NbSearchFieldComponent_1.TYPE_MODAL_HALF;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "type", {
        set: function (val) {
            this.searchType = val;
        },
        enumerable: true,
        configurable: true
    });
    NbSearchFieldComponent.prototype.closeSearch = function () {
        this.searchClose.emit(true);
    };
    NbSearchFieldComponent.prototype.submitSearch = function (term) {
        if (term) {
            this.search.emit(term);
        }
    };
    return NbSearchFieldComponent;
}());
NbSearchFieldComponent.TYPE_MODAL_ZOOMIN = 'modal-zoomin';
NbSearchFieldComponent.TYPE_ROTATE_LAYOUT = 'rotate-layout';
NbSearchFieldComponent.TYPE_MODAL_MOVE = 'modal-move';
NbSearchFieldComponent.TYPE_CURTAIN = 'curtain';
NbSearchFieldComponent.TYPE_COLUMN_CURTAIN = 'column-curtain';
NbSearchFieldComponent.TYPE_MODAL_DROP = 'modal-drop';
NbSearchFieldComponent.TYPE_MODAL_HALF = 'modal-half';
__decorate$25([
    _angular_core.Input(),
    __metadata$12("design:type", String)
], NbSearchFieldComponent.prototype, "searchType", void 0);
__decorate$25([
    _angular_core.Input(),
    __metadata$12("design:type", String)
], NbSearchFieldComponent.prototype, "placeholder", void 0);
__decorate$25([
    _angular_core.Output(),
    __metadata$12("design:type", Object)
], NbSearchFieldComponent.prototype, "searchClose", void 0);
__decorate$25([
    _angular_core.Output(),
    __metadata$12("design:type", Object)
], NbSearchFieldComponent.prototype, "search", void 0);
__decorate$25([
    _angular_core.Output(),
    __metadata$12("design:type", Object)
], NbSearchFieldComponent.prototype, "tabOut", void 0);
__decorate$25([
    _angular_core.ViewChild('searchInput'),
    __metadata$12("design:type", _angular_core.ElementRef)
], NbSearchFieldComponent.prototype, "inputElement", void 0);
__decorate$25([
    _angular_core.Input(), _angular_core.HostBinding('class.show'),
    __metadata$12("design:type", Boolean)
], NbSearchFieldComponent.prototype, "showSearch", void 0);
__decorate$25([
    _angular_core.HostBinding('class.modal-zoomin'),
    __metadata$12("design:type", Object),
    __metadata$12("design:paramtypes", [])
], NbSearchFieldComponent.prototype, "modalZoomin", null);
__decorate$25([
    _angular_core.HostBinding('class.rotate-layout'),
    __metadata$12("design:type", Object),
    __metadata$12("design:paramtypes", [])
], NbSearchFieldComponent.prototype, "rotateLayout", null);
__decorate$25([
    _angular_core.HostBinding('class.modal-move'),
    __metadata$12("design:type", Object),
    __metadata$12("design:paramtypes", [])
], NbSearchFieldComponent.prototype, "modalMove", null);
__decorate$25([
    _angular_core.HostBinding('class.curtain'),
    __metadata$12("design:type", Object),
    __metadata$12("design:paramtypes", [])
], NbSearchFieldComponent.prototype, "curtain", null);
__decorate$25([
    _angular_core.HostBinding('class.column-curtain'),
    __metadata$12("design:type", Object),
    __metadata$12("design:paramtypes", [])
], NbSearchFieldComponent.prototype, "columnCurtain", null);
__decorate$25([
    _angular_core.HostBinding('class.modal-drop'),
    __metadata$12("design:type", Object),
    __metadata$12("design:paramtypes", [])
], NbSearchFieldComponent.prototype, "modalDrop", null);
__decorate$25([
    _angular_core.HostBinding('class.modal-half'),
    __metadata$12("design:type", Object),
    __metadata$12("design:paramtypes", [])
], NbSearchFieldComponent.prototype, "modalHalf", null);
__decorate$25([
    _angular_core.Input(),
    __metadata$12("design:type", Object),
    __metadata$12("design:paramtypes", [Object])
], NbSearchFieldComponent.prototype, "type", null);
NbSearchFieldComponent = NbSearchFieldComponent_1 = __decorate$25([
    _angular_core.Component({
        selector: 'nb-search-field',
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        styles: [":host button{margin:0;padding:0;cursor:pointer;border:none;background:none}:host button:focus{box-shadow:none;outline:none}:host input{border-top:0;border-right:0;border-left:0;background:transparent;border-radius:0;line-height:1;display:inline-block;box-sizing:border-box;padding:0.05rem 0;-webkit-appearance:none}:host input:focus{outline:none}:host input::placeholder{opacity:0.3}:host span{font-size:90%;font-weight:bold;display:block;width:75%;margin:0 auto;padding:0.85rem 0;text-align:right}:host.modal-zoomin{display:block}:host.modal-zoomin .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:fixed;z-index:1050;top:0;left:0;width:100%;height:100vh;pointer-events:none;opacity:0;transition:opacity 0.5s}:host.modal-zoomin .search::before,:host.modal-zoomin .search::after{content:'';position:absolute;width:calc(100% + 15px);height:calc(100% + 15px);pointer-events:none}:host.modal-zoomin .search::before{top:0;left:0;border-right-width:0;border-bottom-width:0;transform:translate3d(-15px, -15px, 0)}:host.modal-zoomin .search::after{right:0;bottom:0;border-top-width:0;border-left-width:0;transform:translate3d(15px, 15px, 0)}:host.modal-zoomin .search button{position:absolute;top:3rem;right:3rem;font-size:2.5rem}:host.modal-zoomin .search input{font-size:10vw;width:75%}:host.modal-zoomin .search button{opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.modal-zoomin .search form{opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.modal-zoomin.show .search{pointer-events:auto;opacity:1}:host.modal-zoomin.show .search::before,:host.modal-zoomin.show .search::after{transform:translate3d(0, 0, 0);transition:transform 0.5s}:host.modal-zoomin.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.modal-zoomin.show .search form{opacity:1;transform:scale3d(1, 1, 1)}@media screen and (max-width: 40rem){:host.modal-zoomin form{margin:5rem 0 1rem}:host.modal-zoomin span{text-align:left}} ",
"/deep/ nb-layout.rotate-layout{position:fixed;overflow:hidden;width:100%}/deep/ nb-layout.rotate-layout.with-search .scrollable-container{transition:transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);transform-origin:50vw 50vh;transform:perspective(1000px) translate3d(0, 50vh, 0) rotate3d(1, 0, 0, 30deg);pointer-events:none}:host.rotate-layout{position:absolute;display:block;width:100%;height:100vh;pointer-events:none;opacity:0;transition-property:opacity;transition-delay:0.4s}:host.rotate-layout .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;z-index:1050;position:fixed;top:0;left:0;width:100%;height:50vh;pointer-events:none;opacity:0;transition:opacity 0.5s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.rotate-layout .search button{position:absolute;top:3rem;right:3rem;font-size:2.5rem;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.rotate-layout .search form{margin:5rem 0;opacity:0;transform:scale3d(0.7, 0.7, 1);transition:opacity 0.5s, transform 0.5s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.rotate-layout .search input{font-size:7vw;width:75%}:host.rotate-layout.show{opacity:1;transition-delay:0s}:host.rotate-layout.show .search{pointer-events:auto;opacity:1}:host.rotate-layout.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.rotate-layout.show .search form{opacity:1;transform:scale3d(1, 1, 1)} ",
"/deep/ nb-layout.modal-move .layout{transition:transform 0.5s}/deep/ nb-layout.modal-move.with-search .layout{transform:scale3d(0.8, 0.8, 1);pointer-events:none}:host.modal-move .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:fixed;z-index:1050;top:0;left:0;width:100%;height:100vh;pointer-events:none;opacity:0;transition:opacity 0.5s}:host.modal-move .search button{position:absolute;top:3rem;right:3rem;font-size:2.5rem;opacity:0;transition:opacity 0.5s}:host.modal-move .search form{margin:5rem 0;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.modal-move .search input{font-size:10vw;width:75%;transform:scale3d(0, 1, 1);transform-origin:0 50%;transition:transform 0.3s}:host.modal-move.show .search{pointer-events:auto;opacity:1}:host.modal-move.show .search button{opacity:1}:host.modal-move.show .search form{opacity:1;transform:scale3d(1, 1, 1)}:host.modal-move.show .search input{transform:scale3d(1, 1, 1);transition-duration:0.5s}@media screen and (max-width: 40rem){:host.modal-move span{text-align:left}} ",
":host.curtain .search{position:fixed;z-index:1050;top:0;left:100%;overflow:hidden;height:100vh;width:100%;padding:3rem;pointer-events:none;transition:transform 0.3s;transition-delay:0.4s;transition-timing-function:ease-out}:host.curtain .search::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;transition:transform 0.3s;transition-timing-function:ease-out}:host.curtain .search button{font-size:2.5rem;position:absolute;top:3rem;right:3rem;transition:opacity 0.1s;transition-delay:0.3s}:host.curtain .search form{width:50%;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.curtain .search input{width:100%;font-size:6vw}:host.curtain.show .search{width:100%;pointer-events:auto;transform:translate3d(-100%, 0, 0);transition-delay:0s}:host.curtain.show .search::after{transform:translate3d(100%, 0, 0);transition-delay:0.4s}:host.curtain.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.curtain.show .search form{opacity:1;transform:scale3d(1, 1, 1)}@media screen and (max-width: 40em){:host.curtain span{width:90%}:host.curtain input{font-size:2em;width:90%}} ",
"/deep/ nb-layout.column-curtain.with-search .layout{pointer-events:none}:host.column-curtain{display:block;position:fixed;z-index:1050;top:0;left:50%;overflow:hidden;width:50%;height:100vh;pointer-events:none}:host.column-curtain::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;transform:scale3d(0, 1, 1);transform-origin:0 50%;transition:transform 0.3s;transition-timing-function:cubic-bezier(0.86, 0, 0.07, 1)}:host.column-curtain .search{position:relative;padding:2.5rem 1.5rem 0;background:transparent}:host.column-curtain .search button{position:absolute;top:2rem;right:2rem;font-size:2.5rem;opacity:0;transition:opacity 0.5s}:host.column-curtain .search form{width:85%;transform:translate3d(-150%, 0, 0);transition:transform 0.3s}:host.column-curtain .search input{font-size:2.5rem;width:100%}:host.column-curtain .search span{font-size:85%}:host.column-curtain.show{pointer-events:auto}:host.column-curtain.show::before{transform:scale3d(1, 1, 1)}:host.column-curtain.show .search form{transform:translate3d(0, 0, 0);transition-delay:0.15s;transition-timing-function:cubic-bezier(0.86, 0, 0.07, 1)}:host.column-curtain.show .search button{opacity:1;z-index:100}@media screen and (max-width: 40rem){:host.column-curtain span{width:90%}:host.column-curtain input{font-size:2rem;width:90%}} ",
"/deep/ nb-layout.modal-drop .layout{position:relative;transition:transform 0.4s, opacity 0.4s;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}/deep/ nb-layout.modal-drop.with-search .layout{opacity:0;transform:scale3d(0.9, 0.9, 1);pointer-events:none}:host.modal-drop .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;z-index:1050;position:fixed;top:0;left:0;width:100%;height:100vh;background:none;pointer-events:none}:host.modal-drop .search::before{content:'';position:absolute;top:0;right:0;width:100%;height:100%;opacity:0;transition:opacity 0.4s}:host.modal-drop .search button{font-size:2.5rem;position:absolute;top:3rem;right:3rem;display:block;opacity:0;transition:opacity 0.4s}:host.modal-drop .search form{position:relative;margin:5rem 0 2rem}:host.modal-drop .search input{font-size:6vw;width:60%;padding:0.25rem;text-align:center;opacity:0;transition:opacity 0.4s}:host.modal-drop .search span{position:relative;z-index:9;display:block;width:60%;padding:0.85rem 0;opacity:0;transform:translate3d(0, -50px, 0);transition:opacity 0.4s, transform 0.4s}:host.modal-drop .search .form-content{position:relative;z-index:10;overflow:hidden;transform:translate3d(0, -50px, 0);transition:transform 0.4s}:host.modal-drop .search .form-content::after{content:'';position:absolute;top:0;left:20%;width:60%;height:105%;opacity:0;transform-origin:50% 0}:host.modal-drop.show .search{pointer-events:auto}:host.modal-drop.show .search::before{opacity:1}:host.modal-drop.show .search button{opacity:1}:host.modal-drop.show .search .form-content{transform:translate3d(0, 0, 0);transition:none}:host.modal-drop.show .search .form-content::after{animation:scaleUpDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards}:host.modal-drop.show .search input{opacity:1;transition:opacity 0s 0.4s}:host.modal-drop.show .search span{opacity:1;transform:translate3d(0, 0, 0);transition-delay:0.4s;transition-timing-function:ease-out}@keyframes scaleUpDown{0%{opacity:1;transform:scale3d(1, 0, 1)}50%{transform:scale3d(1, 1, 1);transform-origin:50% 0;transition-timing-function:ease-out}50.1%{transform-origin:50% 100%;transition-timing-function:ease-out}100%{opacity:1;transform:scale3d(1, 0, 1);transform-origin:50% 100%;transition-timing-function:ease-out}}@media screen and (max-width: 40rem){:host.modal-drop form{margin:2rem 0}:host.modal-drop input{width:100%;left:0}} ",
"/deep/ nb-layout.modal-half .layout{transition:transform 0.6s, opacity 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}/deep/ nb-layout.modal-half.with-search .layout{transform:scale3d(0.8, 0.8, 1);pointer-events:none}:host.modal-half .search{text-align:center;position:fixed;z-index:1050;top:0;left:0;overflow:hidden;width:100%;height:100vh;background:none;pointer-events:none}:host.modal-half .search::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;opacity:0;transition:opacity 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.modal-half .search button{font-size:2.5rem;position:absolute;top:3rem;right:3rem;display:block;z-index:100;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.6s, transform 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.modal-half .search .form-wrapper{position:absolute;display:flex;justify-content:center;align-items:center;width:100%;height:50%;transition:transform 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1);transform:translate3d(0, -100%, 0)}:host.modal-half .search form{width:75%;margin:0 auto}:host.modal-half .search input{font-size:7vw;width:100%}:host.modal-half.show .search{pointer-events:auto}:host.modal-half.show .search::before{opacity:1}:host.modal-half.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.modal-half.show .search .form-wrapper{transform:translate3d(0, 0, 0)} "],
        template: "\n    <div class=\"search\" (keyup.esc)=\"closeSearch()\" >\n      <button (click)=\"closeSearch()\">\n        <i class=\"nb-close-circled\"></i>\n      </button>\n      <div class=\"form-wrapper\">\n        <form class=\"form\" (keyup.enter)=\"submitSearch(searchInput.value)\">\n          <div class=\"form-content\">\n            <input class=\"search-input\"\n              #searchInput\n              autocomplete=\"off\"\n              [attr.placeholder]=\"placeholder\"\n              tabindex=\"-1\"\n              (blur)=\"tabOut.next($event)\"/>\n          </div>\n          <span class=\"info\">Hit enter to search</span>\n        </form>\n      </div>\n    </div>\n  ",
    })
], NbSearchFieldComponent);
/**
 * Beautiful full-page search control.
 *
 * @styles
 *
 * search-btn-open-fg:
 * search-btn-close-fg:
 * search-bg:
 * search-bg-secondary:
 * search-text:
 * search-info:
 * search-dash:
 * search-placeholder:
 */
var NbSearchComponent = (function () {
    function NbSearchComponent(searchService, themeService, componentFactoryResolver, router) {
        this.searchService = searchService;
        this.themeService = themeService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.router = router;
        /**
         * Search input placeholder
         * @type {string}
         */
        this.placeholder = 'Search...';
        this.showSearch = false;
        this.searchFieldComponentRef = null;
        this.searchType = 'rotate-layout';
    }
    Object.defineProperty(NbSearchComponent.prototype, "type", {
        /**
         * Search design type, available types are
         * modal-zoomin, rotate-layout, modal-move, curtain, column-curtain, modal-drop, modal-half
         * @type {string}
         */
        set: function (val) {
            this.searchType = val;
        },
        enumerable: true,
        configurable: true
    });
    NbSearchComponent.prototype.openSearch = function () {
        this.searchService.activateSearch(this.searchType, this.tag);
    };
    NbSearchComponent.prototype.connectToSearchField = function (componentRef) {
        var _this = this;
        this.searchFieldComponentRef = componentRef;
        componentRef.instance.searchType = this.searchType;
        componentRef.instance.placeholder = this.placeholder;
        componentRef.instance.searchClose.subscribe(function () {
            _this.searchService.deactivateSearch(_this.searchType, _this.tag);
        });
        componentRef.instance.search.subscribe(function (term) {
            _this.searchService.submitSearch(term, _this.tag);
            _this.searchService.deactivateSearch(_this.searchType, _this.tag);
        });
        componentRef.instance.tabOut
            .subscribe(function () { return _this.showSearch && _this.searchFieldComponentRef.instance.inputElement.nativeElement.focus(); });
        componentRef.changeDetectorRef.detectChanges();
    };
    NbSearchComponent.prototype.createAttachedSearch = function (component) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        var componentRef = this.attachedSearchContainer.createComponent(componentFactory);
        return rxjs_Observable.Observable.of(componentRef);
    };
    NbSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerSubscription = this.router.events
            .filter(function (event) { return event instanceof _angular_router.NavigationEnd; })
            .subscribe(function (event) { return _this.searchService.deactivateSearch(_this.searchType, _this.tag); });
        this.activateSearchSubscription = this.searchService.onSearchActivate().subscribe(function (data) {
            if (!_this.tag || data.tag === _this.tag) {
                _this.showSearch = true;
                _this.themeService.appendLayoutClass(_this.searchType);
                rxjs_Observable.Observable.of(null).delay(0).subscribe(function () {
                    _this.themeService.appendLayoutClass('with-search');
                });
                _this.searchFieldComponentRef.instance.showSearch = true;
                _this.searchFieldComponentRef.instance.inputElement.nativeElement.focus();
                _this.searchFieldComponentRef.changeDetectorRef.detectChanges();
            }
        });
        this.deactivateSearchSubscription = this.searchService.onSearchDeactivate().subscribe(function (data) {
            if (!_this.tag || data.tag === _this.tag) {
                _this.showSearch = false;
                _this.searchFieldComponentRef.instance.showSearch = false;
                _this.searchFieldComponentRef.instance.inputElement.nativeElement.value = '';
                _this.searchFieldComponentRef.instance.inputElement.nativeElement.blur();
                _this.searchFieldComponentRef.changeDetectorRef.detectChanges();
                _this.themeService.removeLayoutClass('with-search');
                rxjs_Observable.Observable.of(null).delay(500).subscribe(function () {
                    _this.themeService.removeLayoutClass(_this.searchType);
                });
            }
        });
    };
    NbSearchComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeService.appendToLayoutTop(NbSearchFieldComponent)
            .subscribe(function (componentRef) {
            _this.connectToSearchField(componentRef);
        });
    };
    NbSearchComponent.prototype.ngOnDestroy = function () {
        this.activateSearchSubscription.unsubscribe();
        this.deactivateSearchSubscription.unsubscribe();
        this.routerSubscription.unsubscribe();
        if (this.searchFieldComponentRef) {
            this.searchFieldComponentRef.destroy();
        }
    };
    return NbSearchComponent;
}());
__decorate$25([
    _angular_core.Input(),
    __metadata$12("design:type", String)
], NbSearchComponent.prototype, "tag", void 0);
__decorate$25([
    _angular_core.Input(),
    __metadata$12("design:type", String)
], NbSearchComponent.prototype, "placeholder", void 0);
__decorate$25([
    _angular_core.HostBinding('class.show'),
    __metadata$12("design:type", Boolean)
], NbSearchComponent.prototype, "showSearch", void 0);
__decorate$25([
    _angular_core.ViewChild('attachedSearchContainer', { read: _angular_core.ViewContainerRef }),
    __metadata$12("design:type", _angular_core.ViewContainerRef)
], NbSearchComponent.prototype, "attachedSearchContainer", void 0);
__decorate$25([
    _angular_core.Input(),
    __metadata$12("design:type", Object),
    __metadata$12("design:paramtypes", [Object])
], NbSearchComponent.prototype, "type", null);
NbSearchComponent = __decorate$25([
    _angular_core.Component({
        selector: 'nb-search',
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        styles: [":host button{font-size:2rem;margin:0 auto;padding:0;cursor:pointer;border:none;background:none}:host button:focus{box-shadow:none;outline:none} "],
        template: "\n    <button class=\"start-search\" (click)=\"openSearch()\">\n      <i class=\"nb-search\"></i>\n    </button>\n    <ng-template #attachedSearchContainer></ng-template>\n  ",
    }),
    __metadata$12("design:paramtypes", [exports.NbSearchService,
        exports.NbThemeService,
        _angular_core.ComponentFactoryResolver,
        _angular_router.Router])
], NbSearchComponent);
var NbSearchFieldComponent_1;

var __decorate$24 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
exports.NbSearchModule = (function () {
    function NbSearchModule() {
    }
    return NbSearchModule;
}());
exports.NbSearchModule = __decorate$24([
    _angular_core.NgModule({
        imports: [
            NbSharedModule,
        ],
        declarations: [
            NbSearchComponent,
            NbSearchFieldComponent,
        ],
        exports: [
            NbSearchComponent,
            NbSearchFieldComponent,
        ],
        providers: [
            exports.NbSearchService,
        ],
        entryComponents: [
            NbSearchFieldComponent,
        ],
    })
], exports.NbSearchModule);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$27 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$13 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Styled checkbox component
 *
 * @example Basic example
 *
 * ```
 *  <nb-checkbox [(ngModel)]="enabled">Enabled?</nb-checkbox>
 * ```
 *
 * @example Example with status
 *
 * ```
 *  <nb-checkbox [(ngModel)]="enabled" status="danger">Enabled?</nb-checkbox>
 * ```
 *
 * @styles
 *
 * checkbox-bg:
 * checkbox-size:
 * checkbox-border-size:
 * checkbox-border-color:
 * checkbox-selected-border-color:
 * checkbox-fg:
 * radio-fg:
 */
exports.NbCheckboxComponent = NbCheckboxComponent_1 = (function () {
    function NbCheckboxComponent() {
        /**
         * Checkbox value
         * @type {boolean}
         * @private
         */
        this._value = false;
        this.disabled = false;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(NbCheckboxComponent.prototype, "setDisabled", {
        set: function (val) {
            this.disabled = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "setStatus", {
        /**
         * Checkbox status (success, warning, danger)
         * @param {string} val
         */
        set: function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "success", {
        get: function () {
            return this.status === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "warning", {
        get: function () {
            return this.status === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "danger", {
        get: function () {
            return this.status === 'danger';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.onChange(val);
            this.onTouched();
        },
        enumerable: true,
        configurable: true
    });
    NbCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NbCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NbCheckboxComponent.prototype.writeValue = function (val) {
        this.value = val;
    };
    return NbCheckboxComponent;
}());
__decorate$27([
    _angular_core.Input('value'),
    __metadata$13("design:type", Boolean)
], exports.NbCheckboxComponent.prototype, "_value", void 0);
__decorate$27([
    _angular_core.Input('disabled'),
    __metadata$13("design:type", Boolean),
    __metadata$13("design:paramtypes", [Boolean])
], exports.NbCheckboxComponent.prototype, "setDisabled", null);
__decorate$27([
    _angular_core.Input('status'),
    __metadata$13("design:type", String),
    __metadata$13("design:paramtypes", [String])
], exports.NbCheckboxComponent.prototype, "setStatus", null);
__decorate$27([
    _angular_core.HostBinding('class.success'),
    __metadata$13("design:type", Object),
    __metadata$13("design:paramtypes", [])
], exports.NbCheckboxComponent.prototype, "success", null);
__decorate$27([
    _angular_core.HostBinding('class.warning'),
    __metadata$13("design:type", Object),
    __metadata$13("design:paramtypes", [])
], exports.NbCheckboxComponent.prototype, "warning", null);
__decorate$27([
    _angular_core.HostBinding('class.danger'),
    __metadata$13("design:type", Object),
    __metadata$13("design:paramtypes", [])
], exports.NbCheckboxComponent.prototype, "danger", null);
exports.NbCheckboxComponent = NbCheckboxComponent_1 = __decorate$27([
    _angular_core.Component({
        selector: 'nb-checkbox',
        template: "\n    <label class=\"custom-control custom-checkbox\">\n      <input type=\"checkbox\" class=\"custom-control-input\"\n             [disabled]=\"disabled\"\n             [checked]=\"value\"\n             (change)=\"value = !value\">\n      <span class=\"custom-control-indicator\"></span>\n      <span class=\"custom-control-description\">\n        <ng-content></ng-content>\n      </span>\n    </label>\n  ",
        providers: [{
                provide: _angular_forms.NG_VALUE_ACCESSOR,
                useExisting: _angular_core.forwardRef(function () { return NbCheckboxComponent_1; }),
                multi: true,
            }],
    })
], exports.NbCheckboxComponent);
var NbCheckboxComponent_1;

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$28 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.NbCheckboxModule = (function () {
    function NbCheckboxModule() {
    }
    return NbCheckboxModule;
}());
exports.NbCheckboxModule = __decorate$28([
    _angular_core.NgModule({
        imports: [
            NbSharedModule,
        ],
        declarations: [exports.NbCheckboxComponent],
        exports: [exports.NbCheckboxComponent],
    })
], exports.NbCheckboxModule);

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

exports.NbMenuItem = NbMenuItem;
exports.nbThemeOptionsToken = nbThemeOptionsToken;
exports.nbMediaBreakpointsToken = nbMediaBreakpointsToken;
exports.nbBuiltInJSThemesToken = nbBuiltInJSThemesToken;
exports.nbJSThemesToken = nbJSThemesToken;
exports.DEFAULT_MEDIA_BREAKPOINTS = DEFAULT_MEDIA_BREAKPOINTS;
exports.NbColorHelper = NbColorHelper;

Object.defineProperty(exports, '__esModule', { value: true });

})));
