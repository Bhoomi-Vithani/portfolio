import * as React from 'react';
import { PicturePresentation } from './shared/PicturePresentation.js';

const Picture = ({ focalPoint, backgroundFocalPoint, ...props }) => (React.createElement(PicturePresentation, { ...props, focalPoint: focalPoint || backgroundFocalPoint }));
Picture.displayName = "Picture";

export { Picture };
