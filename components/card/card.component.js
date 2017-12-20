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
import { Component, Input, HostBinding } from '@angular/core';
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
NbCardHeaderComponent = __decorate([
    Component({
        selector: 'nb-card-header',
        template: "<ng-content></ng-content>",
    })
], NbCardHeaderComponent);
export { NbCardHeaderComponent };
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset body section.
 */
var NbCardBodyComponent = (function () {
    function NbCardBodyComponent() {
    }
    return NbCardBodyComponent;
}());
NbCardBodyComponent = __decorate([
    Component({
        selector: 'nb-card-body',
        template: "<ng-content></ng-content>",
    })
], NbCardBodyComponent);
export { NbCardBodyComponent };
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset footer section.
 */
var NbCardFooterComponent = (function () {
    function NbCardFooterComponent() {
    }
    return NbCardFooterComponent;
}());
NbCardFooterComponent = __decorate([
    Component({
        selector: 'nb-card-footer',
        template: "<ng-content></ng-content>",
    })
], NbCardFooterComponent);
export { NbCardFooterComponent };
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
__decorate([
    HostBinding('class.xxsmall-card'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbCardComponent.prototype, "xxsmall", null);
__decorate([
    HostBinding('class.xsmall-card'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbCardComponent.prototype, "xsmall", null);
__decorate([
    HostBinding('class.small-card'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbCardComponent.prototype, "small", null);
__decorate([
    HostBinding('class.medium-card'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbCardComponent.prototype, "medium", null);
__decorate([
    HostBinding('class.large-card'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbCardComponent.prototype, "large", null);
__decorate([
    HostBinding('class.xlarge-card'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbCardComponent.prototype, "xlarge", null);
__decorate([
    HostBinding('class.xxlarge-card'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbCardComponent.prototype, "xxlarge", null);
__decorate([
    HostBinding('class.active-card'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbCardComponent.prototype, "active", null);
__decorate([
    HostBinding('class.disabled-card'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbCardComponent.prototype, "disabled", null);
__decorate([
    HostBinding('class.primary-card'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbCardComponent.prototype, "primary", null);
__decorate([
    HostBinding('class.info-card'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbCardComponent.prototype, "info", null);
__decorate([
    HostBinding('class.success-card'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbCardComponent.prototype, "success", null);
__decorate([
    HostBinding('class.warning-card'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbCardComponent.prototype, "warning", null);
__decorate([
    HostBinding('class.danger-card'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbCardComponent.prototype, "danger", null);
__decorate([
    Input('size'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NbCardComponent.prototype, "setSize", null);
__decorate([
    Input('status'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NbCardComponent.prototype, "setStatus", null);
NbCardComponent = NbCardComponent_1 = __decorate([
    Component({
        selector: 'nb-card',
        styles: [":host{display:flex;flex-direction:column} "],
        template: "\n    <ng-content></ng-content>\n    <ng-content select=\"nb-card-header\"></ng-content>\n    <ng-content select=\"nb-card-body\"></ng-content>\n    <ng-content select=\"nb-card-footer\"></ng-content>\n  ",
    })
], NbCardComponent);
export { NbCardComponent };
var NbCardComponent_1;
//# sourceMappingURL=card.component.js.map