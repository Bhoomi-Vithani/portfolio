import * as React from 'react';
import { SnackbarPresentation } from './shared/SnackbarPresentation.js';

const Snackbar = ({ badgeLook, badgeColor, isOpen, role, ...props }) => (React.createElement(SnackbarPresentation, { badgeColor: badgeColor || badgeLook, open: isOpen, role: role === "alertdialog" ? "dialog" : role, ...props }));
Snackbar.displayName = "Snackbar";

export { Snackbar };
