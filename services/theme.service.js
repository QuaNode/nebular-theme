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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/startWith';
import { nbThemeOptionsToken } from '../theme.options';
import { NbJSThemesRegistry } from './js-themes-registry.service';
import { NbMediaBreakpointsService } from './breakpoints.service';
/**
 * Main Nebular service. Includes various helper methods.
 */
var NbThemeService = (function () {
    function NbThemeService(options, breakpointService, jsThemesRegistry) {
        this.options = options;
        this.breakpointService = breakpointService;
        this.jsThemesRegistry = jsThemesRegistry;
        this.themeChanges$ = new ReplaySubject(1);
        this.appendToLayoutTop$ = new ReplaySubject();
        this.createLayoutTop$ = new Subject();
        this.appendLayoutClass$ = new Subject();
        this.removeLayoutClass$ = new Subject();
        this.changeWindowWidth$ = new ReplaySubject(2);
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
        var subject = new ReplaySubject(1);
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
        var observable = new BehaviorSubject(null);
        this.createLayoutTop$.next({ listener: observable });
        this.appendToLayoutTop$ = new ReplaySubject();
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
NbThemeService = __decorate([
    Injectable(),
    __param(0, Inject(nbThemeOptionsToken)),
    __metadata("design:paramtypes", [Object, NbMediaBreakpointsService,
        NbJSThemesRegistry])
], NbThemeService);
export { NbThemeService };
//# sourceMappingURL=theme.service.js.map