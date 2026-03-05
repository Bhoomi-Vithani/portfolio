import * as React from 'react';
import { ContactModulePresentation } from './shared/ContactModulePresentation.js';

const ContactModule = ({ headlineAs = "h2", sublineAs = "p", ...props }) => (React.createElement(ContactModulePresentation, { headlineAs: headlineAs, sublineAs: sublineAs, ...props }));
ContactModule.displayName = "ContactModule";

export { ContactModule };
