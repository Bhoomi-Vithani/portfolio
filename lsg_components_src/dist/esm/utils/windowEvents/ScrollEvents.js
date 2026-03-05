import isEqual from 'lodash.isequal';
import { registerEventHandler } from './RegisterEventHandler.js';

// @ts-strict-ignore
var Visibility;
(function (Visibility) {
    Visibility[Visibility["FULLY_VISIBLE"] = 0] = "FULLY_VISIBLE";
    Visibility[Visibility["TOP_CLIPPED"] = 1] = "TOP_CLIPPED";
    Visibility[Visibility["BOTTOM_CLIPPED"] = 2] = "BOTTOM_CLIPPED";
})(Visibility || (Visibility = {}));
let scrollCallbacks = [];
let visibilityCallbacks = [];
let indicatorCallbacks = [];
let stickyElements = [];
let eventHandler;
/**
 * this function takes in an array of elementIds. Those DOM elements that fulfill the Visibility
 * criterion (Visibility is an enum see above) are returned in an array.
 * You can move the visibility to the top or buttom by a number of pixels by using the offset parameter
 */
const isElementInViewport = (elementIds, visibility, offset = 1, getNearest = false) => {
    const result = elementIds.reduce((acc, id) => {
        const target = document.getElementById(id);
        if (!target) {
            return acc;
        }
        const stickyElemHeight = stickyElements.reduce((res, curr) => res + curr.elm.offsetHeight, 0);
        const computedStyle = window.getComputedStyle(target);
        const top = target.getBoundingClientRect().top - parseInt(computedStyle.marginTop, 10);
        const bottom = target.getBoundingClientRect().bottom;
        const offsetTopUpperEdge = top - offset - stickyElemHeight;
        const offsetBottomUpperEdge = bottom - offset - stickyElemHeight;
        const offsetTopLowerEdge = top - window.innerHeight;
        const offsetBottomLowerEdge = bottom - window.innerHeight;
        if (visibility === Visibility.TOP_CLIPPED) {
            const isInTarget = offsetTopUpperEdge < 0 && offsetBottomUpperEdge > 0;
            const isAbove = offsetTopUpperEdge < 0 && offsetBottomUpperEdge < 0;
            const isBelow = offsetTopUpperEdge > 0 && offsetBottomUpperEdge > 0;
            if (isInTarget) {
                acc.targetIds.push(id);
            }
            else if (isAbove) {
                acc.idsAbove.push(id);
            }
            else if (isBelow) {
                acc.idsBelow.push(id);
            }
        }
        else if (visibility === Visibility.BOTTOM_CLIPPED) {
            const isInTarget = offsetTopLowerEdge < 0 && offsetBottomLowerEdge > 0;
            const isAbove = offsetTopLowerEdge < 0 && offsetBottomLowerEdge < 0;
            const isBelow = offsetTopLowerEdge > 0 && offsetBottomLowerEdge > 0;
            if (isInTarget) {
                acc.targetIds.push(id);
            }
            else if (isAbove) {
                acc.idsAbove.push(id);
            }
            else if (isBelow) {
                acc.idsBelow.push(id);
            }
        }
        else if (offsetTopUpperEdge > 0 && offsetBottomLowerEdge < 0) {
            acc.targetIds.push(id);
        }
        return acc;
    }, {
        targetIds: [],
        idsAbove: [],
        idsBelow: [],
    });
    const isAtPageBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
    if (result.targetIds.length > 0) {
        return result.targetIds;
    }
    if (isAtPageBottom && result.idsBelow.length === 1) {
        return [result.idsBelow[0]];
    }
    if (result.idsAbove.length > 0 && result.idsBelow.length > 0) {
        return [result.idsAbove[result.idsAbove.length - 1]];
    }
    if (getNearest) {
        if (result.idsBelow.length > 0) {
            return [result.idsBelow[0]];
        }
        if (result.idsAbove.length > 0) {
            return [result.idsAbove[result.idsAbove.length - 1]];
        }
    }
    return [];
};
const runCallbacks = () => {
    if (eventHandler) {
        eventHandler.unsetRunning();
    }
    visibilityCallbacks.forEach(callbackObject => {
        // make sure, that meanwhile, the callbackObject has not been removed from the list.
        if (visibilityCallbacks.includes(callbackObject)) {
            const { callback, elementIdsToWatch, offset, lastResult, visibility } = callbackObject;
            if (!elementIdsToWatch) {
                callback();
            }
            else {
                const result = isElementInViewport(elementIdsToWatch, visibility, offset);
                if (!isEqual(result, lastResult)) {
                    // eslint-disable-next-line no-param-reassign
                    callbackObject.lastResult = result;
                    callback(result);
                }
            }
        }
    });
    indicatorCallbacks.forEach(callbackObject => {
        // make sure, that meanwhile, the callbackObject has not been removed from the list.
        if (indicatorCallbacks.includes(callbackObject)) {
            const { callback, elementIdsToWatch, offset, lastResult } = callbackObject;
            if (!elementIdsToWatch) {
                callback();
            }
            else {
                const result = isElementInViewport(elementIdsToWatch, Visibility.TOP_CLIPPED, offset, true)[0];
                if (!isEqual(result, lastResult)) {
                    // eslint-disable-next-line no-param-reassign
                    callbackObject.lastResult = result;
                    callback(result);
                }
            }
        }
    });
    scrollCallbacks.forEach(callback => {
        // make sure, that meanwhile, the callback has not been removed from the list.
        if (scrollCallbacks.includes(callback)) {
            callback();
        }
    });
};
const tryRegisterHandler = () => {
    eventHandler = eventHandler || registerEventHandler("scroll", runCallbacks);
};
const tryUnregisterHandler = () => {
    if (!visibilityCallbacks.length && !scrollCallbacks.length && eventHandler) {
        eventHandler.unsubscribe();
        eventHandler = undefined;
    }
};
/**
 * registers a callback function for a scroll event
 * After registering, the callback function(s) are executed
 */
const addScrollCallback = callback => {
    tryRegisterHandler();
    scrollCallbacks.push(callback);
    runCallbacks();
};
/**
 * registers a callback function for a visiblility CHANGE event
 * -> i.e. if one or more DOM elements (elementIdsToWatch) move in or out of the Viewport.
 * Visibility is the kind of visiblility (top, bottom, fully visible)
 * You can move the visibility to the top or buttom by a number of pixels by using the offset parameter
 * After registering, the callback function(s) are executed.
 *      -> If the elementId(s) is/are visible in the first place, the visibilityCallback will run with "visible=true"
 *      -> So if a Media component (autoplay=true) is visible in the Viewport in the first place, the video will run.
 */
const addVisibilityCallback = (callback, elementIdsToWatch, visibility, offset) => {
    tryRegisterHandler();
    visibilityCallbacks.push({
        callback,
        elementIdsToWatch,
        visibility,
        offset,
        lastResult: undefined,
    });
    runCallbacks();
};
const addIndicatorCallback = (callback, elementIdsToWatch, offset) => {
    tryRegisterHandler();
    indicatorCallbacks.push({
        callback,
        elementIdsToWatch,
        offset,
        lastResult: undefined,
    });
    runCallbacks();
};
const removeScrollCallback = callback => {
    scrollCallbacks = scrollCallbacks.filter(c => c !== callback);
    tryUnregisterHandler();
};
const removeIndicatorCallback = (callback) => {
    indicatorCallbacks = indicatorCallbacks.filter(c => c.callback !== callback);
    tryUnregisterHandler();
};

export { Visibility, addIndicatorCallback, addScrollCallback, addVisibilityCallback, isElementInViewport, removeIndicatorCallback, removeScrollCallback };
