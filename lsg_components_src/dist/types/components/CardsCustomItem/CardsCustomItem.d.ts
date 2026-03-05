import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { INavigationItem } from "../../interfaces";
interface ICardsCustomItem extends IBasicProps {
    /** Is the Card clickable by the user? This also reflects in its appearance. */
    disabled?: boolean;
    /** Switch the Card to loading mode. It gets disabled and a loading spinner will be shown. */
    loading?: boolean;
    /** Information about loading process */
    loadingText?: string;
    /**  Aligns the whole content to center, default is left */
    centeredLayout?: boolean;
    /** Center content vertically */
    verticalAlign?: "top" | "center";
    /**
     * An array of objects like:
     * {
     *   label: string,
     *   name?: string;
     *   href?: string,
     *   children?: INavigationItem[] (an array of objects like this one)
     * }
     * Also, please have a look at Markenportal/Developer Guidelines
     */
    menuNavigationTree?: INavigationItem[];
    /** Prop for placing a picture at the top of the card. The picture will be expanded to the edges of the card. Pass a Picture component here. */
    pictureTop?: ReactNode;
    /** Prop for placing a picture at the bottom of the card. The picture will be expanded to the edges of the card. Pass a Picture component here. */
    pictureBottom?: ReactNode;
    /** Content that is placed below `pictureBottom` and above the `children`. */
    contentTop?: ReactNode;
    /** Content that is placed below the `children` and above `pictureBottom`. */
    contentBottom?: ReactNode;
    /** Custom spacing between the Card Border and the Content */
    spacing?: "large";
    /** @deprecated: Use appearance instead. Different appearance of the Card border. `"placeholder"` should be used for a click area, where a User can add a new card to a card group. */
    look?: "default" | "placeholder";
    /** Different appearance of the Card border. `"placeholder"` should be used for a click area, where a User can add a new card to a card group. */
    appearance?: "default" | "placeholder";
    /** Size of the Card according to the grid column size. */
    gridColumnSize?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /** Set the position and amount of card divider lines. */
    divider?: "top" | "bottom" | "both";
}
declare const CardsCustomItem: {
    ({ appearance, look, ...props }: ICardsCustomItem): React.JSX.Element;
    displayName: string;
};
export { CardsCustomItem, ICardsCustomItem };
