import * as React from 'react';
import { CardsCustomToggleItemWrapper } from '../CardsCustomToggleItem/shared/CardsCustomToggleItemWrapper.js';

const CardsCheckboxesCustomItem = ({ ...props }) => (React.createElement(CardsCustomToggleItemWrapper, { ...props, type: "checkbox" }));
CardsCheckboxesCustomItem.displayName = "Cards.Checkboxes.CustomItem";

export { CardsCheckboxesCustomItem };
