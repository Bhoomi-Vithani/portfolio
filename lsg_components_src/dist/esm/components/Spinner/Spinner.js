import * as React from 'react';
import { SpinnerPresentation } from './shared/SpinnerPresentation.js';

// @ts-strict-ignore
/* eslint-disable react/require-default-props */
// NOTE: The treatment on loading prop is implemented to avoid breaking change. This should support the default
// appearance until now. A change is expected on v19.
const Spinner = ({ size = 60, variant = "indeterminate", ...props }) => (React.createElement(SpinnerPresentation, { loading: props.loading !== undefined ? props.loading : true, size: size, variant: variant, 
    // TODO v19: Only required for static spinner
    ariaLabel: props.ariaLabel, ...props }));
Spinner.displayName = "Spinner";

export { Spinner };
