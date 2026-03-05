import * as React from 'react';
import { CardsCustomToggleItemWrapper } from '../CardsCustomToggleItem/shared/CardsCustomToggleItemWrapper.js';

const CardsRadiosCustomItem = ({ ...props }) => (React.createElement(CardsCustomToggleItemWrapper, { ...props, type: "radio" }));
CardsRadiosCustomItem.displayName = "Cards.Radios.CustomItem";

export { CardsRadiosCustomItem };
