import * as path from "path";
import { tss, rewriteStencilFCExport } from "@lsg/plugin";
import resolve from "@rollup/plugin-node-resolve";
import rollupBabel from "rollup-plugin-babel";
import smartAsset from "rollup-plugin-smart-asset";
import svg from "rollup-plugin-svg";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import tsConfig from "./tsconfig.build.json";

/*
const external = [
    ...Object.keys(pkg.dependencies),
    "date-fns/esm",
];
 */

const forceExternal = ["tslib"];

const external = (lib, ...args) => {
    // console.log("lib", lib, !lib.startsWith("./") && !/lsg\.shared/.test(lib), args);
    if (forceExternal.includes(lib)) {
        return false;
    }
    return !lib.startsWith("./") && !lib.startsWith("../") && !/lsg\.shared/.test(lib);
};

export default [
    // React
    {
        treeshake: false,
        preserveModules: true,
        input: `src/index.react.tsx`,
        // input: `src/components/Icon/IconFC.styles.ts`,
        plugins: [
            tss({
                css: true,
                logCssErrors: true,
                lsgPre: "lsgs--",
                styleInject: true,
            }),
            svg(),
            smartAsset({
                // maxSize is set to 100kb
                maxSize: 100,
                url: "inline",
                outputDir: path.dirname(pkg.es2017),
                inputFile: path.resolve(`${__dirname}/src/index.react.tsx`),
                extensions: [".gif", ".png", ".jpg"],
                /*
                assetsPath: "../public/componentImages",
                keepImport: true,
                 */
            }),
            typescript({
                tsconfig: path.resolve(`${__dirname}/tsconfig.build.json`),
                include: tsConfig.include,
                exclude: tsConfig.exclude,
                clean: true,
                useTsconfigDeclarationDir: true,
            }),
            resolve({
                extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx"],
            }),
        ],
        external,
        output: {
            dir: path.dirname(pkg.es2017),
            format: "esm",
        },
    },
    {
        preserveModules: true,
        input: "dist/esm/index.react.js",
        plugins: [
            {
                name: "watch-external",
                buildStart() {
                    this.addWatchFile(path.resolve(__dirname, "dist/esm/index.js"));
                },
            },
            rollupBabel({
                extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
            }),
        ],
        external,
        output: [
            {
                dir: path.dirname(pkg.main),
                format: "cjs",
            },
            {
                dir: path.dirname(pkg.module),
                format: "esm",
            },
        ],
    },
];
