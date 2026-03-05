import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { HeadlinePresentation } from '../../Headline/shared/HeadlinePresentation.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { hostClass } from './ArticleList.styles.js';

const ArticleListPresentation = ({ id, children, className, icon, iconColor = "default", iconName, iconVariant = "outline", headline, headlineAs = "h4", headlineId: headlineIdProp, noMargin, horizontalAlignment, }) => {
    const headlineId = useUniqueId(`${hostClass}-`, headlineIdProp);
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [hostClass]: true,
            [className]: !!className,
            [`${lsgPre}no-margin`]: noMargin,
        }) },
        React__default.createElement(IconPresentation, { name: iconName, icon: icon, variant: iconVariant, color: iconColor, size: "medium", horizontalAlignment: horizontalAlignment, title: "" }),
        React__default.createElement(HeadlinePresentation, { as: headlineAs, id: headlineId, size: "h4", horizontalAlignment: horizontalAlignment }, headline),
        React__default.createElement("ul", { className: `${hostClass}-list`, "aria-labelledby": headlineId }, children)));
};
ArticleListPresentation.displayName = "ArticleListPresentation";

export { ArticleListPresentation };
