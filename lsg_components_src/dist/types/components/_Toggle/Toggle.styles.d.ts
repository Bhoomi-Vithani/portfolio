import { Colors } from "../../styles/colors";
export declare const toggleColors: {
    bg: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    borderHover: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    borderChecked: {
        dark: string;
        elevatedDark: string;
        contrastDark: string;
        light: string;
        medium: string;
        hover: string;
        contrastLight: string;
        brand: string;
    };
    borderCheckedHover: {
        dark: string;
        elevatedDark: string;
        contrastDark: string;
        light: string;
        medium: string;
        hover: string;
        contrastLight: string;
        brand: string;
    };
    borderDefault: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    borderDisabled: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    borderError: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    markDefault: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    markDisabled: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    text: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    textDisabled: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    outline: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
};
interface IOptionalColors {
    bgChecked?: typeof Colors.colNeutral7 | string;
    markHover?: typeof Colors.colNeutral0 | string;
    markChecked?: typeof Colors.colBackground | string;
    markCheckmark?: typeof Colors.colNeutral7 | string;
    markCheckedHover?: typeof Colors.colNeutral7 | string;
    markCheckmarkHover?: typeof Colors.colNeutral7 | string;
    bgError?: typeof Colors.colError | string;
    markError?: typeof Colors.colBackground | string;
    markErrorHover?: typeof Colors.colBackground | string;
    markCheckmarkError?: typeof Colors.colBackground | string;
    markCheckmarkErrorHover?: typeof Colors.colBackground | string;
}
export declare const getStyles: (hostClass: string, { width, height, borderWidth, knobDiameter }?: {
    width?: number;
    height?: number;
    borderWidth?: number;
    knobDiameter?: number;
}, customColors?: Partial<typeof toggleColors> & IOptionalColors) => string;
export {};
