import * as React from 'react';
import { EyeCatcherWrapper } from './shared/EyeCatcherWrapper.js';

const EyeCatcher = ({ fontSize = "medium", ...props }) => (React.createElement(EyeCatcherWrapper, { fontSize, ...props }));
EyeCatcher.displayName = "EyeCatcher";

export { EyeCatcher };
