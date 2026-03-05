import React__default from 'react';
import { lsgPre } from '../../config/prefix.js';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { Host } from '../../utils/Host.js';
import { hostClass } from './InfoAreaItem.styles.js';

// @ts-strict-ignore
const InfoAreaItemPresentation = ({ id, className, noMargin, isStencilHost, overline, variant, value, }) => (React__default.createElement(Host, { id: id, className: cleanupClassObject({
        [className]: !!className,
        [hostClass]: true,
        [`${lsgPre}no-margin`]: noMargin,
        [`${hostClass}-variant__${variant}`]: variant,
    }), isStencilHost: isStencilHost },
    React__default.createElement("div", { className: `${hostClass}-overline` }, overline),
    React__default.createElement("div", { className: `${hostClass}-value` }, value)));
InfoAreaItemPresentation.displayName = "InfoAreaItemPresentation";

export { InfoAreaItemPresentation };
