import path from "path";
import url from "url";
import { rewriteStorybookImport, tss } from "@lsg/plugin";

import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import autoprefixer from "autoprefixer";
import glob from "fast-glob";
import postcssDiscardComments from "postcss-discard-comments";
import postcssImport from "postcss-import";
import postcssReplace from "postcss-replace";
import postcssUrl from "postcss-url";
import rollupPostcss from "rollup-plugin-postcss";
import smartAsset from "rollup-plugin-smart-asset";
import svg from "rollup-plugin-svg";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const createGlobString = s => `./src/components/${s}/*.test.stories.tsx`;
const getStoryFiles = testableComponents =>
    testableComponents
        ? testableComponents.split(":").flatMap(c => glob.sync(createGlobString(c)))
        : glob.sync(createGlobString("**"));

const testIndexFile = getStoryFiles(process.env.LSG_TESTABLE_COMPONENTS)
    .map(s => `    await import ("${s.replace("./src", "../")}"),\n`)
    .join("");
const getStories = `async () => [\n${testIndexFile}\n];`;

const lsgPre = `lsgs--`;
const lsgPreComp = `lsg--`;

const config = [
    {
        input: "./src/test/TestPage.tsx",
        treeshake: false,
        output: {
            file: "dist/test/index.js",
            inlineDynamicImports: true,
            format: "iife",
        },
        plugins: [
            rewriteStorybookImport(),
            replace({
                "process.env.NODE_ENV": JSON.stringify("test"),
                "const getStories = GET_STORIES": `const getStories = ${getStories}`,
                "process.env.STORYBOOK_ASSET_PATH": JSON.stringify(process.env.STORYBOOK_ASSET_PATH || ""),
                "process.env.LSG_VERSION": "undefined",
                sourceMap: true, // enabled sourcemaps to avoid eventual mapping issues
            }),
            tss({
                logCssErrors: false,
                lsgPre,
                versionPrefix: "undefined",
                styleInject: true,
            }),
            rollupPostcss({
                plugins: [
                    postcssReplace({
                        pattern: ".lsg--",
                        data: { replaceAll: `.${lsgPreComp}` },
                    }),
                    postcssImport(),
                    postcssUrl({
                        url: "inline",
                        basePath: path.join(__dirname, "src"),
                        filter: /.*\.(woff|woff2)/, // NOSONAR
                    }),
                    postcssDiscardComments(),
                    autoprefixer(),
                ],
                inject: true,
                minimize: true,
                extensions: [".css", ".scss"],
            }),
            svg(),
            smartAsset({
                // maxSize is set to 100kb
                maxSize: 100,
                url: "inline",
                outputDir: path.dirname("dist/test"),
                inputFile: path.resolve(`${__dirname}/src/index.tsx`),
                extensions: [".gif", ".png", ".jpg"],
                sourceMap: true, // enabled sourcemaps to avoid eventual mapping issues
            }),
            resolve({
                mainFields: ["jsnext:main", "es2017", "module", "main"],
                extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx"],
            }),
            commonjs({
                include: /node_modules/,
            }),
            babel({
                extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
                presets: ["@babel/preset-typescript"],
                plugins: ["istanbul"],
                sourceMaps: "inline", // enabled sourcemaps to avoid eventual mapping issues
            }),
        ],
    },
];

export default config;
