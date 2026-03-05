'use strict';

var React__default = require('react');
var Localization = require('../../../../utils/Localization.js');
var WrapperHelper = require('../../../../utils/WrapperHelper.js');
var NavigationLinkWrapper = require('../../../_NavigationLink/NavigationLinkWrapper.js');
var NavigationLinkGroupPresentation = require('../../../_NavigationLinkGroup/NavigationLinkGroupPresentation.js');

// @ts-strict-ignore
/**
 * PortalMetaBar
 * For CCB usage only and internally referenced by ProcessPage:
 * If ProcessPage ´hasPortalFooter´ is true, the footer menu is taken from the json script tags that are sent with the page.
 */
const PortalMetaBarPresentation = ({
  footerNavigationAriaLabel
}) => {
  const data = WrapperHelper.getData();
  if (!data.navigationData || !Object.keys(data.navigationData).length) {
    // render nothing because data is missing
    return /*#__PURE__*/React__default.createElement("div", null);
  }
  const channel = window.ccb_cif?.channel;
  const isLogin = data?.applicationData?.loginStatus !== "FULL_LOGIN";
  const isFk = channel === "MSB_CB-WEB";
  const footerTree = data.navigationData?.footerNavigation?.map(tree => WrapperHelper.mapTree(tree, isLogin, isFk));
  const footerNavigationAriaLabelText = footerNavigationAriaLabel || Localization.texts.lsg.component.ProcessPage.footerNavigationAriaLabel;
  return /*#__PURE__*/React__default.createElement("nav", {
    "aria-label": footerNavigationAriaLabelText
  }, /*#__PURE__*/React__default.createElement(NavigationLinkGroupPresentation.NavigationLinkGroupPresentation, {
    centeredLayout: true
  }, footerTree?.filter(item => item.inFooter.includes("reduced")).map((item, i) => (/*#__PURE__*/React__default.createElement(NavigationLinkWrapper.NavigationLinkWrapper, {
    key: `${i}`,
    href: item.href,
    htmlAttrs: item.target ? {
      target: item.target
    } : undefined
  }, item.label)))));
};
PortalMetaBarPresentation.displayName = "PortalMetaBarPresentation";

exports.PortalMetaBarPresentation = PortalMetaBarPresentation;
