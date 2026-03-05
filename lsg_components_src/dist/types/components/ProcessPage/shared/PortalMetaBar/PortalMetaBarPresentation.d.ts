import React from "react";
export interface PortalMetaBarPresentationProps {
    footerNavigationAriaLabel?: string;
}
/**
 * PortalMetaBar
 * For CCB usage only and internally referenced by ProcessPage:
 * If ProcessPage ´hasPortalFooter´ is true, the footer menu is taken from the json script tags that are sent with the page.
 */
export declare const PortalMetaBarPresentation: {
    ({ footerNavigationAriaLabel }: PortalMetaBarPresentationProps): React.JSX.Element;
    displayName: string;
};
