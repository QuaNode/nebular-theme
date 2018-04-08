/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbPopoverPlacement } from './model';
export declare class NbPositioningHelper {
    /**
     * Describes height of the popover arrow.
     * */
    private static ARROW_SIZE;
    /**
     * Contains position calculators for all {@link NbPopoverPlacement}
     * */
    private static positionCalculator;
    /**
     * Calculates position of the element relatively to the host element based on the placement.
     * */
    static calcPosition(positioned: ClientRect, host: ClientRect, placement: NbPopoverPlacement): {
        top: number;
        left: number;
    };
}
