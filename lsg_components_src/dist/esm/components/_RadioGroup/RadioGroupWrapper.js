import React__default from 'react';
import { lsgPre } from '../../config/prefix.js';
import { useUniqueId } from '../../utils/Hooks/index.js';
import { fragmentMap } from '../../utils/ReactUtils.js';
import { SelectionGroupPresentation } from '../_SelectionGroup/SelectionGroupPresentation.js';

// @ts-strict-ignore
const hostClass = `${lsgPre}radio-group`;
const Child = ({ child, onChange, value, groupName, invalid, name }) => {
    const nameChild = useUniqueId(`${hostClass}-item-name-`, child.props.name);
    return React__default.cloneElement(child, {
        onChange: (_, v, event) => {
            onChange(v, name, event);
        },
        name: nameChild,
        value: value === nameChild,
        invalid: invalid && (value === nameChild || !value),
        htmlAttrs: { ...child.props.htmlAttrs, name: groupName },
    });
};
const RadioGroupWrapper = ({ children, value, invalid, name, onChange = () => {
    /* empty */
}, ...otherProps }) => {
    // GroupName, ItemName important step for correct radio focus
    const groupName = useUniqueId(`${hostClass}-name-`, name);
    return (React__default.createElement(SelectionGroupPresentation, { ...otherProps, invalid: invalid, htmlAttrs: { role: "radiogroup", ...otherProps.htmlAttrs } }, fragmentMap(children, (child, i) => (React__default.createElement(Child, { key: i, child: child, onChange: onChange, name: name, value: value, invalid: child.props.invalid ?? invalid, groupName: groupName })))));
};

export { RadioGroupWrapper, hostClass };
