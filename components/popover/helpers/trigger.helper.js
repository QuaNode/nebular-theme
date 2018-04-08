import { fromEvent as observableFromEvent } from 'rxjs/observable/fromEvent';
import { empty as observableEmpty } from 'rxjs/observable/empty';
import { NbPopoverMode } from './model';
import { filter } from 'rxjs/operators/filter';
import { delay } from 'rxjs/operators/delay';
import { takeWhile } from 'rxjs/operators/takeWhile';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { switchMap } from 'rxjs/operators/switchMap';
import { repeat } from 'rxjs/operators/repeat';
import { takeUntil } from 'rxjs/operators/takeUntil';
/**
 * Describes popover triggers strategies based on popover {@link NbPopoverMode} mode.
 * */
var NB_TRIGGERS = (_a = {},
    /**
     * Creates toggle and close events streams based on popover {@link NbPopoverMode#CLICK} mode.
     * Fires toggle event when click was performed on the host element.
     * Fires close event when click was performed on the document but
     * not on the host or container or popover container isn't rendered yet.
     *
     * @param host {HTMLElement} popover host element.
     * @param getContainer {Function} popover container getter.
     *
     * @return {NbPopoverTrigger} open and close events streams.
     * */
    _a[NbPopoverMode.CLICK] = /**
       * Creates toggle and close events streams based on popover {@link NbPopoverMode#CLICK} mode.
       * Fires toggle event when click was performed on the host element.
       * Fires close event when click was performed on the document but
       * not on the host or container or popover container isn't rendered yet.
       *
       * @param host {HTMLElement} popover host element.
       * @param getContainer {Function} popover container getter.
       *
       * @return {NbPopoverTrigger} open and close events streams.
       * */
    function (host, getContainer) {
        return {
            open: observableEmpty(),
            close: observableFromEvent(document, 'click')
                .pipe(filter(function (event) {
                return !host.contains(event.target)
                    && getContainer()
                    && !getContainer().location.nativeElement.contains(event.target);
            })),
            toggle: observableFromEvent(host, 'click'),
        };
    },
    /**
     * Creates open and close events streams based on popover {@link NbPopoverMode#HOVER} mode.
     * Fires open event when mouse hovers over the host element and stay over at least 100 milliseconds.
     * Fires close event when mouse leaves the host element and stops out of the host and popover container.
     *
     * @param host {HTMLElement} popover host element.
     * @param getContainer {Function} popover container getter.
     *
     * @return {NbPopoverTrigger} open and close events streams.
     * */
    _a[NbPopoverMode.HOVER] = /**
       * Creates open and close events streams based on popover {@link NbPopoverMode#HOVER} mode.
       * Fires open event when mouse hovers over the host element and stay over at least 100 milliseconds.
       * Fires close event when mouse leaves the host element and stops out of the host and popover container.
       *
       * @param host {HTMLElement} popover host element.
       * @param getContainer {Function} popover container getter.
       *
       * @return {NbPopoverTrigger} open and close events streams.
       * */
    function (host, getContainer) {
        return {
            open: observableFromEvent(host, 'mouseenter')
                .pipe(delay(100), takeUntil(observableFromEvent(host, 'mouseleave')), repeat()),
            close: observableFromEvent(host, 'mouseleave')
                .pipe(switchMap(function () {
                return observableFromEvent(document, 'mousemove')
                    .pipe(debounceTime(100), takeWhile(function () { return !!getContainer(); }), filter(function (event) {
                    return !host.contains(event.target)
                        && !getContainer().location.nativeElement.contains(event.target);
                }));
            })),
            toggle: observableEmpty(),
        };
    },
    /**
     * Creates open and close events streams based on popover {@link NbPopoverMode#HOVER} mode.
     * Fires open event when mouse hovers over the host element and stay over at least 100 milliseconds.
     * Fires close event when mouse leaves the host element.
     *
     * @param host {HTMLElement} popover host element.
     *
     * @return {NbPopoverTrigger} open and close events streams.
     * */
    _a[NbPopoverMode.HINT] = /**
       * Creates open and close events streams based on popover {@link NbPopoverMode#HOVER} mode.
       * Fires open event when mouse hovers over the host element and stay over at least 100 milliseconds.
       * Fires close event when mouse leaves the host element.
       *
       * @param host {HTMLElement} popover host element.
       *
       * @return {NbPopoverTrigger} open and close events streams.
       * */
    function (host) {
        return {
            open: observableFromEvent(host, 'mouseenter')
                .pipe(delay(100), takeUntil(observableFromEvent(host, 'mouseleave')), repeat()),
            close: observableFromEvent(host, 'mouseleave'),
            toggle: observableEmpty(),
        };
    },
    _a);
var NbTriggerHelper = /** @class */ (function () {
    function NbTriggerHelper() {
    }
    /**
     * Creates open and close events streams based on popover {@link NbPopoverMode} mode.
     *
     * @param host {HTMLElement} popover host element.
     * @param getContainer {Function} popover container getter.
     * Getter required because listen can be called when container isn't initialized.
     * @param mode {NbPopoverMode} describes container triggering strategy.
     *
     * @return {NbPopoverTrigger} open and close events streams.
     * */
    /**
       * Creates open and close events streams based on popover {@link NbPopoverMode} mode.
       *
       * @param host {HTMLElement} popover host element.
       * @param getContainer {Function} popover container getter.
       * Getter required because listen can be called when container isn't initialized.
       * @param mode {NbPopoverMode} describes container triggering strategy.
       *
       * @return {NbPopoverTrigger} open and close events streams.
       * */
    NbTriggerHelper.createTrigger = /**
       * Creates open and close events streams based on popover {@link NbPopoverMode} mode.
       *
       * @param host {HTMLElement} popover host element.
       * @param getContainer {Function} popover container getter.
       * Getter required because listen can be called when container isn't initialized.
       * @param mode {NbPopoverMode} describes container triggering strategy.
       *
       * @return {NbPopoverTrigger} open and close events streams.
       * */
    function (host, getContainer, mode) {
        var createTrigger = NB_TRIGGERS[mode];
        return createTrigger.call(NB_TRIGGERS, host, getContainer);
    };
    return NbTriggerHelper;
}());
export { NbTriggerHelper };
var _a;
//# sourceMappingURL=trigger.helper.js.map