import * as React from 'react';
import { FormLinkPresentation } from './shared/FormLinkPresentation.js';

const FormLink = (props) => React.createElement(FormLinkPresentation, { ...props });
FormLink.displayName = "FormLink";

export { FormLink };
