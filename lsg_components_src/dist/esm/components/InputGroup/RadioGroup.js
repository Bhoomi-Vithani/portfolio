import * as React from 'react';
import { RadioGroupWrapper } from '../_RadioGroup/RadioGroupWrapper.js';

// @ts-strict-ignore
const RadioGroup = (props) => (
// This only doesnt throw an error, because strict mode is disabled.
React.createElement(RadioGroupWrapper, { ...props, value: props.value, label: props.label }));
RadioGroup.displayName = "Radio.Group";

export { RadioGroup };
