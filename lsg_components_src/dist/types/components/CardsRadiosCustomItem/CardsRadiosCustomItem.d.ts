import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
import type { INavigationItem } from "../../interfaces";
interface ICardsRadiosCustomItem extends IBasicProps {
    /** Is the Card clickable by the user? This also reflects in its appearance. */
    disabled?: boolean;
    /** Switches the Card to loading mode. It gets disabled and a loading spinner will be shown. */
    loading?: boolean;
    /**  Aligns the whole content to center, default is left */
    centeredLayout?: boolean;
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
    /** Different appearance of the Card border. `"placeholder"` should be used for a click area, where a User can add a new card to a card group. */
    look?: "default" | "placeholder";
    /** Boolean value indicating if radio input is checked */
    value?: boolean;
    /** Boolean value indicating if radio input is invalid */
    invalid?: boolean;
    /** Name of the radio, that will be returned with the onChange callback */
    name?: string;
    /** Function to be called whenever the radio is clicked. Not called when the radio is disabled. */
    onChange?: (value: boolean, name: string, event: React.SyntheticEvent<HTMLInputElement>) => void;
    /** HTML 'title' attribute */
    title?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    inputHtmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
}
declare const CardsRadiosCustomItem: {
    ({ ...props }: ICardsRadiosCustomItem): React.JSX.Element;
    displayName: string;
};
export { CardsRadiosCustomItem, ICardsRadiosCustomItem };
