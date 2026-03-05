interface IColorsMap<T> {
    light?: T;
    dark?: T;
    medium?: T;
    hover?: T;
    elevatedDark?: T;
    contrastLight?: T;
    contrastDark?: T;
    brand?: T;
}
type IColorsMap2<T> = {
    [P in keyof T]: {
        light?: T[P];
        dark?: T[P];
        medium?: T[P];
        hover?: T[P];
        elevatedDark?: T[P];
        contrastLight?: T[P];
        contrastDark?: T[P];
        brand?: T[P];
    } | string;
};
export type ThemeType = "light" | "dark" | "medium" | "hover" | "elevatedDark" | "contrastLight" | "contrastDark" | "brand";
declare const styleThemesGlobal: <T>(colors?: IColorsMap<T>) => (content: (colors: T, which: ThemeType) => string) => string;
declare const styleThemesGlobal2: <T>(colors?: IColorsMap2<T>) => (content: (colors: T, which: ThemeType) => string) => string;
declare const styleThemes: <T>(colors?: IColorsMap<T>) => (content: (colors: T, which: ThemeType) => string) => string;
/**
 * The function styleThemes2 is the counterpart for the styleThemes function, which accepts the new color format. It
 * internally re-shapes the color-object from the new to the old color format, and calls the stylesThemes function.
 * @param colors color-object in the new format.
 */
declare const styleThemes2: <T>(colors?: IColorsMap2<T>) => (content: (colors: T, which: ThemeType) => string) => string;
export { styleThemes, styleThemes2, styleThemesGlobal, styleThemesGlobal2 };
