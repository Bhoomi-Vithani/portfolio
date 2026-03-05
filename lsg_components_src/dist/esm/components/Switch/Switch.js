import * as React from 'react';
import '../InputGroup/InputGroup.js';
import '../InputGroup/RadioGroup.js';
import '../InputGroup/CheckboxGroup.js';
import { SwitchGroup } from '../InputGroup/SwitchGroup.js';
import { SwitchWrapper } from './shared/SwitchWrapper.js';

/* eslint-disable react/require-default-props */
const Switch = (props) => React.createElement(SwitchWrapper, { ...props });
Switch.displayName = "Switch";
Switch.Group = SwitchGroup;

export { Switch };
