import * as React from 'react';
import { TextFieldWrapper } from './shared/TextFieldWrapper.js';

const TextField = ({ optional, readOnly, clearIcon = true, ...otherProps }) => (React.createElement(TextFieldWrapper, { ...otherProps, clearIcon: clearIcon, optional: !!optional, optionalText: typeof optional === "string" ? optional : undefined, readonly: readOnly }));
TextField.displayName = "TextField";

export { TextField };
