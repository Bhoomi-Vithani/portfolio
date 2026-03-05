import * as React from 'react';
import '../InputGroup/InputGroup.js';
import { RadioGroup } from '../InputGroup/RadioGroup.js';
import '../InputGroup/CheckboxGroup.js';
import '../InputGroup/SwitchGroup.js';
import { RadioWrapper } from './shared/RadioWrapper.js';

const Radio = (props) => React.createElement(RadioWrapper, { ...props });
Radio.displayName = "Radio";
Radio.Group = RadioGroup;

export { Radio };
