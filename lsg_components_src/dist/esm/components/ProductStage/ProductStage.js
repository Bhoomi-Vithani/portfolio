import * as React from 'react';
import { ProductStageWrapper } from './shared/ProductStageWrapper.js';

const ProductStage = ({ headlineAs = "h1", ...props }) => (React.createElement(ProductStageWrapper, { headlineAs: headlineAs, ...props }));
ProductStage.displayName = "ProductStage";

export { ProductStage };
