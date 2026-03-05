import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { NavigationBarPresentation } from '../../_NavigationBar/NavigationBarPresentation.js';
import { hostClass } from './FooterMetabar.styles.js';

// @ts-strict-ignore
const FooterMetabarPresentation = ({ id, className, isStencilHost, navigationActionAs, navigationTree, navigationAriaLabel, socialLinks, socialLinksAriaLabel, horizontalAlignment, }) => (React__default.createElement(Host, { id: id, className: cleanupClassObject({
        [className]: !!className,
        [`${hostClass}-centered`]: horizontalAlignment === "center",
        [hostClass]: true,
    }), isStencilHost: isStencilHost, "data-lsg-component": "footer-metabar" },
    navigationTree && (React__default.createElement(NavigationBarPresentation, { className: `${hostClass}__navigation-bar`, size: "meta-bar", value: "", navigationTree: navigationTree, navigationAriaLabel: navigationAriaLabel, navigationActionAs: navigationActionAs, centeredLayout: true })),
    socialLinks?.props?.children && (React__default.createElement("nav", { "aria-label": socialLinksAriaLabel },
        React__default.createElement("ul", { className: `${lsgPre}footer-metabar-sociallinks`, role: "list" // Because of style-type: none - Safari Bug: https://web.dev/articles/creative-list-styling?hl=de#styling_lists_that_dont_look_like_lists
         }, socialLinks.props.children.map((child, i) => (React__default.createElement("li", { key: i, className: `${lsgPre}footer-metabar-sociallink` }, child))))))));
FooterMetabarPresentation.displayName = "FooterMetabarPresentation";

export { FooterMetabarPresentation };
