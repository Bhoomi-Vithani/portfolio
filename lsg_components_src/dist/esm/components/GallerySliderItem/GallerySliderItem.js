import * as React from 'react';
import { GallerySliderItemPresentation } from './shared/GallerySliderItemPresentation.js';

const GallerySliderItem = (props) => React.createElement(GallerySliderItemPresentation, { ...props });
GallerySliderItem.displayName = "GallerySlider.Item";

export { GallerySliderItem };
