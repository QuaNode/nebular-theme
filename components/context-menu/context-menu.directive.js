/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ComponentFactoryResolver, Directive, ElementRef, HostListener, Inject, Input, PLATFORM_ID, } from '@angular/core';
import { NbPopoverDirective } from '../popover/popover.directive';
import { NbThemeService } from '../../services/theme.service';
import { NbPopoverAdjustment, NbPopoverPlacement } from '../popover/helpers/model';
import { NbContextMenuComponent } from './context-menu.component';
/**
 * Full featured context menu directive.
 *
 * ![image](assets/images/components/context-menu.gif)
 *
 * @example Juts pass basic menu items:
 *
 * ```
 * <button [nbContextMenu]="items"></button>
 * ...
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 *
 * @example Context menu has different placements, such as: top, bottom, left and right
 * which can be used as following:
 *
 * ```
 * <button [nbContextMenu]="items" nbContextMenuPlacement="right"></button>
 * ...
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 *
 * @example By default context menu will try to adjust itself to maximally fit viewport
 * and provide the best user experience. It will try to change placement of the context menu.
 * If you wanna disable this behaviour just set it falsy value.
 *
 * ```
 * <button [nbContextMenu]="items" nbContextMenuAdjustment="counterclockwise"></button>
 * ...
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * */
var NbContextMenuDirective = /** @class */ (function () {
    function NbContextMenuDirective(hostRef, themeService, componentFactoryResolver, platformId) {
        /**
             * Initialize popover with all the important inputs.
             * */
        this.popover = new NbPopoverDirective(hostRef, themeService, componentFactoryResolver, platformId);
        this.popover.content = NbContextMenuComponent;
        this.popover.placement = NbPopoverPlacement.BOTTOM;
    }
    Object.defineProperty(NbContextMenuDirective.prototype, "items", {
        set: /**
           * Basic menu items, will be passed to the internal NbMenuComponent.
           * */
        function (items) {
            this.validateItems(items);
            this.popover.context = { items: items };
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NbContextMenuDirective.prototype, "placement", {
        set: /**
           * Position will be calculated relatively host element based on the placement.
           * Can be top, right, bottom and left.
           * */
        function (placement) {
            this.popover.placement = placement;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NbContextMenuDirective.prototype, "adjustment", {
        set: /**
           * Container placement will be changes automatically based on this strategy if container can't fit view port.
           * Set this property to any falsy value if you want to disable automatically adjustment.
           * Available values: clockwise, counterclockwise.
           * */
        function (adjustment) {
            this.popover.adjustment = adjustment;
        },
        enumerable: true,
        configurable: true
    });
    NbContextMenuDirective.prototype.ngOnInit = function () {
        this.popover.ngOnInit();
    };
    NbContextMenuDirective.prototype.ngOnDestroy = function () {
        this.popover.ngOnDestroy();
    };
    /**
     * Show context menu.
     * */
    /**
       * Show context menu.
       * */
    NbContextMenuDirective.prototype.show = /**
       * Show context menu.
       * */
    function () {
        this.popover.show();
    };
    /**
     * Hide context menu.
     * */
    /**
       * Hide context menu.
       * */
    NbContextMenuDirective.prototype.hide = /**
       * Hide context menu.
       * */
    function () {
        this.popover.hide();
    };
    /**
     * Toggle context menu state.
     * */
    /**
       * Toggle context menu state.
       * */
    NbContextMenuDirective.prototype.toggle = /**
       * Toggle context menu state.
       * */
    function () {
        this.popover.toggle();
    };
    NbContextMenuDirective.prototype.onResize = function () {
        this.popover.onResize();
    };
    /*
     * NbMenuComponent will crash if don't pass menu items to it.
     * So, we just validating them and throw custom obvious error.
     * */
    /*
       * NbMenuComponent will crash if don't pass menu items to it.
       * So, we just validating them and throw custom obvious error.
       * */
    NbContextMenuDirective.prototype.validateItems = /*
       * NbMenuComponent will crash if don't pass menu items to it.
       * So, we just validating them and throw custom obvious error.
       * */
    function (items) {
        if (!items || !items.length) {
            throw Error("List of menu items expected, but given: " + items);
        }
    };
    NbContextMenuDirective.decorators = [
        { type: Directive, args: [{ selector: '[nbContextMenu]' },] },
    ];
    /** @nocollapse */
    NbContextMenuDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NbThemeService, },
        { type: ComponentFactoryResolver, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    NbContextMenuDirective.propDecorators = {
        "items": [{ type: Input, args: ['nbContextMenu',] },],
        "placement": [{ type: Input, args: ['nbContextMenuPlacement',] },],
        "adjustment": [{ type: Input, args: ['nbContextMenuAdjustment',] },],
        "onResize": [{ type: HostListener, args: ['window:resize', ['$event'],] },],
    };
    return NbContextMenuDirective;
}());
export { NbContextMenuDirective };
//# sourceMappingURL=context-menu.directive.js.map