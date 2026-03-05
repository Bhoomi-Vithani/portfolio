const buildingUnit = 4;
const bu = (size, additionalPxSize = 0) => `${size * buildingUnit + additionalPxSize}px`;
const buRem = (size, sizePx = 0, additionalPxSize = 0) => sizePx || additionalPxSize ? `calc(${(size * buildingUnit) / 16}rem + ${sizePx * buildingUnit + additionalPxSize}px)` : `${(size * buildingUnit) / 16}rem`;

export { bu, buRem };
