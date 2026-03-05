import * as React from 'react';
import { CreditCardPresentation } from './shared/CreditCardPresentation.js';

const CreditCard = (props) => React.createElement(CreditCardPresentation, { ...props });
CreditCard.displayName = "CreditCard";

export { CreditCard };
