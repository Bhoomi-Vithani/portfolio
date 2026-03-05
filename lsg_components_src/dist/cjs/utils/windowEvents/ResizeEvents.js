'use strict';

var RegisterEventHandler = require('./RegisterEventHandler.js');

// @ts-strict-ignore
let resizeCallbacks = [];
let ratioCallbacks = [];
let viewportCallbacks = [];
let viewport;
let eventHandler;
let initialViewportSize;
/** Method for getting the viewport size change. Use `getInitialViewportSize` if the component is not hydrated */
function getViewportSize() {
  if (typeof document === "undefined") {
    return initialViewportSize || "xs";
  }
  return document.body && window.getComputedStyle(document.body, ":after").content.replace(/["']/g, "");
}
/** Method for setting the viewport size inside the constructor or before the component is hydrated into the DOM */
const setInitialViewportSize = v => initialViewportSize = v;
/** Method for getting the viewport size inside the constructor or before the component is hydrated into the DOM */
const getInitialViewportSize = () => initialViewportSize || "xs";
const runCallbacks = () => {
  eventHandler.unsetRunning();
  const newViewport = getViewportSize();
  if (viewport !== newViewport) {
    viewport = newViewport;
    viewportCallbacks.forEach(callback => {
      // make sure, that meanwhile, the callback has not been removed from the list.
      if (viewportCallbacks.includes(callback)) {
        callback(newViewport);
      }
    });
  }
  const ratio = window.innerWidth / window.innerHeight;
  resizeCallbacks.forEach(callback => {
    // make sure, that meanwhile, the callback has not been removed from the list.
    if (resizeCallbacks.includes(callback)) {
      callback();
    }
  });
  ratioCallbacks.forEach(callbackObject => {
    // make sure, that meanwhile, the callbackObject has not been removed from the list.
    if (ratioCallbacks.includes(callbackObject)) {
      const {
        minRatio,
        lastResult,
        callback
      } = callbackObject;
      const currentResult = ratio >= minRatio;
      if (currentResult !== lastResult) {
        callback(currentResult);
        // eslint-disable-next-line no-param-reassign
        callbackObject.lastResult = currentResult;
      }
    }
  });
};
const tryRegisterHandler = () => {
  eventHandler = eventHandler || RegisterEventHandler.registerEventHandler("resize", runCallbacks);
  viewport = viewport || getViewportSize();
};
const tryUnregisterHandler = () => {
  if (!resizeCallbacks.length && !ratioCallbacks.length && !viewportCallbacks.length && eventHandler) {
    eventHandler.unsubscribe();
    eventHandler = undefined;
  }
};
const addResizeCallback = callback => {
  tryRegisterHandler();
  resizeCallbacks.push(callback);
  callback();
};
const addViewportCallback = callback => {
  tryRegisterHandler();
  viewportCallbacks.push(callback);
  callback(getViewportSize());
};
const removeResizeCallback = callback => {
  resizeCallbacks = resizeCallbacks.filter(c => c !== callback);
  tryUnregisterHandler();
};
const removeViewportCallback = callback => {
  viewportCallbacks = viewportCallbacks.filter(c => c !== callback);
  tryUnregisterHandler();
};

exports.addResizeCallback = addResizeCallback;
exports.addViewportCallback = addViewportCallback;
exports.getInitialViewportSize = getInitialViewportSize;
exports.getViewportSize = getViewportSize;
exports.removeResizeCallback = removeResizeCallback;
exports.removeViewportCallback = removeViewportCallback;
exports.setInitialViewportSize = setInitialViewportSize;
