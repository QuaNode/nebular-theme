import {
    Component
} from '@angular/core';

import {
    Router
} from '@angular/router';

import {
    getDeepFromObject
} from '../../helpers';

var NbLogoutComponent = /** @class */ (function () {

    function NbLogoutComponent(router, config) {

        if (config === void 0) config = {};
        this.config = config;
        this.router = router;
        this.redirectDelay = 0;
        this.provider = '';
        this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
        this.provider = this.getConfigValue('forms.logout.provider');
    }
    NbLogoutComponent.prototype.ngOnInit = function () {

        this.logout(this.provider);
    };
    NbLogoutComponent.prototype.logout = function () {

    };
    NbLogoutComponent.prototype.getConfigValue = function (key) {

        return getDeepFromObject(this.config, key, null);
    };
    NbLogoutComponent.decorators = [{

        type: Component,
        args: [{

            selector: 'nb-logout',
            template: "\n    <div>Logging out, please wait...</div>\n  ",
        }, ]
    }, ];
    /** @nocollapse */
    NbLogoutComponent.ctorParameters = function () {

        return [{

            type: Router
        }];
    };
    return NbLogoutComponent;
}());
export {
    NbLogoutComponent
};
//# sourceMappingURL=logout.component.js.map