import * as React from 'react';
import { JumpLinksPresentation } from './shared/JumpLinksPresentation.js';

const JumpLinks = (props) => React.createElement(JumpLinksPresentation, { ...props });
JumpLinks.displayName = "JumpLinks";

export { JumpLinks };
