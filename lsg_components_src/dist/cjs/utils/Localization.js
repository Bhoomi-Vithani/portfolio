'use strict';

var index = require('./resources/index.js');
var de = require('./resources/de.js');

const _fallback = de.de;
let activeLanguage = null;
let customTexts = {};
let customFormats = {};
/**
 * Returns the current browser language.
 * First, the `lang` attribute of the `<html>` element is checked, then the browser language (`navigator.language`).
 * If neither is available or the script is not running in the browser, "de" is returned as a fallback.
 */
const getBrowserLanguage = () => {
  if (typeof document === "undefined") {
    return "de";
  }
  return document.documentElement.getAttribute("lang") || navigator.language || "de";
};
// convert a flat string with dots as a separator to a deep object
// e.g. ('icon.arrow', 'Some description') is converted to {icon: {arrow: 'Some description'}}
const deepen = (name, value) => name.split(".").reverse().reduce((acc, val) => ({
  [val]: acc
}), value);
// deep merge of objects
// e.g. ({icons: {arrow: '->'}}, {icons: {info: 'i'}}, {'icons.plus': '+'})
// is converted to {icons: {arrow: '->', info: 'i', plus: '+'}}
const deepMerge = (target, ...sources) => {
  const additionalSources = [];
  sources.forEach(source => {
    Object.keys(source).forEach(key => {
      const sourceValue = source[key];
      const targetValue = target[key];
      if (key.includes(".")) {
        const sourceMerged = deepen(key, sourceValue);
        additionalSources.push(sourceMerged);
      } else if ((targetValue === undefined || typeof targetValue === "object") && typeof sourceValue === "object") {
        target[key] = deepMerge(targetValue || {}, sourceValue);
      } else if (typeof targetValue !== "object" && typeof sourceValue !== "object") {
        target[key] = sourceValue;
      } else ;
    });
  });
  if (additionalSources.length > 0) {
    return deepMerge(target, ...additionalSources);
  }
  return target;
};
exports.texts = _fallback.texts;
exports.formats = _fallback.formats;
const getDecimalSeparatorByLanguage = locale => {
  // locale = "en"/"en-gb"/"en-us"/"de"/"fr"....
  // in most countries, also in Canada, a decimal separator is an "," e.g 1,00
  // in England or US, a decimal separator is a ".", e.g. 21.00
  const numberWithDecimalSeparator = 1.1;
  let result = ",";
  try {
    // prevent range error if incorrect locale information is provided
    result = numberWithDecimalSeparator.toLocaleString(locale).substring(1, 2);
  } catch (_e) {
    /* do nothing */
  }
  return result;
};
const getThousandsSeparatorByLanguage = locale =>
// locale = "en"/"en-gb"/"en-us"/"de"/"fr"....
// returns a "." for countries with decimal separators = ",", else a ","
// example: 1.000,23 (de) => "."; 1,456.90 (en) => ",";
getDecimalSeparatorByLanguage(locale) === "," ? "." : ",";
const getActiveLanguage = () => activeLanguage || getBrowserLanguage();
const setLanguage = lang => {
  activeLanguage = lang || activeLanguage;
  const regex = /[_-]/;
  const resourceKeyParts = (activeLanguage || getBrowserLanguage()).split(regex);
  const resourceKeyParent = resourceKeyParts[0];
  const resourceKey = resourceKeyParts.join("_");
  // TODO use _.set and _.merge
  exports.texts = deepMerge({}, _fallback.texts, index[resourceKeyParent] && index[resourceKeyParent].texts || {}, index[resourceKey] && index[resourceKey].texts || {}, customTexts);
  exports.formats = {
    ..._fallback.formats,
    ...(index[resourceKeyParent] && index[resourceKeyParent].formats || {}),
    ...(index[resourceKey] && index[resourceKey].formats || {}),
    ...customFormats
  };
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    // deprecated, use setCustomTexts instead.
    exports.texts = deepMerge({}, exports.texts, window.lsgTranslations && window.lsgTranslations.texts || {});
    // deprecated, use setCustomFormats instead.
    exports.formats = {
      ...exports.formats,
      ...(window.lsgTranslations && window.lsgTranslations.formats || {})
    };
  }
};
const setCustomTexts = custTexts => {
  // use this function to set custom texts (SSR-compatible).
  // Example: Setting Texts for the Portal Header
  // this function here: Localization.setCustomTexts({
  //     lsg: {
  //         component: {
  //             PortalHeader: {
  //                 backMenu: "Zurück gehen",
  //                 closeMenu: "Das Menü wieder schließen",
  //                 openMenu: "Das Menü mal öffnen",
  //             },
  //         },
  //     },
  // });
  // the texts must have the same format as the text object in the resources-files (e.g. de.ts)
  // you can use the function getDefaultTexts to get the resource dictionary structure.
  customTexts = custTexts;
  setLanguage();
};
const setCustomFormats = custFormats => {
  // use this function to set custom formats (SSR-compatible)..
  // the formats must have the same format as the format object in the resources-files (e.g. de.ts)
  customFormats = custFormats;
  setLanguage();
};
const UNSAFE_getDefaultTexts = lang => {
  const regex = /[_-]/;
  const resourceKeyParts = lang.split(regex);
  const resourceKeyParent = resourceKeyParts[0];
  const resourceKey = resourceKeyParts.join("_");
  return deepMerge({}, index[resourceKeyParent] && index[resourceKeyParent].texts || {}, index[resourceKey] && index[resourceKey].texts || {});
};
const UNSAFE_getDefaultFormats = lang => {
  const regex = /[_-]/;
  const resourceKeyParts = lang.split(regex);
  const resourceKeyParent = resourceKeyParts[0];
  const resourceKey = resourceKeyParts.join("_");
  return {
    ...(index[resourceKeyParent] && index[resourceKeyParent].formats || {}),
    ...(index[resourceKey] && index[resourceKey].formats || {})
  };
};
const getIconTitle = (name, noDefault) => exports.texts.lsg.icon[name] || !noDefault && exports.texts.lsg.icon._default;
const withField = (text, fields) => Object.entries(fields).reduce((acc, entry) => {
  const searchString = `{{${entry[0]}}}`;
  const replaceString = typeof entry[1] === "number" || typeof entry[1] === "string" ? entry[1] : "";
  return acc.replace(searchString, replaceString);
}, text).replace(/{{.*}}/g, "");
setLanguage();

exports.UNSAFE_getDefaultFormats = UNSAFE_getDefaultFormats;
exports.UNSAFE_getDefaultTexts = UNSAFE_getDefaultTexts;
exports.getActiveLanguage = getActiveLanguage;
exports.getBrowserLanguage = getBrowserLanguage;
exports.getDecimalSeparatorByLanguage = getDecimalSeparatorByLanguage;
exports.getIconTitle = getIconTitle;
exports.getThousandsSeparatorByLanguage = getThousandsSeparatorByLanguage;
exports.setCustomFormats = setCustomFormats;
exports.setCustomTexts = setCustomTexts;
exports.setLanguage = setLanguage;
exports.withField = withField;
