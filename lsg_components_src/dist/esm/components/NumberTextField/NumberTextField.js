import * as React from 'react';
import { NumberTextFieldWrapper } from './shared/NumberTextFieldWrapper.js';

const NumberTextField = ({ optional, readOnly, clearIcon = true, ...otherProps }) => (React.createElement(NumberTextFieldWrapper, { ...otherProps, clearIcon: clearIcon, optional: !!optional, optionalText: typeof optional === "string" ? optional : undefined, readonly: readOnly }));
NumberTextField.displayName = "NumberTextField";

export { NumberTextField };
