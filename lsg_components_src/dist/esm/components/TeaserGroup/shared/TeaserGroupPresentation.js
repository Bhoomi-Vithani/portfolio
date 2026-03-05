import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { fragmentMap } from '../../../utils/ReactUtils.js';
import { hostClass } from './TeaserGroup.styles.js';

// @ts-strict-ignore
const TeaserGroupPresentation = ({ id, children, className, noMargin, hasFocusTeaser, groupImageRatio = "16-9", groupHeadlineSize = "h4", groupHeadlineAs, }) => (React__default.createElement(Host, { id: id, className: cleanupClassObject({
        [className]: !!className,
        [hostClass]: true,
        [`${lsgPre}no-margin`]: noMargin,
        [`${lsgPre}teaser-group-focus-topic`]: hasFocusTeaser,
    }), as: "ul" }, fragmentMap(children, (child) => React__default.cloneElement(child, {
    as: "li",
    imageRatio: groupImageRatio,
    headlineSize: groupHeadlineSize,
    headlineAs: groupHeadlineAs,
}))));
TeaserGroupPresentation.displayName = "TeaserGroupPresentation";

export { TeaserGroupPresentation };
