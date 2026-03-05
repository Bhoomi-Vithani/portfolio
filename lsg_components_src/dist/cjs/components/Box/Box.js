'use strict';

var React__default = require('react');
var utilityClassesColor_styles = require('../../styles/utilityClassesColor.styles.js');
var utilityClassesScroll_styles = require('../../styles/utilityClassesScroll.styles.js');
var utilityClassesTypo_styles = require('../../styles/utilityClassesTypo.styles.js');
var DomUtils = require('../../utils/DomUtils.js');
var ThemePresentation = require('../Theme/shared/ThemePresentation.js');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__default__namespace = /*#__PURE__*/_interopNamespaceDefault(React__default);

// @ts-strict-ignore
/* eslint-disable etc/no-commented-out-code */
const inscriptionColors = {
  colNeutral1: "colNeutral7",
  colNeutral2: "colNeutral7",
  colNeutral3: "colNeutral7",
  colNeutral4: "colNeutral7",
  colNeutral5: "colBackground",
  colNeutral6: "colBackground",
  colNeutral7: "colBackground",
  colNeutral8: "colBackground",
  colBackground: "colTextPrimary",
  colTextPrimary: "colBackground",
  colTextSupplementary: "colBackground",
  colTextHighlight: "colBackground",
  colActionSecondary: "colBackground",
  colActionSecondaryHover: "colBackground",
  colActionTertiary: "colBackground",
  colActionTertiaryHover: "colBackground",
  colError: "colErrorInscription",
  colWarning: "colWarningInscription",
  colSuccess: "colSuccessInscription",
  colActionInactive: "colBackground",
  colBrandPrimary1: "colBrandPrimary1Inscription",
  secondaryAccent1: "secondaryAccent1Inscription",
  secondaryAccent2: "secondaryAccent2Inscription",
  secondaryAccent3: "secondaryAccent3Inscription",
  secondaryAccent4: "secondaryAccent4Inscription",
  secondaryAccent5: "secondaryAccent5Inscription",
  secondaryAccent6: "secondaryAccent6Inscription"
};
const Box = ({
  id,
  className,
  as = "div",
  children,
  color,
  colorAll,
  colorInscription,
  backgroundColor,
  borderColor,
  strokeColor,
  boxShadow,
  scrollVertical,
  theme,
  themeBackground,
  themeChildren,
  visuallyHidden,
  typo,
  style,
  htmlAttrs
}) => {
  const Component = as;
  return /*#__PURE__*/React__default__namespace.createElement(Component, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: className,
      [utilityClassesColor_styles.utilityClassesColor[color || colorAll || inscriptionColors[colorInscription]]]: color || colorAll || colorInscription,
      [utilityClassesColor_styles.utilityClassesBorder[borderColor]]: borderColor,
      [utilityClassesColor_styles.utilityClassesStroke[strokeColor]]: strokeColor,
      [utilityClassesColor_styles.utilityClassesBackground[backgroundColor]]: backgroundColor,
      [utilityClassesColor_styles.utilityClassesBoxShadow[boxShadow]]: boxShadow,
      [utilityClassesTypo_styles.utilityClassesTypo[typo]]: typo,
      [utilityClassesColor_styles.utilityClassVisuallyHidden]: visuallyHidden,
      [ThemePresentation.getThemeClass(theme)]: theme,
      [ThemePresentation.getThemeBackgroundClass(themeBackground)]: themeBackground,
      [ThemePresentation.getThemeChildrenClass(themeChildren)]: themeChildren,
      [utilityClassesScroll_styles.utilityClassScroll]: scrollVertical
    }),
    style: style,
    ...htmlAttrs
  }, children);
};

exports.Box = Box;
