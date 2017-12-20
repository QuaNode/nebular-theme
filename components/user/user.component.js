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
import { Component, Input, HostBinding, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
/**
 * Action dropdown menu
 */
var NbUserMenuItem = (function () {
    function NbUserMenuItem() {
    }
    return NbUserMenuItem;
}());
export { NbUserMenuItem };
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
        this.menuClick = new EventEmitter();
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
__decorate([
    HostBinding('class.inverse'),
    __metadata("design:type", Boolean)
], NbUserComponent.prototype, "inverseValue", void 0);
__decorate([
    HostBinding('class.small'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbUserComponent.prototype, "small", null);
__decorate([
    HostBinding('class.medium'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbUserComponent.prototype, "medium", null);
__decorate([
    HostBinding('class.large'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbUserComponent.prototype, "large", null);
__decorate([
    HostBinding('class.xlarge'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbUserComponent.prototype, "xlarge", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbUserComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbUserComponent.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbUserComponent.prototype, "picture", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbUserComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], NbUserComponent.prototype, "menu", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NbUserComponent.prototype, "size", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbUserComponent.prototype, "showName", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbUserComponent.prototype, "showTitle", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbUserComponent.prototype, "showInitials", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbUserComponent.prototype, "onlyPicture", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbUserComponent.prototype, "inverse", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NbUserComponent.prototype, "menuClick", void 0);
__decorate([
    HostListener('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NbUserComponent.prototype, "hideMenu", null);
NbUserComponent = NbUserComponent_1 = __decorate([
    Component({
        selector: 'nb-user',
        styles: [":host{display:flex}.user-container{position:relative;display:flex;align-items:center}.user-container.with-menu{cursor:pointer}.user-picture{border-radius:50%;flex-shrink:0}.user-picture.image{background-size:cover;background-repeat:no-repeat}.user-picture.background{display:flex;align-items:center;justify-content:center}.user-title{font-size:0.75rem}.info-container{margin-left:0.5rem}.user-context-menu{position:absolute;transform:translate(-50%, 0);left:50%;z-index:1000;top:calc(100% + 10px);background-clip:padding-box;border-radius:5px;font-size:0.875rem;line-height:1.5rem}.user-context-menu ul{margin:0;padding:0.5rem 0;list-style:none}.user-context-menu ul li{display:block;white-space:nowrap}.user-context-menu ul li>a{padding:0.375rem 3rem;display:block}.user-context-menu ul li.arrow{position:absolute;transform:translate(-50%, 0);left:50%;top:-22px;width:0;height:0;border:11px solid transparent}.user-context-menu ul li.arrow::after{position:absolute;content:' ';width:0;height:0;top:-9px;left:0;margin-left:-12px;display:block;border:12px solid transparent} "],
        template: "<div class=\"user-container\" (click)=\"toggleMenu()\" [ngClass]=\"{'with-menu' : hasMenu()}\"> <div *ngIf=\"picture\" class=\"user-picture image\" style.background-image=\"url({{picture}})\"></div> <div *ngIf=\"!picture\" class=\"user-picture background\" [style.background-color]=\"color\"> <ng-container *ngIf=\"showInitialsValue\"> {{ getInitials() }} </ng-container> </div> <div class=\"info-container\"> <div *ngIf=\"showNameValue && name\" class=\"user-name\">{{ name }}</div> <div *ngIf=\"showTitleValue && title\" class=\"user-title\">{{ title }}</div> </div> <div *ngIf=\"hasMenu()\" [ngStyle]=\"{display: isMenuShown ? 'block' : 'none'}\" class=\"user-context-menu\"> <ul> <li class=\"arrow\"></li> <li *ngFor=\"let item of menu\"> <span *ngIf=\"item.icon\" class=\"item-icon {{ item.icon  }}\"></span> <a *ngIf=\"item.link && !item.url\" [routerLink]=\"item.link\" [attr.target]=\"item.target\">{{ item.title }}</a> <a *ngIf=\"item.url && !item.link\" [attr.href]=\"item.url\" [attr.target]=\"item.target\">{{ item.title }}</a> <a *ngIf=\"!item.link && !item.url\" href=\"#\" [attr.target]=\"item.target\" (click)=\"itemClick($event, item)\">{{ item.title }}</a> </li> </ul> </div> </div> ",
    }),
    __metadata("design:paramtypes", [ElementRef])
], NbUserComponent);
export { NbUserComponent };
var NbUserComponent_1;
//# sourceMappingURL=user.component.js.map