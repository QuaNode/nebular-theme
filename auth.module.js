/*jshint esversion: 6 */
import {
    NgModule
} from '@angular/core';

import {
    CommonModule
} from '@angular/common';

import {
    RouterModule, Router
} from '@angular/router';

import {
    FormsModule
} from '@angular/forms';

import {
    HttpClientModule
} from '@angular/common/http';

import {
    NbLayoutModule,
    NbCardModule,
    NbCheckboxModule
} from '@nebular/theme';

import {
    NbAuthComponent
} from './components/auth.component';

import {
    NbAuthBlockComponent
} from './components/auth-block/auth-block.component';

import {
    NbLoginComponent
} from './components/login/login.component';

import {
    NbRegisterComponent
} from './components/register/register.component';

import {
    NbLogoutComponent
} from './components/logout/logout.component';

import {
    NbRequestPasswordComponent
} from './components/request-password/request-password.component';

import {
    NbResetPasswordComponent
} from './components/reset-password/reset-password.component';

import {
    routes
} from './auth.routes';

import {
    Http,
    HttpModule
} from '@angular/http';

import {
    Behaviours
} from 'ng-behaviours';

var NbAuthModule = /** @class */ (function () {

    function NbAuthModule() {}
    NbAuthModule.forRoot = function (getBehaviours) {

        return {

            ngModule: NbAuthModule,
            providers: [{

                provide: Behaviours,
                useFactory: getBehaviours,
                deps: [Http, Router]
            }],
        };
    };
    NbAuthModule.decorators = [{

        type: NgModule,
        args: [{

            imports: [
                CommonModule,
                NbLayoutModule,
                NbCardModule,
                NbCheckboxModule,
                RouterModule.forChild(routes),
                FormsModule,
                HttpClientModule,
                HttpModule
            ],
            declarations: [
                NbAuthComponent,
                NbAuthBlockComponent,
                NbLoginComponent,
                NbRegisterComponent,
                NbRequestPasswordComponent,
                NbResetPasswordComponent,
                NbLogoutComponent,
            ],
            exports: [
                NbAuthComponent,
                NbLoginComponent,
                NbRegisterComponent,
                NbRequestPasswordComponent,
                NbResetPasswordComponent,
                NbLogoutComponent,
            ],
        }, ]
    }];
    return NbAuthModule;
}());
export {

    NbAuthModule
};
//# sourceMappingURL=auth.module.js.map
