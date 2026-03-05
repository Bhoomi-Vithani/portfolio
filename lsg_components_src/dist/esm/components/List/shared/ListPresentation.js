import React__default, { createContext, useContext } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { fragmentCount, fragmentMap } from '../../../utils/ReactUtils.js';
import { hostClass } from './List.styles.js';

const ListContext = createContext([]);
const ListPresentation = ({ id, children, className, noMargin, isOrdered = false, orderedMode = "numeric", icon, iconColor = "default", iconLabel, textSize = "copy-text", }) => {
    const Component = isOrdered ? "ol" : "ul";
    const parentIndex = useContext(ListContext);
    // If customer does not set a value, we will count the listItem for styling "left-padding"
    const numCharacters = String(Math.max(Number(`${fragmentCount(children)}`.length), ...fragmentMap(children, (child) => child.props.value ? `${child.props.value}`.length : 0)));
    return (React__default.createElement(Component, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}__ordered-${orderedMode}`]: isOrdered,
            [`${hostClass}__unordered-dash`]: !isOrdered && !icon,
            [`${hostClass}__unordered-icon`]: !isOrdered && icon,
            [`${hostClass}-${textSize}`]: true,
            [`${hostClass}__ol-length-${numCharacters}`]: isOrdered && orderedMode !== "alphabetic",
        }), role: !isOrdered && icon ? "list" : undefined }, fragmentMap(children, (child, index) => {
        // Only create a new index path for numerically ordered lists.
        // In all other cases, parentIndex remains unchanged.
        const isNumericOrdered = isOrdered && orderedMode === "numeric";
        const newIndex = isNumericOrdered ? [...parentIndex, index + 1] : parentIndex;
        // explicit marker without dot for visual + screen reader (e.g. "3.1")
        const markerText = isNumericOrdered ? newIndex.join(".") : undefined;
        // Only add the relevant props if needed
        const extraProps = {};
        if (icon && !child.props?.icon) {
            extraProps.icon = icon;
            extraProps.iconColor = iconColor;
            extraProps.iconLabel = iconLabel;
        }
        if (markerText) {
            extraProps.markerText = markerText;
        }
        if (isNumericOrdered) {
            extraProps.itemIndex = newIndex;
        }
        const cloned = React__default.isValidElement(child)
            ? React__default.cloneElement(child, {
                ...extraProps,
            })
            : child;
        // Only provide the context with a new index if numerically ordered.
        // Otherwise, keep the parent index (no numbering for unordered).
        return (React__default.createElement(ListContext.Provider, { value: newIndex, key: index }, cloned));
    })));
};
ListPresentation.displayName = "ListPresentation";

export { ListContext, ListPresentation };
