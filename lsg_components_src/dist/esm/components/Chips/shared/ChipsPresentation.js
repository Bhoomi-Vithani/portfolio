import React__default, { useState, useEffect, useCallback } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { fragmentCount, fragmentMap } from '../../../utils/ReactUtils.js';
import { ParagraphPresentation } from '../../Paragraph/shared/ParagraphPresentation.js';
import { hostClass } from './ChipsGroup.styles.js';

// @ts-strict-ignore
const ChipsPresentation = (props) => {
    const { id: idProp, children, groupLabel, appearance, direction, as, noMargin, className, horizontalAlignment, } = props;
    const id = useUniqueId(`${hostClass}-`, idProp);
    const Component = as || "ul";
    const groupLabelId = `${id}-group-label`;
    const [focusIndex, setFocusIndex] = useState(undefined);
    const [numChildren, setNumChildren] = useState(fragmentCount(children));
    const [itemDismissed, setItemDismissed] = useState(false);
    useEffect(() => {
        if (fragmentCount(children) > numChildren) {
            setItemDismissed(false);
        }
        else if (fragmentCount(children) < numChildren) {
            setItemDismissed(true);
        }
        setNumChildren(fragmentCount(children));
    }, [children]);
    // The following steps are triggered, when dismissing an ChipsItemDismissible
    // 1. User Clicks, onDismiss is called in chipItem
    // 2. The application removes the dismissed element from DOM
    // 3. The chip gets unmounted, onFocusLoss is called before
    // 4. The Chips-Group is re-rendered. The Chip that should be focused receives a callback instead of a ref
    // 5. The callback sets a new focus
    const focusItem = useCallback(element => {
        element?.focus();
        setFocusIndex(undefined);
    }, []);
    return (React__default.createElement("div", { className: cleanupClassObject({
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [className]: !!className,
            [`${hostClass}-align-${horizontalAlignment}`]: !!horizontalAlignment,
        }), id: `${id}-base` },
        React__default.createElement(ParagraphPresentation, { className: cleanupClassObject({
                [`${hostClass}-group-label`]: true,
                [`${hostClass}-no-group-label`]: appearance === "no-text" || groupLabel.trim() === "",
            }), id: groupLabelId, noMargin: true }, groupLabel),
        React__default.createElement(Component, { className: cleanupClassObject({
                [`${hostClass}-group`]: true,
                [`${hostClass}-inner-group__${direction || "wrap"}`]: true,
            }), "aria-labelledby": groupLabelId }, Component === "ul" || Component === "ol"
            ? fragmentMap(children, (child, index) => (React__default.createElement("li", { key: child.key }, React__default.cloneElement(child, {
                // TODO user might set a ref here, will be overridden
                ref: focusIndex !== undefined &&
                    index === Math.min(focusIndex, numChildren - 1) &&
                    itemDismissed
                    ? focusItem
                    : // @ts-ignore
                        child.ref,
                onFocusLoss: () => {
                    const newFocusIndex = index === numChildren - 1 ? index - 1 : index;
                    if (newFocusIndex >= 0) {
                        setFocusIndex(newFocusIndex);
                    }
                    else {
                        // Fallback Focus management from user if group is empty
                        props.onFocusLoss();
                    }
                },
            }))))
            : fragmentMap(children, (child, index) => React__default.cloneElement(child, {
                // TODO user might set a ref here, will be overridden
                ref: focusIndex !== undefined &&
                    index === Math.min(focusIndex, numChildren - 1) &&
                    itemDismissed
                    ? focusItem
                    : // @ts-ignore
                        child.ref,
                onFocusLoss: () => {
                    const newFocusIndex = index === numChildren - 1 ? index - 1 : index;
                    if (newFocusIndex >= 0) {
                        setFocusIndex(newFocusIndex);
                    }
                    else {
                        // Fallback Focus management from user if group is empty
                        props.onFocusLoss();
                    }
                },
            })))));
};

export { ChipsPresentation };
