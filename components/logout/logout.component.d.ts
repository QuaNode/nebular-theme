/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
export declare class NbLogoutComponent implements OnInit {
    protected config: {};
    protected router: Router;
    redirectDelay: number;
    provider: string;
    constructor(router: Router);
    ngOnInit(): void;
    logout(provider: string): void;
    getConfigValue(key: string): any;
}
