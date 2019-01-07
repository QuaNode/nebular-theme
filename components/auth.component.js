import {
    Component
} from '@angular/core';

var NbAuthComponent = /** @class */ (function () {
    // showcase of how to use the onAuthenticationChange method
    function NbAuthComponent() {

        this.alive = true;
    }
    NbAuthComponent.prototype.ngOnDestroy = function () {

        this.alive = false;
    };
    NbAuthComponent.decorators = [{
        type: Component,
        args: [{
            selector: 'nb-auth',
            styles: [":host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}:host /deep/ nb-card{height:calc(100vh - 2 * 2.5rem)}:host /deep/ nb-card{margin:0}:host /deep/ .flex-centered{margin:auto}:host /deep/ nb-card-body{display:flex}@media (max-width: 550px){:host /deep/ /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}:host /deep/ nb-card{border-radius:0;height:100vh}} "],
            template: "\n    <nb-layout>\n      <nb-layout-column style=\"background-color: #0599ff\">\n        <nb-card style=\"background-color: #0599ff; box-shadow:none\">\n          <nb-card-body>\n            <div class=\"flex-centered col-xl-4 col-lg-6 col-md-8 col-sm-12\">\n              <router-outlet></router-outlet>\n            </div>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
        }, ]
    }, ];
    return NbAuthComponent;
}());
export {
    NbAuthComponent
};
//# sourceMappingURL=auth.component.js.map