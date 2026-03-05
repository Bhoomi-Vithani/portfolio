import { Children, isValidElement } from 'react';
import { isFragment } from 'react-is';

// @ts-strict-ignore
const flatten = (children) => Children.toArray(children).flatMap(child => {
    if (isFragment(child)) {
        return flatten(child.props.children);
    }
    // array and array-like children
    // TODO check for iterator more robustly
    if (typeof child === "object" && typeof child[Symbol.iterator] === "function") {
        // @ts-ignore
        return [...child];
    }
    return [child];
});
const mapFragment = (childList, callback, includeString = false) => {
    const result = [];
    let index = 0;
    for (const child of childList) {
        if (isValidElement(child) || (includeString && typeof child === "string")) {
            result.push(callback(child, index++));
        }
        else {
            result.push(child);
        }
    }
    return result;
};
const fragmentMap = (children, callback, includeString = false) => mapFragment(flatten(Children.toArray(children)), callback, includeString);
const fragmentMapReverse = (children, callback, includeString = false) => mapFragment(flatten(Children.toArray(children)).reverse(), callback, includeString);
const fragmentCount = (children, includeString = false) => Children.toArray(children).reduce((count, child) => {
    if (isFragment(child)) {
        return count + fragmentCount(child.props.children);
    }
    if (isValidElement(child) || (includeString && typeof child === "string")) {
        return count + 1;
    }
    return count;
}, 0);

export { fragmentCount, fragmentMap, fragmentMapReverse };
