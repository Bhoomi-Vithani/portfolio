/* eslint-disable etc/no-commented-out-code */
import { defineConfig, devices, expect } from "@playwright/test";
import { toHaveTestSuiteScreenshots } from "./src/test/playwright/toHaveTestSuiteScreenshots";

/** Determine if the current platform is macOS, because the Microsoft Edge executable path differs between macOS
 * and Windows. */
const isMac = process.platform === "darwin";
/** Get the TeamCity agent name from environment; used to conditionally skip visual tests on specific agents. */
const teamCityAgentName = process.env.TEAM_CITY_AGENT_NAME;
/** Determine if visual tests are enabled via environment variable. Default is true.  */
const enableVisualTests = process.env.ENABLE_VISUAL_TESTS !== "false";

console.log(`------------------`);
console.log(`Playwright config:`);
console.log(`------------------`);
console.log(`enableVisualTests: ${enableVisualTests}`);
console.log(`isMac: ${isMac}`);
console.log(`teamCityAgentName: ${teamCityAgentName}`);
console.log(`------------------`);

/**
 * Playwright configuration file.
 *
 * This configuration sets up the Playwright test environment, specifying
 * the directories and patterns for test files, ignored tests, timeout settings,
 * reporters, and other options.
 */
export default defineConfig({
    testDir: "src",

    // The directory where the test files are located.
    // comment this out if you want to test only specific files (see below)
    testMatch: ["src/**/*.spec.ts"],

    //  Use command line filtering to run specific tests:
    //  npm run test -- --grep="TextField"           # Run tests with "TextField" in the name
    //  npm run test -- src/**/Radio*.spec.ts        # Run Radio tests specifically
    //  npm run test -- src/**/TextField*.spec.ts    # Run Radio tests specifically
    //  npm run test -- --grep="automation"          # Run all automation tests
    //
    //  Or uncomment specific patterns below for targeted testing:
    // testMatch: [
    //     "src/**/TextField.automation.spec.ts",
    //     "src/**/Select.automation.spec.ts",
    //     "src/**/Button.automation.spec.ts",
    //     "src/**/Radio.automation.spec.ts",
    //     "src/**/Upload.automation.spec.ts",
    //     "src/**/Checkbox.automation.spec.ts",
    //     "src/**/DatePicker.automation.spec.ts",
    //     "src/**/Search.automation.spec.ts",
    // ],
    // testIgnore: [],

    testIgnore:
        // Ignore visual tests on TeamCity CHAMP Podman agents (Linux) as we currently don't have a browser
        // (Microsoft Edge) installed on those machines and still don't have another solution for visual testing.
        // teamCityAgentName?.includes("CHAMP")

        // Use a more general approach to skip visual tests.
        !enableVisualTests
            ? [
                  "src/**/_Info.spec.ts",
                  "src/**/Accordion.spec.ts",
                  "src/**/ActionButton.spec.ts",
                  "src/**/BannerMessage.spec.ts",
                  "src/**/BarDiagram.spec.ts",
                  "src/**/Breadcrumbs.spec.ts",
                  "src/**/Button.automation.spec.ts",
                  "src/**/Button.spec.ts",
                  "src/**/CardsCustomItem.spec.ts",
                  "src/**/Checkbox.automation.spec.ts",
                  "src/**/Checkbox.spec.ts",
                  "src/**/DatePicker.automation.spec.ts",
                  "src/**/Icon.spec.ts",
                  "src/**/IconLink.spec.ts",
                  "src/**/Link.spec.ts",
                  "src/**/Radio.automation.spec.ts",
                  "src/**/Radio.spec.ts",
                  "src/**/Search.automation.spec.ts",
                  "src/**/Select.automation.spec.ts",
                  "src/**/StatusIndicator.spec.ts",
                  "src/**/Switch.spec.ts",
                  "src/**/TextField.automation.spec.ts",
              ]
            : [],
    timeout: 300000,
    reporter: [["html"]],
    workers: 6,
    use: {
        ...devices["Desktop Chrome"],
        baseURL: process.env.SERVER_URL,
        launchOptions: {
            executablePath: isMac
                ? "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"
                : "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
            // Set to 'false' if you want to see the browser with a visible GUI for local debugging.
            // Set to `true` in CI/headless environments.
            headless: true,
        },
    },
});

expect.extend({
    toHaveTestSuiteScreenshots,
});
