import { lsgPreGlobal } from '../config/prefix.js';
import { styled } from './styled.js';

// @ts-strict-ignore
const styleThemesGlobal = (colors) => (content) => {
    let styles = "";
    if (colors.light) {
        styles += styled `
            ${content(colors.light, "light")}
        `;
    }
    if (colors.medium) {
        styles += styled `
            .${lsgPreGlobal}theme__medium {
                ${content(colors.medium, "medium")}
            }
        `;
    }
    if (colors.hover) {
        // Important: This selector must not be prefixed as it is shared for react and stencil
        styles += styled `
            .${lsgPreGlobal}theme__hover {
                ${content(colors.hover, "hover")}
            }
        `;
    }
    if (colors.dark) {
        // Important: This selector must not be prefixed as it is shared for react and stencil
        styles += styled `
            .${lsgPreGlobal}theme__dark {
                ${content(colors.dark, "dark")}
            }
        `;
    }
    if (colors.elevatedDark) {
        // Important: This selector must not be prefixed as it is shared for react and stencil
        styles += styled `
                .${lsgPreGlobal}theme__dark .${lsgPreGlobal}theme__hover,
                .${lsgPreGlobal}theme__dark .${lsgPreGlobal}theme__elevated {
                ${content(colors.elevatedDark, "elevatedDark")}
            }
        `;
    }
    // NEW: Ensure that elevated children inside a medium theme use the light color set.
    // This makes components that declare themselves "elevated" inherit the light variants
    // even when the surrounding theme is medium (e.g. Cards background stays light).
    if (colors.light && colors.medium) {
        styles += styled `
                .${lsgPreGlobal}theme__medium .${lsgPreGlobal}theme__elevated {
                    ${content(colors.light, "light")}
                }
            `;
    }
    if (colors.contrastLight) {
        // Important: This selector must not be prefixed as it is shared for react and stencil
        styles += styled `
            .${lsgPreGlobal}theme__medium .${lsgPreGlobal}theme__hover,
            .${lsgPreGlobal}theme__contrast {
                ${content(colors.contrastLight, "contrastLight")}
            }
        `;
    }
    if (colors.contrastDark) {
        // Important: This selector must not be prefixed as it is shared for react and stencil
        styles += styled `
            .${lsgPreGlobal}theme__dark .${lsgPreGlobal}theme__elevated .${lsgPreGlobal}theme__hover,
            .${lsgPreGlobal}theme__dark .${lsgPreGlobal}theme__contrast {
                ${content(colors.contrastDark, "contrastDark")}
            }
        `;
    }
    if (colors.brand) {
        // Important: This selector must not be prefixed as it is shared for react and stencil
        styles += styled `
            .${lsgPreGlobal}theme__brand,
            .${lsgPreGlobal}theme__dark .${lsgPreGlobal}theme__brand {
                ${content(colors.brand, "brand")}
            }
        `;
    }
    return styles;
};
const styleThemesGlobal2 = (colors) => {
    const transposedColors = Object.entries(colors)
        .map(([theme, c]) => ({
        light: { [theme]: typeof c === "string" ? c : c.light },
        medium: { [theme]: typeof c === "string" ? c : c.medium },
        dark: { [theme]: typeof c === "string" ? c : c.dark },
        hover: { [theme]: typeof c === "string" ? c : c.hover },
        elevatedDark: { [theme]: typeof c === "string" ? c : c.elevatedDark },
        contrastLight: { [theme]: typeof c === "string" ? c : c.contrastLight },
        contrastDark: { [theme]: typeof c === "string" ? c : c.contrastDark },
        brand: { [theme]: typeof c === "string" ? c : c.brand },
    }))
        .reduce((acc, val) => ({
        light: { ...acc.light, ...val.light },
        medium: { ...acc.medium, ...val.medium },
        dark: { ...acc.dark, ...val.dark },
        hover: { ...acc.hover, ...val.hover },
        elevatedDark: { ...acc.elevatedDark, ...val.elevatedDark },
        contrastLight: { ...acc.contrastLight, ...val.contrastLight },
        contrastDark: { ...acc.contrastDark, ...val.contrastDark },
        brand: { ...acc.brand, ...val.brand },
    }), {
        light: {},
        medium: {},
        dark: {},
        hover: {},
        elevatedDark: {},
        contrastLight: {},
        contrastDark: {},
        brand: {},
    });
    return styleThemesGlobal(transposedColors);
};
const styleThemes = styleThemesGlobal;
/**
 * The function styleThemes2 is the counterpart for the styleThemes function, which accepts the new color format. It
 * internally re-shapes the color-object from the new to the old color format, and calls the stylesThemes function.
 * @param colors color-object in the new format.
 */
const styleThemes2 = (colors) => {
    const transposedColors = Object.entries(colors)
        .map(([theme, c]) => ({
        light: { [theme]: typeof c === "string" ? c : c.light },
        dark: { [theme]: typeof c === "string" ? c : c.dark },
        medium: { [theme]: typeof c === "string" ? c : c.medium },
        hover: { [theme]: typeof c === "string" ? c : c.hover },
        elevatedDark: { [theme]: typeof c === "string" ? c : c.elevatedDark },
        contrastLight: { [theme]: typeof c === "string" ? c : c.contrastLight },
        contrastDark: { [theme]: typeof c === "string" ? c : c.contrastDark },
        brand: { [theme]: typeof c === "string" ? c : c.brand },
    }))
        .reduce((acc, val) => ({
        light: { ...acc.light, ...val.light },
        dark: { ...acc.dark, ...val.dark },
        medium: { ...acc.medium, ...val.medium },
        hover: { ...acc.hover, ...val.hover },
        elevatedDark: { ...acc.elevatedDark, ...val.elevatedDark },
        contrastLight: { ...acc.contrastLight, ...val.contrastLight },
        contrastDark: { ...acc.contrastDark, ...val.contrastDark },
        brand: { ...acc.brand, ...val.brand },
    }), {
        light: {},
        dark: {},
        medium: {},
        hover: {},
        elevatedDark: {},
        contrastLight: {},
        contrastDark: {},
        brand: {},
    });
    return styleThemes(transposedColors);
};

export { styleThemes, styleThemes2, styleThemesGlobal, styleThemesGlobal2 };
