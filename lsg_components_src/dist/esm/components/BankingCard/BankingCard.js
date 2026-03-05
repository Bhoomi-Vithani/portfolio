import * as React from 'react';
import { BankingCardPresentation } from './shared/BankingCardPresentation.js';

/* eslint-disable react/require-default-props */
const BankingCard = ({ flag, ...props }) => (React.createElement(BankingCardPresentation, { ...props, flag: flag === "none" || !flag ? undefined : flag }));
BankingCard.displayName = "BankingCard";

export { BankingCard };
