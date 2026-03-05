import * as React from 'react';
import '../InputGroup/InputGroup.js';
import '../InputGroup/RadioGroup.js';
import { CheckboxGroup } from '../InputGroup/CheckboxGroup.js';
import '../InputGroup/SwitchGroup.js';
import { CheckboxWrapper } from './shared/CheckboxWrapper.js';

const Checkbox = (props) => React.createElement(CheckboxWrapper, { ...props });
Checkbox.displayName = "Checkbox";
Checkbox.Group = CheckboxGroup;

export { Checkbox };
