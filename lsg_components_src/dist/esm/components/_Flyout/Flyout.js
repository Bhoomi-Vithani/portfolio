import * as React from 'react';
import { FlyoutPresentation } from './shared/FlyoutPresentation.js';

// @ts-strict-ignore
/** @deprecated: Not intended to be used directly due to accessibility concerns. Please contact the LSG Team, if the component is required */
const Flyout = ({ toggleElement, toggleInnerElement, toggleId, ...props }) => (React.createElement(FlyoutPresentation, { toggleContainerElement: toggleElement, toggleElement: toggleInnerElement || (typeof document !== "undefined" && document.getElementById(toggleId)), ...props }));
Flyout.displayName = "Flyout";

export { Flyout };
