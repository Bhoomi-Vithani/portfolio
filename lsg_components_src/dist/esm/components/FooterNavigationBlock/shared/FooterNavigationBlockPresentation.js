import * as React from 'react';
import { AccordionWrapper } from '../../Accordion/shared/AccordionWrapper.js';
import { hostClass } from '../../FooterNavigation/shared/FooterNavigation.styles.js';

const FooterNavigationBlockPresentation = ({ children, title, isLargeScreen, footerNavigationBlockAs, ...other }) => {
    const linkList = (React.createElement("ul", { className: `${hostClass}-block-list` }, React.Children.map(children, child => (React.createElement("li", null, child)))));
    const LargeScreenComponent = footerNavigationBlockAs || "h3";
    return isLargeScreen ? (React.createElement("li", { className: `${hostClass}-block` },
        React.createElement(LargeScreenComponent, {
            className: `${hostClass}-block-title`, // set ARIA attributes if footerNavigationBlockAs is not a headline HTML element
            ...(!["h1", "h2", "h3", "h4", "h5", "h6"].includes(LargeScreenComponent) && {
                role: "heading",
                "aria-level": 3,
            }),
        }, title),
        linkList)) : (React.createElement(AccordionWrapper, { ...other, title: title, titleAs: footerNavigationBlockAs }, linkList));
};
FooterNavigationBlockPresentation.displayName = "FooterNavigationBlockPresentation";

export { FooterNavigationBlockPresentation };
