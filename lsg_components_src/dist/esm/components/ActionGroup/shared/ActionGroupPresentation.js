import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useViewportRange } from '../../../utils/Hooks/index.js';
import { fragmentCount, fragmentMap, fragmentMapReverse } from '../../../utils/ReactUtils.js';
import { ButtonGroupWrapper } from '../../ButtonGroup/shared/ButtonGroupWrapper.js';
import { hostClass } from './ActionGroup.styles.js';

// @ts-strict-ignore
const ActionGroupPresentation = ({ id, children, noMargin, className, left, right, centeredLayout = false, horizontalAlignment, ariaLabel, }) => {
    const isDirectionVertical = useViewportRange(undefined, "xs");
    const isSplit = right || (left && children);
    const alignment = centeredLayout === true ? "center" : horizontalAlignment || "left";
    // Logic to be backwards-compatible
    /* Renders in Stories ActionGroupSingle, ActionGroupSingleCentered (variant of ActionGroupSingle),
    ActionGroupSingleLeft, Markenportal-ActionGroupSection (within Grid.Column), Markenportal-ActionGroupSingle. */
    if (!isSplit) {
        return (React__default.createElement(ButtonGroupWrapper, { id: id, horizontalAlignment: alignment, noMargin: noMargin, direction: "flip-xs", key: `${lsgPre}actiongroup-left`, ariaLabel: ariaLabel }, left || children));
    }
    const isList = fragmentCount(right) + fragmentCount(children) + fragmentCount(left) > 1;
    const ListComponent = isList ? "ul" : "div"; // isList is true in each ListComponent Story.
    const ItemComponent = isList ? "li" : "div";
    /* Renders in Stories ActionGroupEdgeCase, Shared-ActionGroupExample, ActionGroupSingleRight,
     Markenportal-ActionGroupExample. */
    return (
    // TODO render as <footer>
    React__default.createElement(ListComponent, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}__${isDirectionVertical ? "vertical" : "horizontal"}`]: true,
        }), "aria-label": ariaLabel },
        fragmentMap(right, (child) => (React__default.createElement(ItemComponent, { className: `${hostClass}-item`, key: child.key }, child))),
        fragmentMap(children, (child) => (React__default.createElement(ItemComponent, { className: `${hostClass}-item`, key: child.key }, child))),
        fragmentMapReverse(left, (child, i) => (
        // gap between left and right side with flexGrow
        React__default.createElement(ItemComponent, { className: `${hostClass}-item`, key: `${i}`, style: { flexGrow: i === 0 ? "1" : undefined } }, child)))));
};
ActionGroupPresentation.displayName = "ActionGroupPresentation";

export { ActionGroupPresentation };
