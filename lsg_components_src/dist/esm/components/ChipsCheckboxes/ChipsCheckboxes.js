import * as React from 'react';
import { ChipsTogglePresentation } from '../Chips/shared/ChipsTogglePresentation.js';
import { ChipsItemCheckbox } from '../ChipsItemCheckbox/ChipsItemCheckbox.js';

const ChipsCheckboxes = ({ direction = "wrap", as = "fieldset", ...props }) => (React.createElement(ChipsTogglePresentation, { direction, as, ...props, type: "checkbox" }, props.children));
ChipsCheckboxes.displayName = "Chips.Checkboxes";
ChipsCheckboxes.Item = ChipsItemCheckbox;

export { ChipsCheckboxes };
