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
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/publish';
var itemClick$ = new ReplaySubject(1);
var addItems$ = new ReplaySubject(1);
var navigateHome$ = new ReplaySubject(1);
var getSelectedItem$ = new ReplaySubject(1);
var itemSelect$ = new ReplaySubject(1);
var itemHover$ = new ReplaySubject(1);
var submenuToggle$ = new ReplaySubject(1);
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
export { NbMenuItem };
// TODO: map select events to router change events
// TODO: review the interface
/**
 * Menu Service. Allows you to listen to menu events, or to interact with a menu.
 */
var NbMenuService = (function () {
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
        var listener = new BehaviorSubject(null);
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
NbMenuService = __decorate([
    Injectable()
], NbMenuService);
export { NbMenuService };
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
NbMenuInternalService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Router, Location])
], NbMenuInternalService);
export { NbMenuInternalService };
//# sourceMappingURL=menu.service.js.map