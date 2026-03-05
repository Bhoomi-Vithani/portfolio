import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { fragmentCount, fragmentMap } from '../../../utils/ReactUtils.js';
import { hostClass } from './ActionButtonGroup.styles.js';

// @ts-strict-ignore
const ActionButtonGroupPresentation = ({ id, children, noMargin, className, as: asProp, }) => {
    const forceUl = asProp !== "ul" && asProp !== "li" && fragmentCount(children) > 1;
    const as = forceUl ? "ul" : asProp;
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }), as: as }, fragmentMap(children, (child) => React__default.cloneElement(child, {
        as: as === "ul" || as === "ol" ? "li" : child.props.as,
    }))));
};
ActionButtonGroupPresentation.displayName = "ActionButtonGroupPresentation";

export { ActionButtonGroupPresentation };
