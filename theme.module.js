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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { nbBuiltInJSThemesToken, nbMediaBreakpointsToken, nbThemeOptionsToken, nbJSThemesToken, } from './theme.options';
import { NbThemeService } from './services/theme.service';
import { NbSpinnerService } from './services/spinner.service';
import { BUILT_IN_THEMES, NbJSThemesRegistry } from './services/js-themes-registry.service';
import { DEFAULT_MEDIA_BREAKPOINTS, NbMediaBreakpointsService, } from './services/breakpoints.service';
var NbThemeModule = NbThemeModule_1 = (function () {
    function NbThemeModule() {
    }
    // TODO: check the options (throw exception?)
    /**
     * Main Theme Module
     *
     * @param nbThemeOptions {NbThemeOptions} Main theme options
     * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
     * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
     *
     * @returns {ModuleWithProviders}
     */
    NbThemeModule.forRoot = function (nbThemeOptions, nbJSThemes, nbMediaBreakpoints) {
        return {
            ngModule: NbThemeModule_1,
            providers: [
                { provide: nbThemeOptionsToken, useValue: nbThemeOptions || {} },
                { provide: nbBuiltInJSThemesToken, useValue: BUILT_IN_THEMES },
                { provide: nbJSThemesToken, useValue: nbJSThemes || [] },
                { provide: nbMediaBreakpointsToken, useValue: nbMediaBreakpoints || DEFAULT_MEDIA_BREAKPOINTS },
                NbJSThemesRegistry,
                NbThemeService,
                NbMediaBreakpointsService,
                NbSpinnerService,
            ],
        };
    };
    return NbThemeModule;
}());
NbThemeModule = NbThemeModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
        ],
        exports: [],
    })
], NbThemeModule);
export { NbThemeModule };
var NbThemeModule_1;
//# sourceMappingURL=theme.module.js.map