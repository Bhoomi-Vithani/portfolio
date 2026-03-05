'use strict';

const breakPoints = {
  xxl: 1920,
  xl: 1680,
  lg: 1196,
  md: 1024,
  sm: 640,
  xs: 1 // 0 is falsy (can't do null-checks as we do below if we set xs: 0)
};
const pxToRem = px => `${px / 16}`;
const breakPointsMin = {
  xxl: breakPoints.xxl,
  xl: breakPoints.xl,
  lg: breakPoints.lg,
  md: breakPoints.md,
  sm: breakPoints.sm,
  xs: breakPoints.xs
};
const breakPointsMax = {
  // See https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints
  // The maximum value is calculated as the minimum of the next one less 0.02px to work around the limitations
  // of `min-` and `max-` prefixes and viewports with fractional widths.
  // See https://www.w3.org/TR/mediaqueries-4/#mq-min-max
  // Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
  xl: breakPoints.xxl - 0.02,
  lg: breakPoints.xl - 0.02,
  md: breakPoints.lg - 0.02,
  sm: breakPoints.md - 0.02,
  xs: breakPoints.sm - 0.02
};
function styleViewport(viewport, direction, content) {
  const min = direction === "min" || direction === "exact" ? breakPointsMin[viewport] : undefined;
  const max = direction === "max" || direction === "exact" ? breakPointsMax[viewport] : undefined;
  return `
        @media screen ${min ? `and (min-width: ${pxToRem(min)}rem) ` : ""}${max ? `and (max-width: ${pxToRem(max)}rem) ` : ""} {
            ${content}
        }
    `;
}
const styleViewportSmMin = content => styleViewport("sm", "min", content);
const styleViewportMdMin = content => styleViewport("md", "min", content);
const styleViewportLgMin = content => styleViewport("lg", "min", content);
const styleViewportXlMin = content => styleViewport("xl", "min", content);
const styleViewportXxlMin = content => styleViewport("xxl", "min", content);
const styleViewportXsExact = content => styleViewport("xs", "exact", content);
function getViewportMediaQueryRange(minViewport, maxViewport) {
  return [minViewport && `(min-width: ${pxToRem(breakPointsMin[minViewport])}rem)`, maxViewport && breakPointsMax[maxViewport] && `(max-width: ${pxToRem(breakPointsMax[maxViewport])}rem)`].filter(x => !!x).join(" and ");
}
function styleViewportRange(minViewport, maxViewport, content) {
  return `
        @media screen and ${getViewportMediaQueryRange(minViewport, maxViewport)} {
            ${content}
        }
    `;
}
function getViewportMediaQuery(viewport, direction) {
  const min = direction === "min" || direction === "exact" ? breakPointsMin[viewport] : undefined;
  const max = direction === "max" || direction === "exact" ? breakPointsMax[viewport] : undefined;
  return [min ? `(min-width: ${pxToRem(min)}rem)` : "", max ? `(max-width: ${pxToRem(max)}rem) ` : ""].filter(mq => !!mq).join(" and ");
}
const getViewportMediaQuerySmMin = () => getViewportMediaQuery("sm", "min");
const getViewportMediaQueryMdMin = () => getViewportMediaQuery("md", "min");
const getViewportMediaQueryLgMin = () => getViewportMediaQuery("lg", "min");
const getViewportMediaQueryXlMin = () => getViewportMediaQuery("xl", "min");
const getViewportMediaQueryXxlMin = () => getViewportMediaQuery("xxl", "min");
const getViewportMediaQueryXsExact = () => getViewportMediaQuery("xs", "exact");

exports.breakPoints = breakPoints;
exports.getViewportMediaQuery = getViewportMediaQuery;
exports.getViewportMediaQueryLgMin = getViewportMediaQueryLgMin;
exports.getViewportMediaQueryMdMin = getViewportMediaQueryMdMin;
exports.getViewportMediaQueryRange = getViewportMediaQueryRange;
exports.getViewportMediaQuerySmMin = getViewportMediaQuerySmMin;
exports.getViewportMediaQueryXlMin = getViewportMediaQueryXlMin;
exports.getViewportMediaQueryXsExact = getViewportMediaQueryXsExact;
exports.getViewportMediaQueryXxlMin = getViewportMediaQueryXxlMin;
exports.styleViewport = styleViewport;
exports.styleViewportLgMin = styleViewportLgMin;
exports.styleViewportMdMin = styleViewportMdMin;
exports.styleViewportRange = styleViewportRange;
exports.styleViewportSmMin = styleViewportSmMin;
exports.styleViewportXlMin = styleViewportXlMin;
exports.styleViewportXsExact = styleViewportXsExact;
exports.styleViewportXxlMin = styleViewportXxlMin;
