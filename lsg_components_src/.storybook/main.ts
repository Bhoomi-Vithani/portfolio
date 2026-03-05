import type { StorybookConfig } from '@storybook/react-vite';
// @ts-ignore - glob types might not be available
import glob from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';
import { mergeConfig } from 'vite';
import { tssVitePlugin } from '../vite-plugin-tss.ts';
import { getCodeEditorStaticDirs } from 'storybook-addon-code-editor/getStaticDirs';

// ESM equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check for LSG_STORY environment variable
if (!process.env.LSG_STORY) {
    console.error(
        'No story file environment variable set. To e.g. only run storybook with the Paragraph ' +
            'component, execute `export LSG_STORY=Paragraph` (or `SET LSG_STORY=Paragraph` on Windows). Then run `npm run storybook`'
    );
    process.exit(1);
}

// Collect test sample directories
const filesTestSamples = glob.sync('src/components/**/__test-samples__');
const staticDirsTestSamples = filesTestSamples.map(f => ({
    from: path.join('..', f),
    to: '__test-samples__',
}));

// Collect test report directories
const filesTestReports = glob.sync('src/components/**/__test-report__');
const staticDirsTestReports = filesTestReports.map(f => ({
    from: path.join('..', f),
    to: '__test-report__',
}));

const config: StorybookConfig = {
    // Story patterns based on LSG_STORY environment variable
    stories: [
        `../src/components/${process.env.LSG_STORY.trim()}/*.mdx`,
        `../src/components/${process.env.LSG_STORY.trim()}/*.stories.@(js|jsx|mjs|ts|tsx)`,
        `../src/components/${process.env.LSG_STORY.trim()}/*.sgn.stories.@(js|jsx|mjs|ts|tsx)`,
    ],

    // Static directories for assets
    staticDirs: ['../public/', ...staticDirsTestSamples,
        ...staticDirsTestReports,

        ...getCodeEditorStaticDirs(__filename),
    ],

    // Framework: React with Vite (changed from webpack5)
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },

    // Addons configuration
    addons: [
        '@storybook/addon-docs', // Required for MDX support in Storybook 10
        // Most other addons removed due to version incompatibility with Storybook 10
        // TODO: Re-add compatible versions after testing
        '@storybook/addon-a11y',
        // '@storybook/addon-designs', // Not compatible with Storybook 10
        // '@storybook/addon-essentials', // Causes dependency conflicts
        // './pageLayout', // Now using globalTypes in preview.tsx
        // './alignment', // Now using globalTypes in preview.tsx
        // '@storybook/addon-links',
        // '@storybook/addon-onboarding', // Not compatible with Storybook 10
        // '@storybook/addon-interactions',
        'storybook-addon-code-editor',
    ],

    // Environment variables
    env: config => ({
        ...config,
        STORYBOOK_ASSET_PATH: process.env.STORYBOOK_ASSET_PATH || '',
        LSG_ASSET_PATH: process.env.STORYBOOK_ASSET_PATH || '',
    }),

    // TypeScript configuration
    typescript: {
        check: true,
        reactDocgen: 'react-docgen',
    },

    // Documentation
    docs: {},

    // Vite configuration customization
    async viteFinal(config, { configType }) {
        // For Storybook: NO version prefix (classes without hash)
        // For production build: LSG_VERSION is set in rollup.config
        const lsgVersion = ''; // Empty string = no version prefix in Storybook

        return mergeConfig(config, {
            resolve: {
                alias: {
                    // Redirect @lsg/components to local source (prevents circular dependencies)
                    '@lsg/components': path.resolve(__dirname, '../src/index.tsx'),
                    // Redirect @lsg/charts to the charts package source (prevents using pre-compiled dist files)
                    '@lsg/charts': path.resolve(__dirname, '../../lsg.charts/src/index.tsx'),
                    // Redirect legacy Storybook 7 imports to Storybook 10 blocks
                    // '@storybook/addon-docs/blocks': '@storybook/blocks',
                    // Redirect react-dom-shim to react-dom
                    // ‚'@storybook/react-dom-shim': 'react-dom',
                },
            },
            
            // Skip import analysis for MDX files to prevent parsing errors
            server: {
                fs: {
                    // Allow serving files from the entire monorepo
                    allow: ['..'],
                },
            },

            build: {
                rollupOptions: {
                    // Mark Storybook packages as external to prevent bundling issues
                    // EXCEPT packages that must be bundled for static builds to work
                    external: [
                        /^@storybook\/(?!react-dom-shim|addon-docs|icons)/,  // All @storybook/* EXCEPT react-dom-shim, addon-docs/*, icons
                        /^storybook$/,
                    ],
                },
            },

            define: {
                // Make LSG_VERSION available but empty in Storybook (no prefixes)
                'import.meta.env.VITE_LSG_VERSION': JSON.stringify(lsgVersion),
                'process.env.LSG_VERSION': JSON.stringify(lsgVersion),
                // Make asset paths available
                'process.env.LSG_ASSET_PATH': JSON.stringify(process.env.STORYBOOK_ASSET_PATH || ''),
                'process.env.STORYBOOK_ASSET_PATH': JSON.stringify(process.env.STORYBOOK_ASSET_PATH || ''),
            },

            // Disable dependency pre-bundling (Vite 5.1+ syntax)
            // This ensures .styles.ts files go through our plugin transform
            optimizeDeps: {
                noDiscovery: true,
                include: [
                    'react',
                    'react-dom',
                    'react/jsx-runtime',
                    'lodash.isequal',
                    'what-input',
                    'lodash',  // CommonJS module - needs pre-bundling for named exports
                    '@babel/standalone',  // Needed for storybook-addon-code-editor
                ],
            },

            // Handle SVG files inline
            assetsInclude: ['**/*.svg'],

            // Custom plugins
            plugins: [
                // CRITICAL: Process *.styles.ts files FIRST
                tssVitePlugin({
                    css: false, // Don't output CSS files in dev mode
                    logCssErrors: false,
                    styleInject: true, // Auto-inject styles
                    styleInjectHot: true, // Enable HMR for styles
                    version: lsgVersion,
                }),
                {
                    name: 'svg-inline-loader',
                    enforce: 'pre',
                    transform(code: string, id: string) {
                        // Skip MDX files - let Storybook's MDX plugin handle them
                        if (id.endsWith('.mdx')) {
                            return null;
                        }
                        if (id.endsWith('.svg')) {
                            // Read SVG content and return as string export
                            return {
                                code: `export default ${JSON.stringify(code)}`,
                                map: null,
                            };
                        }
                        return null;
                    },
                },
                // Plugin to handle any post-processing of generated bundles
                // Note: @storybook/addon-docs/blocks is a valid export in Storybook 10
                // and should NOT be rewritten to @storybook/blocks
                {
                    name: 'storybook-bundle-processor',
                    enforce: 'post',
                    generateBundle(_options: any, bundle: any) {
                        // Currently no post-processing needed
                        // The external config with negative lookahead handles bundling
                    },
                },
            ],
        });
    },
};

// Reference: Migration documentation available at .storybook/docs/storybook-migration-10.md

export default config;
