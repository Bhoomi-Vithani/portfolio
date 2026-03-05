import * as React from 'react';
import { SelectWrapper } from './shared/SelectWrapper.js';

const Select = ({ onKeyDown: _, readOnly, ...props }) => (React.createElement(SelectWrapper, { ...props, optional: !!props.optional, optionalText: typeof props.optional === "string" ? props.optional : undefined, readonly: readOnly }));
Select.displayName = "Select";

export { Select };
