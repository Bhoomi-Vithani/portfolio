import * as React from 'react';
import { SelectWrapper } from '../Select/shared/SelectWrapper.js';

const ChipsSelect = ({ isSelected, clearIcon = true, isHidden, ...props }) => (React.createElement(SelectWrapper, { ...props, chipVariant: true, clearIcon: clearIcon, chipSelected: isSelected, isHidden: isHidden }));
ChipsSelect.displayName = "Chips.Select";

export { ChipsSelect };
