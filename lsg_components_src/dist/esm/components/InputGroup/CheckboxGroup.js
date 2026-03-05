import * as React from 'react';
import { InputGroup } from './InputGroup.js';

// @ts-strict-ignore
const CheckboxGroup = (props) => React.createElement(InputGroup, { ...props });
CheckboxGroup.displayName = "Checkbox.Group";

export { CheckboxGroup };
