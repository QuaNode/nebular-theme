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
import { Component, Input, Output, EventEmitter, ContentChildren, QueryList, HostBinding, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { convertToBoolProperty } from '../helpers';
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
__decorate([
    Input(),
    __metadata("design:type", String)
], NbTabComponent.prototype, "tabTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbTabComponent.prototype, "route", void 0);
__decorate([
    HostBinding('class.content-active'),
    __metadata("design:type", Boolean)
], NbTabComponent.prototype, "activeValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], NbTabComponent.prototype, "active", null);
NbTabComponent = __decorate([
    Component({
        selector: 'nb-tab',
        template: "\n    <ng-container *ngIf=\"init\">\n      <ng-content></ng-content>\n    </ng-container>\n  ",
    })
], NbTabComponent);
export { NbTabComponent };
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
        this.changeTab = new EventEmitter();
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
__decorate([
    ContentChildren(NbTabComponent),
    __metadata("design:type", QueryList)
], NbTabsetComponent.prototype, "tabs", void 0);
__decorate([
    HostBinding('class.full-width'),
    __metadata("design:type", Boolean)
], NbTabsetComponent.prototype, "fullWidthValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbTabsetComponent.prototype, "fullWidth", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbTabsetComponent.prototype, "routeParam", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NbTabsetComponent.prototype, "changeTab", void 0);
NbTabsetComponent = __decorate([
    Component({
        selector: 'nb-tabset',
        styles: [":host{display:block}:host.full-width ul{justify-content:space-around}:host /deep/ nb-tab{flex:1;-ms-flex:1 1 auto;overflow:auto;display:none}:host /deep/ nb-tab.content-active{display:block}ul{display:flex;flex-direction:row;list-style-type:none;margin:0}ul li{cursor:pointer;margin-bottom:-1px;text-align:center}ul li.active a::before{display:block}ul li a{position:relative;text-decoration:none;display:inline-block}ul li a::before{display:none;position:absolute;content:'';width:100%;height:6px;border-radius:3px;bottom:-2px;left:0} "],
        template: "\n    <ul>\n      <li *ngFor=\"let tab of tabs\"\n          (click)=\"selectTab(tab)\"\n          [class.active]=\"tab.active\">\n        <a href (click)=\"$event.preventDefault()\">{{ tab.tabTitle }}</a>\n      </li>\n    </ul>\n    <ng-content select=\"nb-tab\"></ng-content>\n  ",
    }),
    __metadata("design:paramtypes", [ActivatedRoute])
], NbTabsetComponent);
export { NbTabsetComponent };
//# sourceMappingURL=tabset.component.js.map