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
import { Component, HostBinding, Input, ElementRef } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import { NbThemeService } from '../../services/theme.service';
import { NbSidebarService } from './sidebar.service';
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
NbSidebarHeaderComponent = __decorate([
    Component({
        selector: 'nb-sidebar-header',
        template: "\n    <ng-content></ng-content>\n  ",
    })
], NbSidebarHeaderComponent);
export { NbSidebarHeaderComponent };
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
NbSidebarFooterComponent = __decorate([
    Component({
        selector: 'nb-sidebar-footer',
        template: "\n    <ng-content></ng-content>\n  ",
    })
], NbSidebarFooterComponent);
export { NbSidebarFooterComponent };
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
__decorate([
    HostBinding('class.fixed'),
    __metadata("design:type", Boolean)
], NbSidebarComponent.prototype, "fixedValue", void 0);
__decorate([
    HostBinding('class.right'),
    __metadata("design:type", Boolean)
], NbSidebarComponent.prototype, "rightValue", void 0);
__decorate([
    HostBinding('class.left'),
    __metadata("design:type", Boolean)
], NbSidebarComponent.prototype, "leftValue", void 0);
__decorate([
    HostBinding('class.expanded'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbSidebarComponent.prototype, "expanded", null);
__decorate([
    HostBinding('class.collapsed'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbSidebarComponent.prototype, "collapsed", null);
__decorate([
    HostBinding('class.compacted'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbSidebarComponent.prototype, "compacted", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbSidebarComponent.prototype, "right", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbSidebarComponent.prototype, "left", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbSidebarComponent.prototype, "fixed", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NbSidebarComponent.prototype, "state", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbSidebarComponent.prototype, "responsive", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbSidebarComponent.prototype, "tag", void 0);
NbSidebarComponent = NbSidebarComponent_1 = __decorate([
    Component({
        selector: 'nb-sidebar',
        styles: [":host{display:flex;flex-direction:column;overflow:hidden;z-index:auto;order:0}:host .scrollable{overflow-y:auto;overflow-x:hidden;flex:1}:host .main-container{position:fixed;transform:translate3d(0, 0, 0);display:flex;flex-direction:column}:host.right{order:4;margin-right:0;margin-left:auto}:host.fixed{position:fixed;height:100%;z-index:999;top:0;bottom:0;left:0}:host.fixed.right{right:0}:host /deep/ nb-sidebar-footer{margin-top:auto;display:block}:host /deep/ nb-sidebar-header{display:block} "],
        template: "\n    <div class=\"main-container\">\n      <ng-content select=\"nb-sidebar-header\"></ng-content>\n      <div class=\"scrollable\" (click)=\"onClick($event)\">\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"nb-sidebar-footer\"></ng-content>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [NbSidebarService,
        NbThemeService,
        ElementRef])
], NbSidebarComponent);
export { NbSidebarComponent };
var NbSidebarComponent_1;
//# sourceMappingURL=sidebar.component.js.map