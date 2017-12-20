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
import { Component, ComponentFactoryResolver, ElementRef, HostBinding, HostListener, Input, Renderer2, ViewChild, ViewContainerRef, } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/filter';
import { convertToBoolProperty } from '../helpers';
import { NbThemeService } from '../../services/theme.service';
import { NbSpinnerService } from '../../services/spinner.service';
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
__decorate([
    HostBinding('class.left'),
    __metadata("design:type", Boolean)
], NbLayoutColumnComponent.prototype, "leftValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbLayoutColumnComponent.prototype, "left", null);
NbLayoutColumnComponent = __decorate([
    Component({
        selector: 'nb-layout-column',
        template: "\n    <ng-content></ng-content>\n  ",
    })
], NbLayoutColumnComponent);
export { NbLayoutColumnComponent };
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
__decorate([
    HostBinding('class.fixed'),
    __metadata("design:type", Boolean)
], NbLayoutHeaderComponent.prototype, "fixedValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbLayoutHeaderComponent.prototype, "fixed", null);
NbLayoutHeaderComponent = __decorate([
    Component({
        selector: 'nb-layout-header',
        template: "\n    <nav [class.fixed]=\"fixedValue\">\n      <ng-content></ng-content>\n    </nav>\n  ",
    })
], NbLayoutHeaderComponent);
export { NbLayoutHeaderComponent };
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
__decorate([
    HostBinding('class.fixed'),
    __metadata("design:type", Boolean)
], NbLayoutFooterComponent.prototype, "fixedValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbLayoutFooterComponent.prototype, "fixed", null);
NbLayoutFooterComponent = __decorate([
    Component({
        selector: 'nb-layout-footer',
        template: "\n    <nav [class.fixed]=\"fixedValue\">\n      <ng-content></ng-content>\n    </nav>\n  ",
    })
], NbLayoutFooterComponent);
export { NbLayoutFooterComponent };
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
        this.afterViewInit$ = new BehaviorSubject(null);
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
__decorate([
    HostBinding('class.window-mode'),
    __metadata("design:type", Boolean)
], NbLayoutComponent.prototype, "windowModeValue", void 0);
__decorate([
    HostBinding('class.with-scroll'),
    __metadata("design:type", Boolean)
], NbLayoutComponent.prototype, "withScrollValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbLayoutComponent.prototype, "center", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbLayoutComponent.prototype, "windowMode", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbLayoutComponent.prototype, "withScroll", null);
__decorate([
    ViewChild('layoutTopDynamicArea', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], NbLayoutComponent.prototype, "veryTopRef", void 0);
__decorate([
    HostListener('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NbLayoutComponent.prototype, "onResize", null);
NbLayoutComponent = __decorate([
    Component({
        selector: 'nb-layout',
        styles: [":host{-webkit-font-smoothing:antialiased}:host .layout{display:flex;flex-direction:column}:host /deep/ nb-layout-header{display:block}:host /deep/ nb-layout-header nav{align-items:center;display:flex}:host /deep/ nb-layout-header.fixed{position:fixed;left:0;right:0;z-index:1040}:host .layout-container{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:row}:host .layout-container /deep/ nb-sidebar{order:0}:host .layout-container /deep/ nb-sidebar.right{order:2}:host .layout-container /deep/ nb-sidebar .fixed{position:fixed;width:100%;overflow-y:auto;height:100%}:host .layout-container .content{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:column}:host .layout-container .content.center{max-width:100%;position:relative;margin-left:auto;margin-right:auto}:host .layout-container .content .columns{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:row}:host .layout-container .content .columns /deep/ nb-layout-column{order:2;flex:1 0}:host .layout-container .content .columns /deep/ nb-layout-column.left{order:1}:host .layout-container .content /deep/ nb-layout-footer{display:block;margin-top:auto}:host .layout-container .content /deep/ nb-layout-footer nav{justify-content:center;display:flex} "],
        template: "\n    <ng-template #layoutTopDynamicArea></ng-template>\n    <div class=\"scrollable-container\">\n      <div class=\"layout\">\n        <ng-content select=\"nb-layout-header\"></ng-content>\n        <div class=\"layout-container\">\n          <ng-content select=\"nb-sidebar\"></ng-content>\n          <div class=\"content\" [class.center]=\"centerValue\">\n            <div class=\"columns\">\n              <ng-content select=\"nb-layout-column\"></ng-content>\n            </div>\n            <ng-content select=\"nb-layout-footer\"></ng-content>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [NbThemeService,
        NbSpinnerService,
        ComponentFactoryResolver,
        ElementRef,
        Renderer2])
], NbLayoutComponent);
export { NbLayoutComponent };
//# sourceMappingURL=layout.component.js.map