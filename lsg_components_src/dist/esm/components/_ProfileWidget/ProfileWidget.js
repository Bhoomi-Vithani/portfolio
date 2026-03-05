import * as React from 'react';
import { ProfileWidgetPresentation } from './shared/ProfileWidgetPresentation.js';

/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Profile Widget Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/profile-widget-pattern/index.html
 */
const ProfileWidget = ({ profileIconVariant = "outline", ...props }) => React.createElement(ProfileWidgetPresentation, { profileIconVariant: profileIconVariant, ...props });
ProfileWidget.displayName = "ProfileWidget";

export { ProfileWidget };
