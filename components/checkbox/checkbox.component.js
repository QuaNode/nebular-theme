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
import { Component, Input, HostBinding, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { convertToBoolProperty } from '../helpers';
/**
 * Styled checkbox component
 *
 * @example Basic example
 *
 * ```
 *  <nb-checkbox [(ngModel)]="enabled">Enabled?</nb-checkbox>
 * ```
 *
 * @example Example with status
 *
 * ```
 *  <nb-checkbox [(ngModel)]="enabled" status="danger">Enabled?</nb-checkbox>
 * ```
 *
 * @styles
 *
 * checkbox-bg:
 * checkbox-size:
 * checkbox-border-size:
 * checkbox-border-color:
 * checkbox-selected-border-color:
 * checkbox-fg:
 * radio-fg:
 */
var NbCheckboxComponent = NbCheckboxComponent_1 = (function () {
    function NbCheckboxComponent() {
        /**
         * Checkbox value
         * @type {boolean}
         * @private
         */
        this._value = false;
        this.disabled = false;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(NbCheckboxComponent.prototype, "setDisabled", {
        set: function (val) {
            this.disabled = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "setStatus", {
        /**
         * Checkbox status (success, warning, danger)
         * @param {string} val
         */
        set: function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "success", {
        get: function () {
            return this.status === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "warning", {
        get: function () {
            return this.status === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "danger", {
        get: function () {
            return this.status === 'danger';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.onChange(val);
            this.onTouched();
        },
        enumerable: true,
        configurable: true
    });
    NbCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NbCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NbCheckboxComponent.prototype.writeValue = function (val) {
        this.value = val;
    };
    return NbCheckboxComponent;
}());
__decorate([
    Input('value'),
    __metadata("design:type", Boolean)
], NbCheckboxComponent.prototype, "_value", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbCheckboxComponent.prototype, "setDisabled", null);
__decorate([
    Input('status'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NbCheckboxComponent.prototype, "setStatus", null);
__decorate([
    HostBinding('class.success'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbCheckboxComponent.prototype, "success", null);
__decorate([
    HostBinding('class.warning'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbCheckboxComponent.prototype, "warning", null);
__decorate([
    HostBinding('class.danger'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbCheckboxComponent.prototype, "danger", null);
NbCheckboxComponent = NbCheckboxComponent_1 = __decorate([
    Component({
        selector: 'nb-checkbox',
        template: "\n    <label class=\"custom-control custom-checkbox\">\n      <input type=\"checkbox\" class=\"custom-control-input\"\n             [disabled]=\"disabled\"\n             [checked]=\"value\"\n             (change)=\"value = !value\">\n      <span class=\"custom-control-indicator\"></span>\n      <span class=\"custom-control-description\">\n        <ng-content></ng-content>\n      </span>\n    </label>\n  ",
        providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(function () { return NbCheckboxComponent_1; }),
                multi: true,
            }],
    })
], NbCheckboxComponent);
export { NbCheckboxComponent };
var NbCheckboxComponent_1;
//# sourceMappingURL=checkbox.component.js.map