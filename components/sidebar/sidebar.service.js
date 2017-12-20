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
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/publish';
/**
 * Sidebar service.
 *
 * Root module service to control the sidebar from any part of the app.
 */
var NbSidebarService = (function () {
    function NbSidebarService() {
        this.toggle$ = new Subject();
        this.expand$ = new Subject();
        this.collapse$ = new Subject();
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
NbSidebarService = __decorate([
    Injectable()
], NbSidebarService);
export { NbSidebarService };
//# sourceMappingURL=sidebar.service.js.map