declare enum Visibility {
    FULLY_VISIBLE = 0,
    TOP_CLIPPED = 1,
    BOTTOM_CLIPPED = 2
}
interface IScrollCallbackEntry {
    callback: (elementIds?: string[]) => void;
    elementIdsToWatch?: string[];
    lastResult: string[];
    offset?: number;
    visibility: Visibility;
}
interface IScrollEvents {
    addScrollCallback: (callback: () => void) => void;
    addVisibilityCallback: (callback: IScrollCallbackEntry["callback"], elementIdsToWatch?: IScrollCallbackEntry["elementIdsToWatch"], visibility?: Visibility, offset?: IScrollCallbackEntry["offset"]) => void;
    addStickyElement: (name: string, elm: HTMLElement) => void;
    getStickyElements: () => Array<{
        name: string;
        elm: HTMLElement;
    }>;
    getStickyElementsHeight: () => number;
    removeStickyElement: (name: string) => void;
    removeScrollCallback: (callback: () => void) => void;
    removeVisibilityCallback: (callback: IScrollCallbackEntry["callback"]) => void;
}
/**
 * this function takes in an array of elementIds. Those DOM elements that fulfill the Visibility
 * criterion (Visibility is an enum see above) are returned in an array.
 * You can move the visibility to the top or buttom by a number of pixels by using the offset parameter
 */
declare const isElementInViewport: (elementIds: string[], visibility: Visibility, offset?: IScrollCallbackEntry["offset"], getNearest?: boolean) => string[];
/**
 * registers a callback function for a scroll event
 * After registering, the callback function(s) are executed
 */
declare const addScrollCallback: IScrollEvents["addScrollCallback"];
/**
 * registers a callback function for a visiblility CHANGE event
 * -> i.e. if one or more DOM elements (elementIdsToWatch) move in or out of the Viewport.
 * Visibility is the kind of visiblility (top, bottom, fully visible)
 * You can move the visibility to the top or buttom by a number of pixels by using the offset parameter
 * After registering, the callback function(s) are executed.
 *      -> If the elementId(s) is/are visible in the first place, the visibilityCallback will run with "visible=true"
 *      -> So if a Media component (autoplay=true) is visible in the Viewport in the first place, the video will run.
 */
declare const addVisibilityCallback: IScrollEvents["addVisibilityCallback"];
export declare const addIndicatorCallback: (callback: (id?: string) => void, elementIdsToWatch: string[], offset: number) => void;
declare const addStickyElement: IScrollEvents["addStickyElement"];
declare const getStickyElements: IScrollEvents["getStickyElements"];
declare const getStickyElementsHeight: IScrollEvents["getStickyElementsHeight"];
declare const removeStickyElement: IScrollEvents["removeStickyElement"];
declare const removeScrollCallback: IScrollEvents["removeScrollCallback"];
declare const removeVisibilityCallback: IScrollEvents["removeVisibilityCallback"];
export declare const removeIndicatorCallback: (callback: (id?: string) => void) => void;
export { addScrollCallback, addVisibilityCallback, addStickyElement, getStickyElements, getStickyElementsHeight, removeStickyElement, removeScrollCallback, removeVisibilityCallback, isElementInViewport, Visibility, };
