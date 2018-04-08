/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbPopoverComponent } from './popover.component';
import { NbSharedModule } from '../shared/shared.module';
import { NbPopoverDirective } from './popover.directive';
var NbPopoverModule = /** @class */ (function () {
    function NbPopoverModule() {
    }
    NbPopoverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [NbSharedModule],
                    declarations: [NbPopoverComponent, NbPopoverDirective],
                    exports: [NbPopoverDirective],
                    entryComponents: [NbPopoverComponent],
                },] },
    ];
    /** @nocollapse */
    NbPopoverModule.ctorParameters = function () { return []; };
    return NbPopoverModule;
}());
export { NbPopoverModule };
//# sourceMappingURL=popover.module.js.map