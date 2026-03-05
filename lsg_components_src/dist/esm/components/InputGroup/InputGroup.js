import * as React from 'react';
import { fragmentMap } from '../../utils/ReactUtils.js';
import { SelectionGroupPresentation } from '../_SelectionGroup/SelectionGroupPresentation.js';
import { RadioGroup } from './RadioGroup.js';

const InputGroup = ({ children, invalid, ...otherProps }) => (React.createElement(SelectionGroupPresentation, { ...otherProps, invalid: invalid }, fragmentMap(children, (child) => React.cloneElement(child, {
    invalid: child.props.invalid ?? invalid,
}))));
InputGroup.Radio = RadioGroup;
InputGroup.displayName = "InputGroup";

export { InputGroup };
