/*jshint esversion: 6 */
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS } from '../../auth.options';
import { getDeepFromObject } from '../../helpers';
import { NbAuthService } from '../../services/auth.service';
import { Behaviours } from '../../services/common/behaviours';

const router_1 = require('@angular/router');

var NbLoginComponent = /** @class */ (function () {
    function NbLoginComponent(service, config) {
        if (config === void 0) { config = {}; }
        var self = this;                    
        // this.service = service;
        // this.config = config;
        self.router = config;
        self.behaviours = service;
        this.redirectDelay = 0;
        this.showMessages = {};
        // this.provider = '';
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.submitted = false;
        this.socialLinks = [];
        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        // this.provider = this.getConfigValue('forms.login.provider');
        // this.socialLinks = this.getConfigValue('forms.login.socialLinks');
        this.login = function() {
            console.log("Hello Fuck You")
            console.log(self.behaviours)        
            self.behaviours.login(self.user).subscribe(function(response) {

                if (response.authenticated === true) {

                    localStorage.setItem('user', JSON.stringify({
                        privilege: response.privilege,
                        username: response.username,
                        email: response.email,
                        type: response.type,
                        id: response.id, 
                        token: response.token
                    }));
                    if(response.privilege == 'admin') {
                        self.router.navigate(['/pages/tables/checklistParent']);
                    }  else {
                        alert('who are you!')
                    }

                    // if (response.userType <= 3) 
                    // self.router.navigate(['/pages/dashboard']);
                     }
                else {
                    alert('who are you!')
                }
            },
            function(error) {

                // self.user.authenticated = error.message;
                // self.invalidLogin = true;
                console.log('Erorr')
            });
        }

    }

    NbLoginComponent.prototype.getConfigValue = function (key) {
        return getDeepFromObject(this.config, key, null);
    };
    NbLoginComponent.parameters = [
        [new Inject(Behaviours)],
        [new Inject(router_1.Router)]
      ];    
    NbLoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nb-login',
                    template: "\n    <nb-auth-block style=\"background-color: #0599ff\">\n      <h2 class=\"title\" (click)='login()' >Sign In</h2>\n      <small class=\"form-text sub-title\" style=\"color:white;\">Hello! Sign in with your username or email</small>\n\n      <form #form=\"ngForm\" autocomplete=\"nope\">\n\n            <div class=\"form-group\">\n          <label for=\"input-email\" class=\"sr-only\">Email address</label>\n          <input name=\"email\" style=\"background-color:#fff;color:#0599ff; border-color: #a1a1e5\" [(ngModel)]=\"user.email\" id=\"input-email\" pattern=\".+@.+..+\"\n                 class=\"form-control\" placeholder=\"Email address\" #email=\"ngModel\"\n                 [class.form-control-danger]=\"email.invalid && email.touched\" autofocus\n                 [required]=\"getConfigValue('forms.validation.email.required')\">\n          <small style=\"color:white \"class=\"form-text error\" *ngIf=\"email.invalid && email.touched && email.errors?.required\">\n            Email is required!\n          </small>\n          <small class=\"form-text error\"\n                 *ngIf=\"email.invalid && email.touched && email.errors?.pattern\">\n            Email should be the real one!\n          </small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-password\" class=\"sr-only\">Password</label>\n          <input name=\"password\" style=\"background-color:#fff; color:#0599ff; border-color: #a1a1e5\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\"\n                 class=\"form-control\" placeholder=\"Password\" #password=\"ngModel\"\n                 [class.form-control-danger]=\"password.invalid && password.touched\"\n                 [required]=\"getConfigValue('forms.validation.password.required')\"\n                 [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n                 [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\">\n          <small style=\"color:white \" class=\"form-text error\" *ngIf=\"password.invalid && password.touched && password.errors?.required\">\n            Password is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)\">\n            Password should contains\n            from {{ getConfigValue('forms.validation.password.minLength') }}\n            to {{ getConfigValue('forms.validation.password.maxLength') }}\n            characters\n          </small>\n        </div>\n\n             <button [disabled]=\"submitted || !form.valid\" class=\"btn btn-block btn-hero-success\"\n                [class.btn-pulse]=\"submitted\" (click)=\"login()\">\n          Sign In\n        </button>\n      </form>\n\n      </nb-auth-block>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbLoginComponent.ctorParameters = function () { return [
        { type: NbAuthService, },
        { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_OPTIONS,] },] },
        { type: Router, },
        { type: Behaviours }
        ]; };
    return NbLoginComponent;
}());

export { NbLoginComponent };
//# sourceMappingURL=login.component.js.map