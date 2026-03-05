import * as React from 'react';
import { StatusIndicatorGroupWrapper } from './StatusIndicatorGroup/StatusIndicatorGroupWrapper.js';
import { StatusIndicatorPresentation } from './shared/StatusIndicatorPresentation.js';

const StatusIndicator = ({ statusColor = "inactive", tagHidden = false, tagRole = "none", ...otherProps }) => (React.createElement(StatusIndicatorPresentation, { ...otherProps, tagRole: tagRole, tagHidden: tagHidden, statusColor: statusColor }));
StatusIndicator.Group = ({ ...props }) => React.createElement(StatusIndicatorGroupWrapper, { ...props });
StatusIndicator.displayName = "StatusIndicator";
// @ts-ignore
StatusIndicator.Group.displayName = "StatusIndicator.Group";

export { StatusIndicator };
