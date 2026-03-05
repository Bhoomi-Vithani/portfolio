import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IFocalPoint {
    offsetLeft: number;
    offsetTop: number;
}
type IGallerySliderItemProps = IBasicProps & {
    /** Translation of the word 'Slide', so that users understand what kind of content they can expect (required) */
    ariaRoleDescription: string;
} & ({
    /** Label that is unique for this slide (either a real title or like "1 of 4"). Required if ariaLabelledBy is not set */
    ariaLabel: string;
} | {
    /** Id of the Element that acts as a unique label for this slide (for example a headline in the slide). Required if ariaLabel is not set */
    ariaLabelledBy: React.AriaAttributes["aria-labelledby"];
}) & ({
    pictureImgSrc?: undefined;
} | {
    /** Src attribute for the img inside the picture element (see `<Picture />` component)  */
    pictureImgSrc: string;
    /** `alt` attribute for the picture element (required if you set pictureImgSrc) */
    pictureAlt: string;
    /** Source array for the picture element (see `<Picture />` component) */
    pictureSource?: React.SourceHTMLAttributes<HTMLSourceElement>[];
    /** Additional attributes for the img inside the picture element (see `<Picture />` component) */
    pictureImgAttrs?: React.ImgHTMLAttributes<HTMLImageElement>;
});
declare const GallerySliderItem: {
    (props: IGallerySliderItemProps): React.JSX.Element;
    displayName: string;
};
export { GallerySliderItem, IFocalPoint, IGallerySliderItemProps };
