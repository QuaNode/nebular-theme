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
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/takeWhile';
import { NbMenuInternalService } from './menu.service';
import { convertToBoolProperty } from '../helpers';
var NbMenuItemComponent = (function () {
    function NbMenuItemComponent(router) {
        this.router = router;
        this.menuItem = null;
        this.hoverItem = new EventEmitter();
        this.toggleSubMenu = new EventEmitter();
        this.selectItem = new EventEmitter();
        this.itemClick = new EventEmitter();
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
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbMenuItemComponent.prototype, "menuItem", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NbMenuItemComponent.prototype, "hoverItem", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NbMenuItemComponent.prototype, "toggleSubMenu", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NbMenuItemComponent.prototype, "selectItem", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NbMenuItemComponent.prototype, "itemClick", void 0);
NbMenuItemComponent = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: '[nbMenuItem]',
        template: "<input *ngIf=\"menuItem.title==='button'\" style=\"padding:12px;margin:5px 0px;border:none;outline:none;border-radius:10px;background:#009688;color:white;width:100%\" type=\"button\" [value]=menuItem.icon><input *ngIf=\"menuItem.title==='input'\" [placeholder]=menuItem.icon type=\"text\" style=\"padding:12px;margin:5px 0px;border:none;outline:none;border-radius:10px;background:#C5CAE9;\"><span *ngIf=\"menuItem.group\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> {{ menuItem.title }} </span> <a *ngIf=\"menuItem.link && !menuItem.url && !menuItem.children && !menuItem.group\" [routerLink]=\"menuItem.link\" [fragment]=\"menuItem.fragment\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"onSelectItem(menuItem)\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"menuItem.url && !menuItem.children && !menuItem.link && !menuItem.group\" [attr.href]=\"menuItem.url\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"onSelectItem(menuItem)\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"!menuItem.children && !menuItem.link && !menuItem.url && !menuItem.group && menuItem.title!=='input' && menuItem.title!=='button' \" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"$event.preventDefault(); onItemClick(menuItem);\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"menuItem.children\" (click)=\"$event.preventDefault(); onToggleSubMenu(menuItem);\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" href=\"#\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> <i class=\"ion chevron\" [class.ion-chevron-left]=\"!menuItem.expanded\" [class.ion-chevron-down]=\"menuItem.expanded\"></i> </a> <ul *ngIf=\"menuItem.children\" [class.collapsed]=\"!(menuItem.children && menuItem.expanded)\" [class.expanded]=\"menuItem.expanded\" class=\"menu-items\"> <li nbMenuItem *ngFor=\"let item of menuItem.children\" [menuItem]=\"item\" [class.menu-group]=\"item.group\" (hoverItem)=\"onHoverItem($event)\" (toggleSubMenu)=\"onToggleSubMenu($event)\" (selectItem)=\"onSelectItem($event)\" (itemClick)=\"onItemClick($event)\" class=\"menu-item\"></li> </ul>",
    }),
    __metadata("design:paramtypes", [Router])
], NbMenuItemComponent);
export { NbMenuItemComponent };
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
            if (event instanceof NavigationEnd) {
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
__decorate([
    HostBinding('class.inverse'),
    __metadata("design:type", Boolean)
], NbMenuComponent.prototype, "inverseValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbMenuComponent.prototype, "tag", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], NbMenuComponent.prototype, "items", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbMenuComponent.prototype, "inverse", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbMenuComponent.prototype, "autoCollapse", null);
NbMenuComponent = __decorate([
    Component({
        selector: 'nb-menu',
        styles: [":host /deep/ {display:block}:host /deep/ .menu-items,:host /deep/ .menu-item>.menu-items{list-style-type:none;overflow:hidden}:host /deep/ .menu-items.collapsed,:host /deep/ .menu-item>.menu-items.collapsed{max-height:0;transition:max-height 0.15s ease-out}:host /deep/ .menu-items.expanded,:host /deep/ .menu-item>.menu-items.expanded{max-height:300px;transition:max-height 0.3s ease-in}:host /deep/ .menu-item a{display:flex;color:inherit;text-decoration:none;align-items:center}:host /deep/ .menu-item a .menu-title{flex:1} "],
        template: "\n    <ul class=\"menu-items\">\n      <li nbMenuItem *ngFor=\"let item of items\"\n                      [menuItem]=\"item\"\n                      [class.menu-group]=\"item.group\"\n                      (hoverItem)=\"onHoverItem($event)\"\n                      (toggleSubMenu)=\"onToggleSubMenu($event)\"\n                      (selectItem)=\"onSelectItem($event)\"\n                      (itemClick)=\"onItemClick($event)\"\n                      class=\"menu-item\"></li>\n    </ul>\n  ",
    }),
    __metadata("design:paramtypes", [NbMenuInternalService, Router])
], NbMenuComponent);
export { NbMenuComponent };
//# sourceMappingURL=menu.component.js.map