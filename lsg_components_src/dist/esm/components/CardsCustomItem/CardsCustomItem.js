import * as React from 'react';
import { CardsCustomItemWrapper } from './shared/CardsCustomItemWrapper.js';

const CardsCustomItem = ({ appearance, look, ...props }) => (React.createElement(CardsCustomItemWrapper, { appearance: appearance || look, ...props }));
CardsCustomItem.displayName = "Cards.CustomItem";

export { CardsCustomItem };
