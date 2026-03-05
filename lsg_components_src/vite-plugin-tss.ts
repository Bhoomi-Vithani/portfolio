/**
 * Vite Plugin Wrapper for tss() (TypeScript Styled String) functionality
 * 
 * This plugin adapts the existing @lsg/plugin tss() Rollup plugin for use with Vite.
 * It processes *.styles.ts files, converts styled`` templates to CSS, and auto-injects styles.
 * 
 * Key Features:
 * - Processes *.styles.ts files using the same logic as the Rollup build
 * - Converts TypeScript styled templates to CSS
 * - Transforms Stencil syntax (:host, ::slotted) to React class selectors
 * - Adds version-based CSS prefixes (lsg- → lsgs-{version}--)
 * - Auto-injects styles via style-inject package
 * - Integrates with @lsg/ssr for server-side rendering
 */

import { Plugin } from 'vite';
// Import tss from the compiled distribution
import { tss } from '@lsg/plugin/dist/index.js';
import path from 'path';
import { createHash } from 'crypto';

interface TssVitePluginOptions {
    /** Enable CSS file output (default: false for Storybook dev mode) */
    css?: boolean;
    /** Log CSS validation errors (default: false) */
    logCssErrors?: boolean;
    /** Auto-inject styles in browser (default: true) */
    styleInject?: boolean;
    /** Enable HMR-compatible style injection (default: true for dev) */
    styleInjectHot?: boolean;
    /** LSG version for CSS prefixing (default: from env) */
    version?: string;
}

/**
 * Creates a Vite plugin that processes *.styles.ts files using the tss() logic
 */
export function tssVitePlugin(options: TssVitePluginOptions = {}): Plugin {
    // Generate version prefix for CSS class names
    // If no version is provided or it's empty, don't add version prefix (for Storybook dev)
    const lsgVersion = options.version !== undefined ? options.version : (process.env.LSG_VERSION || 'dev');
    
    let lsgPre: string;
    let versionPrefix: string;
    
    if (lsgVersion === '' || !lsgVersion) {
        // No version = no prefix (Storybook development mode)
        lsgPre = 'lsgs--';
        versionPrefix = '""';
    } else {
        // Production mode: add version-based hash prefix
        versionPrefix = JSON.stringify(createHash('md5').update(lsgVersion).digest('hex').substring(0, 6));
        lsgPre = `lsgs-${versionPrefix.replace(/"/g, '')}--`;
    }

    // Configure tss() plugin
    const tssPlugin = tss({
        css: options.css ?? false, // Don't output CSS files in dev mode
        logCssErrors: options.logCssErrors ?? false,
        lsgPre,
        styleInject: options.styleInject ?? true,
        styleInjectHot: options.styleInjectHot ?? true,
        versionPrefix,
    });

    return {
        name: 'vite-plugin-tss',
        
        // Apply plugin during both dev and build
        enforce: 'pre',

        // Transform *.styles.ts files
        async transform(code, id) {
            // Only process *.styles.ts and *.styles.js files
            if (!id.endsWith('.styles.ts') && !id.endsWith('.styles.js')) {
                return null;
            }

            try {
                // Use the tss() transform function
                const result = await tssPlugin.transform.call(this, code, id);
                
                if (!result) {
                    return null;
                }

                return {
                    code: result.code,
                    map: result.map,
                };
            } catch (error) {
                this.error({
                    id,
                    message: `Error processing ${path.basename(id)}: ${error.message}`,
                    stack: error.stack,
                });
            }
        },

        // Handle HMR (Hot Module Replacement)
        handleHotUpdate({ file, server }) {
            if (file.endsWith('.styles.ts') || file.endsWith('.styles.js')) {
                // Invalidate the module to trigger re-transform
                const module = server.moduleGraph.getModuleById(file);
                if (module) {
                    server.moduleGraph.invalidateModule(module);
                }
                
                // Return empty array to let Vite handle the update
                return [];
            }
        },
    };
}

export default tssVitePlugin;
