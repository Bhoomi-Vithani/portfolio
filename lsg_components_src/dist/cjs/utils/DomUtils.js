'use strict';

// @ts-strict-ignore
const isTargetInsideContainer = (target, container) => target && container && (target.parentElement === container || isTargetInsideContainer(target.parentElement, container));
const formatSvgBase64Src = svgString => {
  if (typeof btoa !== "undefined") {
    return `data:image/svg+xml;base64,${btoa(svgString)}`;
  }
  // @ts-ignore
  if (typeof global !== "undefined" && typeof Buffer !== "undefined") {
    // @ts-ignore
    return `data:image/svg+xml;base64,${Buffer.from(svgString, "binary").toString("base64")}`;
  }
};
function cleanupClassNames(classNames) {
  const result = classNames.filter(elm => !!elm).join(" ");
  return result || undefined;
}
function cleanupClassObject(classObject) {
  // note: 0 as a value will be disrespected as well as other undefined values (undefined, null)
  const result = [];
  Object.entries(classObject).forEach(([cssClass, isActive]) => {
    if (isActive) {
      result.push(cssClass);
    }
  });
  return result.join(" ");
}
let time = Date.now();
const getTime = () => {
  time = Math.max(time + 1, Date.now());
  return time;
};
// Checks if the user agent is Safari (includes both macOS Safari and iOS Safari)
// The regular expression ensures "safari" is in the user agent string,
// while "chrome" and "android" are not, to avoid false positives for Chrome or Android browsers
const isSafari = () => {
  if (typeof navigator === "undefined" || typeof navigator.userAgent !== "string") {
    return false;
  }
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};
// deprecated: use useUniqueId hook instead.
// still used in the following Components that are not public and therefore deprecated:
// InputToggle, TabBar
const uniqueId = (prefix = "") => prefix + getTime().toString(36);

exports.cleanupClassNames = cleanupClassNames;
exports.cleanupClassObject = cleanupClassObject;
exports.formatSvgBase64Src = formatSvgBase64Src;
exports.isSafari = isSafari;
exports.isTargetInsideContainer = isTargetInsideContainer;
exports.uniqueId = uniqueId;
