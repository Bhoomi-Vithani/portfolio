import React__default from 'react';
import { texts } from '../../../../utils/Localization.js';
import { getData, mapTree } from '../../../../utils/WrapperHelper.js';
import { NavigationLinkWrapper } from '../../../_NavigationLink/NavigationLinkWrapper.js';
import { NavigationLinkGroupPresentation } from '../../../_NavigationLinkGroup/NavigationLinkGroupPresentation.js';

// @ts-strict-ignore
/**
 * PortalMetaBar
 * For CCB usage only and internally referenced by ProcessPage:
 * If ProcessPage ´hasPortalFooter´ is true, the footer menu is taken from the json script tags that are sent with the page.
 */
const PortalMetaBarPresentation = ({ footerNavigationAriaLabel }) => {
    const data = getData();
    if (!data.navigationData || !Object.keys(data.navigationData).length) {
        // render nothing because data is missing
        return React__default.createElement("div", null);
    }
    const channel = window.ccb_cif?.channel;
    const isLogin = data?.applicationData?.loginStatus !== "FULL_LOGIN";
    const isFk = channel === "MSB_CB-WEB";
    const footerTree = data.navigationData?.footerNavigation?.map(tree => mapTree(tree, isLogin, isFk));
    const footerNavigationAriaLabelText = footerNavigationAriaLabel || texts.lsg.component.ProcessPage.footerNavigationAriaLabel;
    return (React__default.createElement("nav", { "aria-label": footerNavigationAriaLabelText },
        React__default.createElement(NavigationLinkGroupPresentation, { centeredLayout: true }, footerTree
            ?.filter(item => item.inFooter.includes("reduced"))
            .map((item, i) => (React__default.createElement(NavigationLinkWrapper, { key: `${i}`, href: item.href, htmlAttrs: item.target ? { target: item.target } : undefined }, item.label))))));
};
PortalMetaBarPresentation.displayName = "PortalMetaBarPresentation";

export { PortalMetaBarPresentation };
