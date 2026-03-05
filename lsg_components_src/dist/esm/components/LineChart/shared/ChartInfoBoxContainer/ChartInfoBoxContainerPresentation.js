import React__default from 'react';
import { lsgPre } from '../../../../config/prefix.js';
import { cleanupClassObject } from '../../../../utils/DomUtils.js';
import { Host } from '../../../../utils/Host.js';
import { fragmentMap } from '../../../../utils/ReactUtils.js';
import { hostClass } from './ChartInfoBoxContainer.styles.js';

// @ts-strict-ignore
const ChartInfoBoxContainerPresentation = ({ id, children, className, noMargin, isStencilHost, positionTop, positionLeft, look, title, titleFormatter, containerRef, }) => (React__default.createElement(Host, { id: id, className: cleanupClassObject({
        [className]: !!className,
        [hostClass]: true,
        [`${lsgPre}no-margin`]: noMargin,
        [`${hostClass}-${look}`]: look,
    }), isStencilHost: isStencilHost, style: { top: `${positionTop}px`, left: `${positionLeft}px` }, ref: containerRef },
    React__default.createElement("div", { className: `${hostClass}-title` },
        " ",
        titleFormatter ? titleFormatter(title) : title),
    fragmentMap(children, (child) => React__default.cloneElement(child, {
        // overwrite only look is not defined in child, because child first
        look: child.props.look || look,
    }))));
ChartInfoBoxContainerPresentation.displayName = "ChartInfoBoxContainerPresentation";

export { ChartInfoBoxContainerPresentation };
