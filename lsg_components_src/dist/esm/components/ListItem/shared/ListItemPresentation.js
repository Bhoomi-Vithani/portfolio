import React__default from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { hostClass } from './ListItem.styles.js';
import { lsgPre } from '../../../config/prefix.js';

// @ts-strict-ignore
const ListItemPresentation = ({ id, className, icon, iconColor, iconLabel, value, children, itemIndex, markerText, }) => {
    const explicitMarker = markerText ?? (itemIndex && itemIndex.length ? itemIndex.join(".") : undefined);
    return (React__default.createElement("li", { className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
        }), id: id, value: value },
        icon && React__default.createElement(IconPresentation, { icon: icon, size: "small", color: iconColor, noMargin: true, title: iconLabel }),
        explicitMarker && (React__default.createElement("span", { className: `${lsgPre}list__marker` },
            explicitMarker,
            ".")),
        React__default.createElement("span", null, children)));
};
ListItemPresentation.displayName = "ListItemPresentation";

export { ListItemPresentation };
