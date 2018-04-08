import { NbPositioningHelper } from './positioning.helper';
import { NbPopoverAdjustment, NbPopoverPlacement } from './model';
/**
 * Describes the bypass order of the {@link NbPopoverPlacement} in the {@link NbPopoverAdjustment}.
 * */
var NB_ORDERED_PLACEMENTS = (_a = {},
    _a[NbPopoverAdjustment.CLOCKWISE] = [
        NbPopoverPlacement.TOP,
        NbPopoverPlacement.RIGHT,
        NbPopoverPlacement.BOTTOM,
        NbPopoverPlacement.LEFT,
    ],
    _a[NbPopoverAdjustment.COUNTERCLOCKWISE] = [
        NbPopoverPlacement.TOP,
        NbPopoverPlacement.LEFT,
        NbPopoverPlacement.BOTTOM,
        NbPopoverPlacement.RIGHT,
    ],
    _a);
var NbAdjustmentHelper = /** @class */ (function () {
    function NbAdjustmentHelper() {
    }
    /**
     * Calculated {@link NbPopoverPosition} based on placed element, host element,
     * placed element placement and adjustment strategy.
     *
     * @param placed {ClientRect} placed element relatively host.
     * @param host {ClientRect} host element.
     * @param placement {NbPopoverPlacement} placed element placement relatively host.
     * @param adjustment {NbPopoverAdjustment} adjustment strategy.
     *
     * @return {NbPopoverPosition} calculated position.
     * */
    /**
       * Calculated {@link NbPopoverPosition} based on placed element, host element,
       * placed element placement and adjustment strategy.
       *
       * @param placed {ClientRect} placed element relatively host.
       * @param host {ClientRect} host element.
       * @param placement {NbPopoverPlacement} placed element placement relatively host.
       * @param adjustment {NbPopoverAdjustment} adjustment strategy.
       *
       * @return {NbPopoverPosition} calculated position.
       * */
    NbAdjustmentHelper.adjust = /**
       * Calculated {@link NbPopoverPosition} based on placed element, host element,
       * placed element placement and adjustment strategy.
       *
       * @param placed {ClientRect} placed element relatively host.
       * @param host {ClientRect} host element.
       * @param placement {NbPopoverPlacement} placed element placement relatively host.
       * @param adjustment {NbPopoverAdjustment} adjustment strategy.
       *
       * @return {NbPopoverPosition} calculated position.
       * */
    function (placed, host, placement, adjustment) {
        var placements = NB_ORDERED_PLACEMENTS[adjustment].slice();
        var ordered = NbAdjustmentHelper.orderPlacements(placement, placements);
        var possible = ordered.map(function (pl) {
            return ({
                position: NbPositioningHelper.calcPosition(placed, host, pl),
                placement: pl,
            });
        });
        return NbAdjustmentHelper.chooseBest(placed, possible);
    };
    /**
     * Searches first adjustment which doesn't go beyond the viewport.
     *
     * @param placed {ClientRect} placed element relatively host.
     * @param possible {NbPopoverPosition[]} possible positions list ordered according to adjustment strategy.
     *
     * @return {NbPopoverPosition} calculated position.
     * */
    /**
       * Searches first adjustment which doesn't go beyond the viewport.
       *
       * @param placed {ClientRect} placed element relatively host.
       * @param possible {NbPopoverPosition[]} possible positions list ordered according to adjustment strategy.
       *
       * @return {NbPopoverPosition} calculated position.
       * */
    NbAdjustmentHelper.chooseBest = /**
       * Searches first adjustment which doesn't go beyond the viewport.
       *
       * @param placed {ClientRect} placed element relatively host.
       * @param possible {NbPopoverPosition[]} possible positions list ordered according to adjustment strategy.
       *
       * @return {NbPopoverPosition} calculated position.
       * */
    function (placed, possible) {
        return possible.find(function (adjust) { return NbAdjustmentHelper.inViewPort(placed, adjust); }) || possible.shift();
    };
    /**
     * Finds out is adjustment doesn't go beyond of the view port.
     *
     * @param placed {ClientRect} placed element relatively host.
     * @param position {NbPopoverPosition} position of the placed element.
     *
     * @return {boolean} true if placed element completely viewport.
     * */
    /**
       * Finds out is adjustment doesn't go beyond of the view port.
       *
       * @param placed {ClientRect} placed element relatively host.
       * @param position {NbPopoverPosition} position of the placed element.
       *
       * @return {boolean} true if placed element completely viewport.
       * */
    NbAdjustmentHelper.inViewPort = /**
       * Finds out is adjustment doesn't go beyond of the view port.
       *
       * @param placed {ClientRect} placed element relatively host.
       * @param position {NbPopoverPosition} position of the placed element.
       *
       * @return {boolean} true if placed element completely viewport.
       * */
    function (placed, position) {
        return position.position.top - window.pageYOffset > 0
            && position.position.left - window.pageXOffset > 0
            && position.position.top + placed.height < window.innerHeight + window.pageYOffset
            && position.position.left + placed.width < window.innerWidth + window.pageXOffset;
    };
    /**
     * Reorder placements list to make placement start point and fit {@link NbPopoverAdjustment}
     *
     * @param placement {NbPopoverPlacement} active placement
     * @param placements {NbPopoverPlacement[]} placements list according to the active adjustment strategy.
     *
     * @return {NbPopoverPlacement[]} correctly ordered placements list.
     *
     * @example order placements for {@link NbPopoverPlacement#RIGHT} and {@link NbPopoverAdjustment#CLOCKWISE}
     * ```
     * const placements = NB_ORDERED_PLACEMENTS[NbPopoverAdjustment.CLOCKWISE];
     * const ordered = orderPlacement(NbPopoverPlacement.RIGHT, placements);
     *
     * expect(ordered).toEqual([
     *  NbPopoverPlacement.RIGHT,
     *  NbPopoverPlacement.BOTTOM,
     *  NbPopoverPlacement.LEFT,
     *  NbPopoverPlacement.TOP,
     * ]);
     * ```
     * */
    /**
       * Reorder placements list to make placement start point and fit {@link NbPopoverAdjustment}
       *
       * @param placement {NbPopoverPlacement} active placement
       * @param placements {NbPopoverPlacement[]} placements list according to the active adjustment strategy.
       *
       * @return {NbPopoverPlacement[]} correctly ordered placements list.
       *
       * @example order placements for {@link NbPopoverPlacement#RIGHT} and {@link NbPopoverAdjustment#CLOCKWISE}
       * ```
       * const placements = NB_ORDERED_PLACEMENTS[NbPopoverAdjustment.CLOCKWISE];
       * const ordered = orderPlacement(NbPopoverPlacement.RIGHT, placements);
       *
       * expect(ordered).toEqual([
       *  NbPopoverPlacement.RIGHT,
       *  NbPopoverPlacement.BOTTOM,
       *  NbPopoverPlacement.LEFT,
       *  NbPopoverPlacement.TOP,
       * ]);
       * ```
       * */
    NbAdjustmentHelper.orderPlacements = /**
       * Reorder placements list to make placement start point and fit {@link NbPopoverAdjustment}
       *
       * @param placement {NbPopoverPlacement} active placement
       * @param placements {NbPopoverPlacement[]} placements list according to the active adjustment strategy.
       *
       * @return {NbPopoverPlacement[]} correctly ordered placements list.
       *
       * @example order placements for {@link NbPopoverPlacement#RIGHT} and {@link NbPopoverAdjustment#CLOCKWISE}
       * ```
       * const placements = NB_ORDERED_PLACEMENTS[NbPopoverAdjustment.CLOCKWISE];
       * const ordered = orderPlacement(NbPopoverPlacement.RIGHT, placements);
       *
       * expect(ordered).toEqual([
       *  NbPopoverPlacement.RIGHT,
       *  NbPopoverPlacement.BOTTOM,
       *  NbPopoverPlacement.LEFT,
       *  NbPopoverPlacement.TOP,
       * ]);
       * ```
       * */
    function (placement, placements) {
        var index = placements.indexOf(placement);
        var start = placements.splice(index, placements.length);
        return start.concat.apply(start, placements);
    };
    return NbAdjustmentHelper;
}());
export { NbAdjustmentHelper };
var _a;
//# sourceMappingURL=adjustment.helper.js.map