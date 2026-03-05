import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { fragmentCount, fragmentMap } from '../../../utils/ReactUtils.js';
import { hostClass } from './Breadcrumbs.styles.js';

// @ts-strict-ignore
const BreadcrumbsPresentation = ({ id, children, className, alwaysVisible, separatorBottom, noMargin, title = texts.lsg.component.BreadCrumbs.title, }) => {
    const numChildren = fragmentCount(children);
    return (React__default.createElement(Host, { id: id, as: "nav", className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${hostClass}__hide-sm`]: !alwaysVisible,
            [`${hostClass}__separator`]: separatorBottom,
            [`${lsgPre}no-margin`]: noMargin,
        }), htmlAttrs: { "aria-label": title } },
        React__default.createElement("ol", { className: `${hostClass}-ol`, role: "list" // Because of style-type: none - Safari Bug: https://web.dev/articles/creative-list-styling?hl=de#styling_lists_that_dont_look_like_lists
         }, fragmentMap(children, (child, i) => React__default.cloneElement(child, i === numChildren - 1
            ? {
                htmlAttrs: {
                    ...child.props.htmlAttrs,
                    "aria-current": child.props.htmlAttrs?.["aria-current"] ?? "page",
                },
            }
            : {})))));
};
BreadcrumbsPresentation.displayName = "BreadcrumbsPresentation";

export { BreadcrumbsPresentation };
