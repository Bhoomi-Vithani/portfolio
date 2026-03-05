'use strict';

var React__default = require('react');
var reactIs = require('react-is');

// @ts-strict-ignore
const flatten = children => React__default.Children.toArray(children).flatMap(child => {
  if (reactIs.isFragment(child)) {
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
    if (/*#__PURE__*/React__default.isValidElement(child) || includeString && typeof child === "string") {
      result.push(callback(child, index++));
    } else {
      result.push(child);
    }
  }
  return result;
};
const fragmentMap = (children, callback, includeString = false) => mapFragment(flatten(React__default.Children.toArray(children)), callback, includeString);
const fragmentMapReverse = (children, callback, includeString = false) => mapFragment(flatten(React__default.Children.toArray(children)).reverse(), callback, includeString);
const fragmentCount = (children, includeString = false) => React__default.Children.toArray(children).reduce((count, child) => {
  if (reactIs.isFragment(child)) {
    return count + fragmentCount(child.props.children);
  }
  if (/*#__PURE__*/React__default.isValidElement(child) || includeString && typeof child === "string") {
    return count + 1;
  }
  return count;
}, 0);

exports.fragmentCount = fragmentCount;
exports.fragmentMap = fragmentMap;
exports.fragmentMapReverse = fragmentMapReverse;
