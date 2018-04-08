import { NbPopoverPlacement } from './model';
var NbPositioningHelper = /** @class */ (function () {
    function NbPositioningHelper() {
    }
    /**
     * Calculates position of the element relatively to the host element based on the placement.
     * */
    /**
       * Calculates position of the element relatively to the host element based on the placement.
       * */
    NbPositioningHelper.calcPosition = /**
       * Calculates position of the element relatively to the host element based on the placement.
       * */
    function (positioned, host, placement) {
        var positionCalculator = NbPositioningHelper.positionCalculator[placement];
        var position = positionCalculator.call(NbPositioningHelper.positionCalculator, positioned, host);
        position.top += window.pageYOffset;
        position.left += window.pageXOffset;
        return position;
    };
    /**
       * Describes height of the popover arrow.
       * */
    NbPositioningHelper.ARROW_SIZE = 10;
    /**
       * Contains position calculators for all {@link NbPopoverPlacement}
       * */
    NbPositioningHelper.positionCalculator = (_a = {},
        _a[NbPopoverPlacement.TOP] = function (positioned, host) {
            return {
                top: host.top - positioned.height - NbPositioningHelper.ARROW_SIZE,
                left: host.left + host.width / 2 - positioned.width / 2,
            };
        },
        _a[NbPopoverPlacement.BOTTOM] = function (positioned, host) {
            return {
                top: host.top + host.height + NbPositioningHelper.ARROW_SIZE,
                left: host.left + host.width / 2 - positioned.width / 2,
            };
        },
        _a[NbPopoverPlacement.LEFT] = function (positioned, host) {
            return {
                top: host.top + host.height / 2 - positioned.height / 2,
                left: host.left - positioned.width - NbPositioningHelper.ARROW_SIZE,
            };
        },
        _a[NbPopoverPlacement.RIGHT] = function (positioned, host) {
            return {
                top: host.top + host.height / 2 - positioned.height / 2,
                left: host.left + host.width + NbPositioningHelper.ARROW_SIZE,
            };
        },
        _a);
    return NbPositioningHelper;
}());
export { NbPositioningHelper };
var _a;
//# sourceMappingURL=positioning.helper.js.map