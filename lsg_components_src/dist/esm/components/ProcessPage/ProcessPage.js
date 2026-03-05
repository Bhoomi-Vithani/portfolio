import * as React from 'react';
import { ProcessPageWrapper } from './shared/ProcessPageWrapper.js';

const ProcessPage = ({ footerNavigationAriaLabel, footerNavigationTreeAriaLabel, headerTitleAs = "span", ...props }) => (React.createElement(ProcessPageWrapper, { footerNavigationAriaLabel: footerNavigationAriaLabel || footerNavigationTreeAriaLabel, headerTitleAs: headerTitleAs, ...props }));
ProcessPage.displayName = "ProcessPage";

export { ProcessPage };
