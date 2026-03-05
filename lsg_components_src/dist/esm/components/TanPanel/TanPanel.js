import * as React from 'react';
import { TanPanelPresentation } from './shared/TanPanelPresentation.js';

const TanPanel = ({ onChange, notificationDisabled, imageFullHeight, imageQrCode, ...props }) => (React.createElement(TanPanelPresentation, { ...props, onTanTextfieldChange: onChange, notificationDisabled: notificationDisabled, imageQrCode: imageQrCode || imageFullHeight }));
TanPanel.displayName = "TanPanel";

export { TanPanel };
