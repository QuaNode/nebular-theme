import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/publish';
/**
 * Menu Item options
 * TODO: check if we need both URL and LINK
 */
export declare abstract class NbMenuItem {
    /**
     * Item Title
     * @type {string}
     */
    title: string;
    /**
     * Item relative link (for routerLink)
     * @type {string}
     */
    link?: string;
    /**
     * Item URL (absolute)
     * @type {string}
     */
    url?: string;
    /**
     * Icon class name
     * @type {string}
     */
    icon?: string;
    /**
     * Expanded by defaul
     * @type {boolean}
     */
    expanded?: boolean;
    /**
     * Children items
     * @type {List<NbMenuItem>}
     */
    children?: NbMenuItem[];
    /**
     * HTML Link target
     * @type {string}
     */
    target?: string;
    /**
     * Hidden Item
     * @type {boolean}
     */
    hidden?: boolean;
    /**
     * Item is selected when partly or fully equal to the current url
     * @type {string}
     */
    pathMatch?: string;
    /**
     * Where this is a home item
     * @type {boolean}
     */
    home?: boolean;
    /**
     * Whether the item is just a group (non-clickable)
     * @type {boolean}
     */
    group?: boolean;
    parent?: NbMenuItem;
    selected?: boolean;
    data?: any;
    fragment?: string;
}
/**
 * Menu Service. Allows you to listen to menu events, or to interact with a menu.
 */
export declare class NbMenuService {
    /**
     * Add items to the end of the menu items list
     * @param {List<NbMenuItem>} items
     * @param {string} tag
     */
    addItems(items: NbMenuItem[], tag?: string): void;
    /**
     * Navigate to the home menu item
     * @param {string} tag
     */
    navigateHome(tag?: string): void;
    /**
     * Returns currently selected item. Won't subscribe to the future events.
     * @param {string} tag
     * @returns {Observable<{tag: string; item: NbMenuItem}>}
     */
    getSelectedItem(tag?: string): Observable<{
        tag: string;
        item: NbMenuItem;
    }>;
    onItemClick(): Observable<{
        tag: string;
        item: NbMenuItem;
    }>;
    onItemSelect(): Observable<{
        tag: string;
        item: NbMenuItem;
    }>;
    onItemHover(): Observable<{
        tag: string;
        item: NbMenuItem;
    }>;
    onSubmenuToggle(): Observable<{
        tag: string;
        item: NbMenuItem;
    }>;
}
export declare class NbMenuInternalService {
    private router;
    private location;
    private items;
    constructor(router: Router, location: Location);
    getItems(): NbMenuItem[];
    prepareItems(items: NbMenuItem[]): void;
    resetItems(items: NbMenuItem[]): void;
    collapseAll(items: NbMenuItem[], except?: NbMenuItem): void;
    onAddItem(): Observable<{
        tag: string;
        items: NbMenuItem[];
    }>;
    onNavigateHome(): Observable<{
        tag: string;
    }>;
    onGetSelectedItem(): Observable<{
        tag: string;
        listener: BehaviorSubject<{
            tag: string;
            item: NbMenuItem;
        }>;
    }>;
    itemHover(item: NbMenuItem, tag?: string): void;
    submenuToggle(item: NbMenuItem, tag?: string): void;
    itemSelect(item: NbMenuItem, tag?: string): void;
    itemClick(item: NbMenuItem, tag?: string): void;
    private resetItem(item);
    private collapseItem(item, except?);
    private setParent(item);
    private prepareItem(item);
    private selectParent(item);
}
