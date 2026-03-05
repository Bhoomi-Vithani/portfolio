import * as React from 'react';
import { LayerPresentation } from './shared/LayerPresentation.js';

// @ts-strict-ignore
const Layer = (props) => (React.createElement(LayerPresentation, { layout: "right", onCloseClick: () => {
        /* empty */
    }, onFocusLoss: () => {
        /* empty */
    }, ...props }));
Layer.displayName = "Layer";

export { Layer };
