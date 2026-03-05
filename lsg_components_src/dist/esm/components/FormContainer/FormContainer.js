import * as React from 'react';
import { FormContainerPresentation } from './shared/FormContainerPresentation.js';

const FormContainer = ({ children, as = "form", ...props }) => (React.createElement(FormContainerPresentation, { as: as, ...props }, children));
FormContainer.displayName = "FormContainer";

export { FormContainer };
