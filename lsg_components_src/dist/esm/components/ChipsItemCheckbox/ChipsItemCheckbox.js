import * as React from 'react';
import { forwardRef } from 'react';
import { ChipsToggleItemPresentation } from '../_ChipsToggleItem/ChipsToggleItemPresentation.js';

const ChipsItemCheckbox = forwardRef((props, ref) => React.createElement(ChipsToggleItemPresentation, { ref: ref, ...props, type: "checkbox" }));

export { ChipsItemCheckbox };
