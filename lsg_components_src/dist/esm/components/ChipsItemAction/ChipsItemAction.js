import React__default, { forwardRef } from 'react';
import { ChipsItemActionPresentation } from './shared/ChipsItemActionPresentation.js';

const ChipsItemAction = forwardRef((props, ref) => (React__default.createElement(ChipsItemActionPresentation, { actionRef: props.refCallback, ref: ref, ...props })));

export { ChipsItemAction };
