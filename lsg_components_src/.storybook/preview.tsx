/**
 * Storybook Preview Configuration
 * 
 * Note: Styles from *.styles.ts files are automatically injected by the tssVitePlugin
 * configured in vite.config.ts. No manual style imports needed!
 */
import "@lsg/fonts";
import "what-input";
import "./preview.css";
import React from "react";
import navigationData from "./navigation.json";
// import { Section } from "@lsg/components" // this import loses types (optional typings) - why? 
import { Section } from "../src/components/Section/Section";
import { Preview } from "@storybook/react";
import { withPageLayout } from "./pageLayout/withPageLayout";
import { withAlignment } from "./alignment/withAlignment";

// Set initial values for globals (required in Storybook 10)
export const initialGlobals = {
    theme: 'light',
    viewport: '',
    pageLayout: '',
    alignment: '',
};


const customViewports = {
    smallMobile: {
        name: "Small Mobile (rarely used)",
        styles: {
            width: "320px",
            height: "740px",
        },
        type: "mobile",
    },
    standardMobile: {
        name: "Standard Mobile (Android)",
        styles: {
            width: "360px",
            height: "740px",
        },
        type: "mobile",
    },
    largeMobile: {
        name: "Large Mobile (iPhone 12/13/14)",
        styles: {
            width: "390px",
            height: "896px",
        },
        type: "mobile",
    },
    tabletPortrait: {
        name: "Tablet Portrait",
        styles: {
            width: "768px",
            height: "1024px",
        },
        type: "tablet",
    },
    tabletLandscape: {
        name: "Tablet Landscape",
        styles: {
            width: "1024px",
            height: "768px",
        },
        type: "tablet",
    },
    desktop: {
        name: "Desktop 1920",
        styles: {
            width: "1920px",
            height: "1080px",
        },
        type: "desktop",
    },
        desktopWide: {
        name: "Desktop 3840",
        styles: {
            width: "3840px",
            height: "216px",
        },
        type: "desktop",
    },
};


const preview: Preview = {
    // Define global selectors in toolbar
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme for components',
            toolbar: {
                icon: 'paintbrush',
                items: [
                    { value: 'light', title: 'Light', icon: 'sun' },
                    { value: 'lightElevated', title: 'Light Elevated', icon: 'cloud' },
                    { value: 'medium', title: 'Medium', icon: 'contrast' },
                    { value: 'highContrastLight', title: 'High Contrast Light', icon: 'contrast' },
                    { value: 'dark', title: 'Dark', icon: 'moon' },
                    { value: 'darkElevated', title: 'Dark Elevated', icon: 'circlehollow' },
                    { value: 'darkHighContrast', title: 'Dark High Contrast', icon: 'circle' },
                ],
                dynamicTitle: true,
            },
        },
        viewport: {
            name: 'Viewport',
            description: 'Select viewport size',
            defaultValue: '',
            toolbar: {
                icon: 'mobile',
                items: [
                    { value: '', title: 'Viewport nicht gesetzt', icon: 'mobile' },
                    { value: 'smallMobile', title: 'Small Mobile (rarely used)' },
                    { value: 'standardMobile', title: 'Standard Mobile (Android)' },
                    { value: 'largeMobile', title: 'Large Mobile (iPhone 12/13/14)' },
                    { value: 'tabletPortrait', title: 'Tablet Portrait' },
                    { value: 'tabletLandscape', title: 'Tablet Landscape' },
                    { value: 'desktop', title: 'Desktop 1920' },
                    { value: 'desktopWide', title: 'Desktop 3840' },
                ],
                dynamicTitle: true,
                showName: true,
            },
        },
        pageLayout: {
            name: 'Page Layout',
            description: 'Switch between different page layouts',
            toolbar: {
                icon: 'paragraph',
                items: [
                    { value: '', title: 'Default Layout' },
                    { value: 'drawer', title: 'Drawer' },
                    { value: 'process', title: 'Process' },
                    { value: 'portal', title: 'Portal' },
                ],
                dynamicTitle: true,
            },
        },
        alignment: {
            name: 'Alignment',
            description: 'Horizontal alignment for components',
            toolbar: {
                icon: 'styledcomponent',
                items: [
                    { value: '', title: 'Default Alignment' },
                    { value: 'left', title: 'Left' },
                    { value: 'center', title: 'Center' },
                    { value: 'right', title: 'Right' },
                ],
                dynamicTitle: true,
            },
        },
    },

    parameters: {
        // Enable Code Panel to display story source code
        // This replaces the discontinued @storybook/addon-storysource
        docs: {
            codePanel: true,
        },
        viewport: {
            options: {
                ...customViewports, // Custom viewports for Storybook 10
            },
        },
        options: {
            storySort: (a, b) => {
                const categoryOrder = [
                    "Basics",
                    "Buttons",
                    "Content",
                    "DataVisualization",
                    "FormElements",
                    "Messages",
                    "Navigation",
                    "",
                ];

                if (a.id === b.id) {
                    return 0;
                }
                const titleMinLenght = Math.min(a.title.length, b.title.length);
                if (a.title.substring(0, titleMinLenght) === b.title.substring(0, titleMinLenght)) {
                    // Sort {title: "Content/Accordion/Test"} before {title: "Content/Accordion"}
                    if (a.title.length !== b.title.length) {
                        return Math.sign(b.title.length - a.title.length);
                    }
                    // Sort {title: "Content/Accordion", type: "docs"} before {title: "Content/Accordion", type: "story"}
                    const docsOffsetA = a.type === "docs" ? 2 : 0;
                    const docsOffsetB = b.type === "docs" ? 2 : 0;
                    return Math.sign(
                        a.id.localeCompare(b.id, undefined, { numeric: true }) - docsOffsetA + docsOffsetB
                    );
                }
                const categoryA = a.title.split("/")[0];
                const categoryB = b.title.split("/")[0];
                if (categoryA !== categoryB) {
                    // {title: "Layout/..."}, {title: "Content/..."}, {title: "Unknown1/"}, {title: "Unknown2/"}
                    const categoryIndexA = categoryOrder.findIndex(v => v === categoryA || v === "");
                    const categoryIndexB = categoryOrder.findIndex(v => v === categoryB || v === "");
                    if (categoryIndexA !== categoryIndexB) {
                        return Math.sign(categoryIndexA - categoryIndexB);
                    }
                }
                return Math.sign(a.id.localeCompare(b.id, undefined, { numeric: true }));
            },
        },
    },


    // Storybook decorators
    // These decorators enhance the story rendering with additional functionality.
    // Decorators are applied in the order they are defined (first: viewport (toolbar), second: withAlignment (toolbar), third: theming (toolbar), fourth: withLayout (toolbar)).
    decorators: [
        // This decorator applies the selected viewport size to the story canvas.
        (Story, { globals }) => {
            const selectedViewport = globals.viewport || '';
            
            React.useEffect(() => {
                if (selectedViewport && customViewports[selectedViewport as keyof typeof customViewports]) {
                    const viewport = customViewports[selectedViewport as keyof typeof customViewports];
                    const iframe = document.querySelector('iframe#storybook-preview-iframe') as HTMLIFrameElement;
                    
                    if (iframe) {
                        iframe.style.width = viewport.styles.width;
                        iframe.style.height = viewport.styles.height;
                    }
                } else {
                    // Reset to default if no viewport selected
                    const iframe = document.querySelector('iframe#storybook-preview-iframe') as HTMLIFrameElement;
                    if (iframe) {
                        iframe.style.width = '100%';
                        iframe.style.height = '100%';
                    }
                }
            }, [selectedViewport]);

            return <Story />;
        },
        // This decorator applies the selected alignment (e.g., Left, Center, Right) to the story.
        withAlignment,
        // This decorator applies global theming based on the selected theme in the toolbar.
        // It maps the selected theme to CSS classes and applies them to the document body.
        (Story, { parameters, globals }) => {
            // Map theme names to CSS classes
            const themeClassMap: Record<string, string> = {
                light: "",
                lightElevated: "lsg---background-col-background-hover lsg---theme__hover",
                medium: "lsg---theme__medium lsg---theme__bg-medium",
                highContrastLight: "lsg---theme__contrast lsgsb--needs-additional-theme-class",
                dark: "lsg---theme__dark lsg---theme__bg-dark",
                darkElevated: "lsg---theme__dark lsgsb--needs-additional-theme-class",
                darkHighContrast: "lsg---theme__dark lsgsb--needs-additional-theme-class",
            };

            // Get the current theme from globals.theme (set by custom globalTypes toolbar)
            const currentTheme = globals.theme || 'light';
            const themeClassName = themeClassMap[currentTheme] || "";

            // Apply theme class to document body for global theming
            React.useEffect(() => {
                const body = document.body;
                // Remove all theme classes
                Object.values(themeClassMap).forEach(className => {
                    if (className) {
                        body.classList.remove(...className.split(' '));
                    }
                });
                // Add current theme classes
                if (themeClassName) {
                    themeClassName.split(' ').forEach(cls => {
                        body.classList.add(cls);
                    });
                }

                return () => {
                    // Cleanup: remove theme classes when unmounting
                    if (themeClassName) {
                        themeClassName.split(' ').forEach(cls => {
                            body.classList.remove(cls);
                        });
                    }
                };
            }, [themeClassName]);

            // Handle layout options
            const layout = { iframe: "fullscreen", isolated: "fullscreen" }[parameters.layout] || parameters.layout;

            // Additional theme-specific classes
            const additionalThemeClassName =
                {
                    highContrastLight: "lsg---background-col-background",
                    darkElevated: "lsg---theme__elevated lsg---theme__bg-elevated",
                    darkHighContrast: "lsg---theme__contrast",
                }[currentTheme] || "";

            let result = <Story />;

            // Wrap in Section if not fullscreen or centered
            if (layout !== "centered" && layout !== "fullscreen") {
                result = <Section>{result}</Section>;
            }

            // Apply additional theme wrappers if needed
            if (currentTheme === "darkHighContrast") {
                result = <div className="dark-high-contrast-wrapper">{result}</div>;
            }
            if (additionalThemeClassName) {
                result = <div className={additionalThemeClassName}>{result}</div>;
            }

            return result;
        },
        // This decorator applies the selected page layout (e.g., Drawer, Process, Portal) to the story.
        withPageLayout,

    ],
};

export const createNavigationData = () => {
    const scriptElement = document.createElement("script");
    scriptElement.setAttribute("id", "navigationData");
    scriptElement.setAttribute("type", "application/json");
    scriptElement.innerText = JSON.stringify(navigationData);
    document.head.appendChild(scriptElement);
};

// Todo: What's this for?
createNavigationData();

// Reference: Migration documentation available at .storybook/docs/storybook-migration-10.md
// Note: The absence of a manager.ts file is due to changes in Storybook 10. The manager configuration is now integrated into the core setup, simplifying the configuration process.

export default preview;
