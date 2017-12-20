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
import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { convertToBoolProperty } from '../helpers';
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
        this.changeTab = new EventEmitter();
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
__decorate([
    HostBinding('class.full-width'),
    __metadata("design:type", Boolean)
], NbRouteTabsetComponent.prototype, "fullWidthValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], NbRouteTabsetComponent.prototype, "tabs", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbRouteTabsetComponent.prototype, "fullWidth", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NbRouteTabsetComponent.prototype, "changeTab", void 0);
NbRouteTabsetComponent = __decorate([
    Component({
        selector: 'nb-route-tabset',
        styles: ["ul{display:flex;flex-direction:row;list-style-type:none;margin:0}ul li{cursor:pointer;margin-bottom:-1px;text-align:center}ul li.active a::before{display:block}ul li a{position:relative;text-decoration:none;display:inline-block}ul li a::before{display:none;position:absolute;content:'';width:100%;height:6px;border-radius:3px;bottom:-2px;left:0}:host.full-width ul{justify-content:space-around} "],
        template: "\n    <ul>\n      <li *ngFor=\"let tab of tabs\"\n          (click)=\"$event.preventDefault(); selectTab(tab)\"\n          routerLink=\"{{tab.route}}\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{ exact: true }\">\n        <a href>{{tab.title}}</a>\n      </li>\n    </ul>\n    <router-outlet></router-outlet>\n  ",
    }),
    __metadata("design:paramtypes", [Router])
], NbRouteTabsetComponent);
export { NbRouteTabsetComponent };
//# sourceMappingURL=route-tabset.component.js.map