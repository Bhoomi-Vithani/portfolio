import React__default from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { fragmentMap } from '../../../utils/ReactUtils.js';
import { ParagraphPresentation } from '../../Paragraph/shared/ParagraphPresentation.js';
import { hostClass } from './ChipsGroup.styles.js';

// @ts-strict-ignore
const ChipsTogglePresentation = ({ direction = "wrap", appearance = "default", ...props }) => {
    const { id: idProp, name, groupLabel, as = "fieldset", className } = props;
    const id = useUniqueId(`${hostClass}-`, idProp);
    /** If as is set to fieldset, we render a div with role="group" to simulate a fieldset. */
    const asFieldset = as === "fieldset";
    /** If as is set to Fieldset, the content component should only be a div. */
    const Component = asFieldset ? "div" : as;
    const groupLabelId = useUniqueId(`${hostClass}`, id);
    // GroupName, ItemName important step for correct radio focus
    const groupName = useUniqueId(`${hostClass}-name-`, name);
    const needsScrollArea = ["condensed", "scroll"].includes(direction);
    return (React__default.createElement("div", { id: `${id}-base`, className: cleanupClassObject({
            [hostClass]: true,
            [className]: !!className,
        }), ...(asFieldset && {
            /*
             * This div was originally intended to be a fieldset in order to implement https://www.w3.org/WAI/WCAG21/Techniques/html/H71 .
             * But due to requirements regarding horizontal scrolling and design, the Legend couldn't be its first child.
             * Therefore we use role="group" and reference the Label.
             * https://www.accessibility-developer-guide.com/examples/forms/grouping-with-fieldset-legend/#legend-must-be-a-direct-child-of-fieldset
             */
            role: "group",
            "aria-labelledby": groupLabelId,
        }) },
        React__default.createElement(ParagraphPresentation, { className: cleanupClassObject({
                [`${hostClass}-group-label`]: true,
                [`${hostClass}-no-group-label`]: appearance === "no-text" || groupLabel.trim() === "",
            }), id: groupLabelId, noMargin: true }, groupLabel),
        React__default.createElement("div", { className: cleanupClassObject({ [`${hostClass}-scrollarea`]: needsScrollArea }) },
            React__default.createElement(Component, { id: id, className: cleanupClassObject({
                    [`${hostClass}-group`]: true,
                    [`${hostClass}-inner-group__${direction}`]: true,
                }), "aria-labelledby": !asFieldset ? groupLabelId : undefined }, props.type === "radio"
                ? fragmentMap(props.children, (child, index) => {
                    const nameChild = child.props.name || `${id}-${index}`;
                    return React__default.cloneElement(child, {
                        name: nameChild,
                        value: props.value === nameChild,
                        onChange: (_value, chName, event) => props.onChange(chName, props.name, event),
                        htmlAttrs: { ...child.props.htmlAttrs, name: groupName },
                        type: "radio",
                        as: props.as === "ol" || props.as === "ul" ? "li" : "div",
                    });
                })
                : fragmentMap(props.children, (child) => React__default.cloneElement(child, {
                    type: "checkbox",
                    as: props.as === "ol" || props.as === "ul" ? "li" : "div",
                }))))));
};

export { ChipsTogglePresentation };
