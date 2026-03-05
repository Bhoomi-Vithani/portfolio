// https://www.figma.com/file/pYfOqr0KG6gAF8jiDZTlB4/Basics?node-id=1617-19235&t=xUcWF4fty4AZRasv-0
// https://www.figma.com/design/2nOsDo9WBvTTAnBF6kD1Fh/Barrierefreiheit-teil-2
const b = {
    // Primary Colors
    brandPrimary1: "#FFD700",
    brandPrimary1Hover: "#FFC700",
    brandPrimary2: "#002E3C", // Petrol
    // Feedback Colors
    successLight: "#008932",
    successMedium: "#007C2D",
    successContrastLight: "#006D28",
    successDark: "#00AA3D",
    successElevatedDark: "#00BD45",
    successContrastDark: "#00D14C",
    successBrand: "#006B27", // Just in case, somebody uses it. Increased Contrast by LSG, because nglb-Definition did not meet 4.5:1 criterion
    warningLight: "#E86F00",
    warningMedium: "#D66700",
    warningContrastLight: "#C86100",
    warningDark: "#F69C00",
    warningElevatedDark: "#FFA306",
    warningContrastDark: "#FFB23E",
    warningBrand: "#C25E00", // Just in case, somebody uses it. Increased Contrast by LSG, because nglb-Definition did not meet 3:1 criterion
    errorLight: "#C5000E",
    errorMedium: "#BC000D",
    errorContrastLight: "#AD000C",
    errorDark: "#FF5D47",
    errorElevatedDark: "#FF7866",
    errorContrastDark: "#FF9D90",
    errorBrand: "#AD000C", // Just in case, somebody uses it. Increased Contrast by LSG, because nglb-Definition did not meet 4.5:1 criterion
};
// Theme: Default (light)
const themeLight = [
    "#ffffff", // col-neutral-0 / base color (0)
    "#ECEFF2", // col-neutral-1
    "#CED8DA", // col-neutral-2
    "#ABBAC0", // col-neutral-3
    "#83989F", // col-neutral-4
    "#506C74", // col-neutral-5
    "#2D5562", // col-neutral-6
    "#002E3C", // col-neutral-7
    "#002530", // col-neutral-8
];
// Theme: Dark/Accent/Marketing (petrol) ("ocean theme")
const themeDark = [
    "#002E3C", // col-neutral-0 / base color (0)
    "#103D4B", // col-neutral-1
    "#1D4856", // col-neutral-2
    "#426671", // col-neutral-3
    "#5E7B83", // col-neutral-4
    "#92A4AB", // col-neutral-5
    "#B7C4C9", // col-neutral-6
    "#DBE2E5", // col-neutral-7
    "#FFFFFF", // col-neutral-8
];
// Theme: Elevated ("ocean elevated")
const themeDarkElevated = [
    "#103D4B", // col-neutral-0 / base color (0)
    "#204A58", // col-neutral-1
    "#305764", // col-neutral-2
    "#53737C", // col-neutral-3
    "#789098", // col-neutral-4
    "#9AACB3", // col-neutral-5
    "#CDD7DA", // col-neutral-6
    "#E9EDF0", // col-neutral-7
    "#FAFBFC", // col-neutral-8
];
// Theme: sand theme
const themeMedium = [
    "#F1EFED", // col-neutral-0 / base color (0)
    "#E0E0DD", // col-neutral-1
    "#C3CAC8", // col-neutral-2
    "#A0AEAC", // col-neutral-3
    "#778F8D", // col-neutral-4
    "#537173", // col-neutral-5
    "#304D4A", // col-neutral-6
    "#002E3C", // col-neutral-7
    "#002530", // col-neutral-8
];
const BaseColors2 = {
    // Secondary Colors
    secondaryAccent1: "var(--lsg-color-secondary-1, #3A7E8A)",
    secondaryAccent2: "var(--lsg-color-secondary-2, #93C1B4)",
    secondaryAccent3: "var(--lsg-color-secondary-3, #D5DBB6)",
    secondaryAccent4: "var(--lsg-color-secondary-4, #D6C18B)",
    secondaryAccent5: "var(--lsg-color-secondary-5, #BF925E)",
    secondaryAccent6: "var(--lsg-color-secondary-6, #9B5C2F)",
    // Additional Colors
    darkAccent: "var(--lsg-color-dark-accent, #002530)", // col-midnight-petrol
    // B & W
    black: "var(--lsg-color-black, #000)", // col-black
    white: "var(--lsg-color-white, #fff)", // col-white
};
const InscriptionColors = {
    secondaryAccent1Inscription: `var(--lsg-color-secondary-1-inscription, ${themeLight[0]})`,
    secondaryAccent2Inscription: `var(--lsg-color-secondary-2-inscription, ${themeDark[0]})`,
    secondaryAccent3Inscription: `var(--lsg-color-secondary-3-inscription, ${themeDark[0]})`,
    secondaryAccent4Inscription: `var(--lsg-color-secondary-4-inscription, ${themeDark[0]})`,
    secondaryAccent5Inscription: `var(--lsg-color-secondary-5-inscription, ${themeDark[0]})`,
    secondaryAccent6Inscription: `var(--lsg-color-secondary-6-inscription, ${themeLight[0]})`,
};
const getContrastColor = (index, infix) => ({
    light: `var(--lsg-color-${infix}-light, ${themeLight[index]})`,
    dark: `var(--lsg-color-${infix}-dark, ${themeDark[index]})`,
    medium: `var(--lsg-color-${infix}-medium, ${themeMedium[index]})`,
    hover: `var(--lsg-color-${infix}-elevated-light, ${themeLight[Math.min(index + 1, 8)]})`,
    elevatedDark: `var(--lsg-color-${infix}-elevated-dark, ${themeDarkElevated[index]})`,
    contrastLight: `var(--lsg-color-${infix}-contrast-light, ${index === 0 ? themeMedium[1] : themeMedium[index > 2 ? 8 : index + 2]})`,
    contrastDark: `var(--lsg-color-${infix}-contrast-dark, ${themeDark[index > 2 ? 8 : index + 2]})`,
    brand: `var(--lsg-color-${infix}-brand, ${index === 0 ? b.brandPrimary1 : themeLight[Math.min(index + 1, 8)]})`,
});
const getUnifiedColor = (color, infix) => ({
    light: `var(--lsg-color-${infix}-light, ${color})`,
    dark: `var(--lsg-color-${infix}-dark, ${color})`,
    medium: `var(--lsg-color-${infix}-medium, ${color})`,
    hover: `var(--lsg-color-${infix}-elevated-light, ${color})`,
    elevatedDark: `var(--lsg-color-${infix}-elevated-dark, ${color})`,
    contrastLight: `var(--lsg-color-${infix}-contrast-light, ${color})`,
    contrastDark: `var(--lsg-color-${infix}-contrast-dark, ${color})`,
    brand: `var(--lsg-color-${infix}-brand, ${color})`,
});
const ThemedColors = {
    //  ---- Neutral ----
    colNeutral0: getContrastColor(0, "neutral-0"),
    colNeutral1: getContrastColor(1, "neutral-1"),
    colNeutral2: getContrastColor(2, "neutral-2"),
    colNeutral3: getContrastColor(3, "neutral-3"),
    colNeutral4: getContrastColor(4, "neutral-4"),
    colNeutral5: getContrastColor(5, "neutral-5"),
    colNeutral6: getContrastColor(6, "neutral-6"),
    colNeutral7: getContrastColor(7, "neutral-7"),
    colNeutral8: getContrastColor(8, "neutral-8"),
    //
    //  ---- Base ----
    // https://www.figma.com/file/2nOsDo9WBvTTAnBF6kD1Fh/Barrierefreiheit-teil-2?type=design&node-id=3379-22607&mode=design&t=GsuHox8TqtCbiaRJ-0
    colBrandPrimary1: {
        ...getUnifiedColor(b.brandPrimary1, "brand-primary-1"),
        brand: `var(--lsg-color-brand-primary-1-brand, ${b.brandPrimary1})`,
    },
    colBrandPrimary1Hover: {
        ...getUnifiedColor(b.brandPrimary1Hover, "brand-primary-1-hover"),
        brand: `var(--lsg-color-brand-primary-1-hover-brand, ${b.brandPrimary1Hover})`,
    },
    colBrandPrimary1Inscription: {
        ...getUnifiedColor(themeLight[7], "brand-primary-1-inscription"),
        brand: `var(--lsg-color-brand-primary-1-inscription-brand, ${themeLight[0]})`,
    },
    colBrandPrimary1HoverInscription: {
        ...getUnifiedColor(themeLight[8], "brand-primary-1-hover-inscription"),
        brand: `var(--lsg-color-brand-primary-1-hover-inscription-brand, ${themeLight[0]})`,
    },
    // ---- Environment ----
    colBackground: getContrastColor(0, "col-background"),
    colContentPrimary: getContrastColor(7, "col-content-primary"),
    colBackgroundHover: getContrastColor(1, "col-background-hover"),
    colSeparatorLine: getContrastColor(4, "col-separator-line"),
    colFineLine: getContrastColor(2, "col-fine-line"),
    //
    // ---- Content ----
    colTextPrimary: getContrastColor(7, "col-text-primary"),
    colTextSupplementary: getContrastColor(5, "col-text-supplementary"),
    colTextHighlight: getContrastColor(8, "col-text-highlight"),
    //
    // ---- Interaction ----
    // https://www.figma.com/file/2nOsDo9WBvTTAnBF6kD1Fh/Barrierefreiheit-teil-2?type=design&node-id=3379-22607&mode=design&t=GsuHox8TqtCbiaRJ-0
    colActionPrimary: {
        ...getContrastColor(7, "col-action-primary"),
        dark: `var(--lsg-color-col-action-primary-dark, ${b.brandPrimary1})`,
        elevatedDark: `var(--lsg-color-col-action-primary-elevated-dark, ${b.brandPrimary1})`,
        contrastDark: `var(--lsg-color-col-action-primary-contrast-dark, ${b.brandPrimary1})`,
    },
    colActionPrimaryHover: {
        ...getContrastColor(8, "col-action-primary-hover"),
        dark: `var(--lsg-color-col-action-primary-hover-dark, ${b.brandPrimary1Hover})`,
        elevatedDark: `var(--lsg-color-col-action-primary-hover-elevated-dark, ${b.brandPrimary1Hover})`,
        contrastDark: `var(--lsg-color-col-action-primary-hover-contrast-dark, ${b.brandPrimary1Hover})`,
    },
    colActionSecondary: getContrastColor(7, "col-action-secondary"),
    colActionSecondaryHover: getContrastColor(8, "col-action-secondary-hover"),
    colActionTertiary: getContrastColor(5, "col-action-tertiary"),
    colActionTertiaryHover: getContrastColor(6, "col-action-tertiary-hover"),
    colActionInactive: getContrastColor(3, "col-action-inactive"),
    colActionOutlineInactive: getContrastColor(3, "col-action-outline-inactive"),
    colActionKeyboardFocus: getContrastColor(6, "col-action-keyboard-focus"),
    //
    // ---- Feedback ----
    colSuccess: {
        light: `var(--lsg-color-success-light, ${b.successLight})`,
        dark: `var(--lsg-color-success-dark, ${b.successDark})`,
        medium: `var(--lsg-color-success-medium, ${b.successMedium})`,
        hover: `var(--lsg-color-success-elevated-light, ${b.successMedium})`,
        elevatedDark: `var(--lsg-color-success-elevated-dark, ${b.successElevatedDark})`,
        contrastLight: `var(--lsg-color-success-contrast-light, ${b.successContrastLight})`,
        contrastDark: `var(--lsg-color-success-contrast-dark, ${b.successContrastDark})`,
        brand: `var(--lsg-color-success-brand, ${b.successBrand})`,
    },
    colSuccessInscription: {
        light: `var(--lsg-color-success-inscription-light, ${BaseColors2.white})`,
        dark: `var(--lsg-color-success-inscription-dark, ${b.brandPrimary2})`,
        medium: `var(--lsg-color-success-inscription-medium, ${BaseColors2.white})`,
        hover: `var(--lsg-color-success-inscription-elevated-light, ${BaseColors2.white})`,
        elevatedDark: `var(--lsg-color-success-inscription-elevated-dark, ${b.brandPrimary2})`,
        contrastLight: `var(--lsg-color-success-inscription-contrast-light, ${BaseColors2.white})`,
        contrastDark: `var(--lsg-color-success-inscription-contrast-dark, ${b.brandPrimary2})`,
        brand: `var(--lsg-color-success-inscription-brand, ${BaseColors2.white})`,
    },
    colWarning: {
        light: `var(--lsg-color-warning-light, ${b.warningLight})`,
        dark: `var(--lsg-color-warning-dark, ${b.warningDark})`,
        medium: `var(--lsg-color-warning-medium, ${b.warningMedium})`,
        hover: `var(--lsg-color-warning-elevated-light, ${b.warningMedium})`,
        elevatedDark: `var(--lsg-color-warning-elevated-dark, ${b.warningElevatedDark})`,
        contrastLight: `var(--lsg-color-warning-contrast-light, ${b.warningContrastLight})`,
        contrastDark: `var(--lsg-color-warning-contrast-dark, ${b.warningContrastDark})`,
        brand: `var(--lsg-color-warning-brand, ${b.warningBrand})`,
    },
    colWarningInscription: {
        light: `var(--lsg-color-warning-light, ${b.brandPrimary2})`,
        dark: `var(--lsg-color-warning-dark, ${b.brandPrimary2})`,
        medium: `var(--lsg-color-warning-medium, ${b.brandPrimary2})`,
        hover: `var(--lsg-color-warning-elevated-light, ${b.brandPrimary2})`,
        elevatedDark: `var(--lsg-color-warning-elevated-dark, ${b.brandPrimary2})`,
        contrastLight: `var(--lsg-color-warning-contrast-light, ${b.brandPrimary2})`,
        contrastDark: `var(--lsg-color-warning-contrast-dark, ${b.brandPrimary2})`,
        brand: `var(--lsg-color-warning-brand, ${b.brandPrimary2})`,
    },
    colError: {
        light: `var(--lsg-color-error-light, ${b.errorLight})`,
        dark: `var(--lsg-color-error-dark, ${b.errorDark})`,
        medium: `var(--lsg-color-error-medium, ${b.errorMedium})`,
        hover: `var(--lsg-color-error-elevated-light, ${b.errorMedium})`,
        elevatedDark: `var(--lsg-color-error-elevated-dark, ${b.errorElevatedDark})`,
        contrastLight: `var(--lsg-color-error-contrast-light, ${b.errorContrastLight})`,
        contrastDark: `var(--lsg-color-error-contrast-dark, ${b.errorContrastDark})`,
        brand: `var(--lsg-color-error-brand, ${b.errorBrand})`,
    },
    colErrorInscription: {
        light: `var(--lsg-color-error-light, ${BaseColors2.white})`,
        dark: `var(--lsg-color-error-dark, ${b.brandPrimary2})`,
        medium: `var(--lsg-color-error-medium, ${BaseColors2.white})`,
        hover: `var(--lsg-color-error-elevated-light, ${BaseColors2.white})`,
        elevatedDark: `var(--lsg-color-error-elevated-dark, ${b.brandPrimary2})`,
        contrastLight: `var(--lsg-color-error-contrast-light, ${BaseColors2.white})`,
        contrastDark: `var(--lsg-color-error-contrast-dark, ${b.brandPrimary2})`,
        brand: `var(--lsg-color-error-brand, ${BaseColors2.white})`,
    },
    colFooterBackground: `var(--lsg-color-footer-background, ${themeDark[0]})`,
    //
    // ---- Shadows ----
    shadow01: {
        light: "rgba(0, 37, 48, 0.36)",
        medium: "rgba(0, 37, 48, 0.36)",
        dark: "rgba(0, 37, 48, 0.72)",
        hover: "rgba(0, 37, 48, 0.36)",
        elevatedDark: "rgba(0, 37, 48, 0.72)",
        contrastLight: "rgba(0, 37, 48, 0.36)",
        contrastDark: "rgba(0, 37, 48, 0.72)",
        brand: "rgba(0, 37, 48, 0.36)",
    },
    shadow02: {
        light: "rgba(0, 37, 48, 0.28)",
        medium: "rgba(0, 37, 48, 0.28)",
        dark: "rgba(0, 37, 48, 0.56)",
        hover: "rgba(0, 37, 48, 0.28)",
        elevatedDark: "rgba(0, 37, 48, 0.56)",
        contrastLight: "rgba(0, 37, 48, 0.28)",
        contrastDark: "rgba(0, 37, 48, 0.56)",
        brand: "rgba(0, 37, 48, 0.28)",
    },
    shadow03: {
        light: "rgba(0, 37, 48, 0.24)",
        medium: "rgba(0, 37, 48, 0.24)",
        dark: "rgba(0, 37, 48, 0.48)",
        hover: "rgba(0, 37, 48, 0.24)",
        elevatedDark: "rgba(0, 37, 48, 0.48)",
        contrastLight: "rgba(0, 37, 48, 0.24)",
        contrastDark: "rgba(0, 37, 48, 0.48)",
        brand: "rgba(0, 37, 48, 0.24)",
    },
    // ---- New Shadows December-23 ----
    shadowCard: {
        light: "rgba(0, 37, 48, 0.24)",
        medium: "rgba(0, 37, 48, 0.24)",
        dark: "rgba(0, 37, 48, 0.48)",
        hover: "rgba(0, 37, 48, 0.24)",
        elevatedDark: "rgba(0, 37, 48, 0.48)",
        contrastLight: "rgba(0, 37, 48, 0.24)",
        contrastDark: "rgba(0, 37, 48, 0.48)",
        brand: "rgba(0, 37, 48, 0.24)",
    },
    shadowCardHover: {
        light: "rgba(0, 37, 48, 0.20)",
        medium: "rgba(0, 37, 48, 0.20)",
        dark: "rgba(0, 37, 48, 0.40)",
        hover: "rgba(0, 37, 48, 0.20)",
        elevatedDark: "rgba(0, 37, 48, 0.40)",
        contrastLight: "rgba(0, 37, 48, 0.20)",
        contrastDark: "rgba(0, 37, 48, 0.40)",
        brand: "rgba(0, 37, 48, 0.20)",
    },
    shadowCardActive: {
        light: "rgba(0, 37, 48, 0.16)",
        medium: "rgba(0, 37, 48, 0.16)",
        dark: "rgba(0, 37, 48, 0.32)",
        hover: "rgba(0, 37, 48, 0.16)",
        elevatedDark: "rgba(0, 37, 48, 0.32)",
        contrastLight: "rgba(0, 37, 48, 0.16)",
        contrastDark: "rgba(0, 37, 48, 0.32)",
        brand: "rgba(0, 37, 48, 0.16)",
    },
};
const Colors = { ...BaseColors2, ...InscriptionColors, ...ThemedColors };
const SupportedColors = {
    ...BaseColors2,
};

export { Colors, SupportedColors };
