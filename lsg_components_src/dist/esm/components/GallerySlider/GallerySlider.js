import * as React from 'react';
import { GallerySliderItem } from '../GallerySliderItem/GallerySliderItem.js';
import { GallerySliderWrapper } from './shared/GallerySliderWrapper.js';

const GallerySlider = ({ look, appearance, slidesToDisplay = 3, ...props }) => (React.createElement(GallerySliderWrapper, { appearance: appearance || look, slidesToDisplay: slidesToDisplay, ...props }));
GallerySlider.displayName = "GallerySlider";
GallerySlider.Item = GallerySliderItem;

export { GallerySlider };
