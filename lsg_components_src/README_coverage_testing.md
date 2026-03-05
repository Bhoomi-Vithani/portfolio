# Testing and Test Coverage in lsg.components

> **Note: This documentation was initially AI-generated and may require review and updates.**

## Overview

Components in the `lsg.components` package are tested using **Playwright** for end-to-end tests. Test coverage is
measured with **Istanbul** via the **babel-plugin-istanbul** during the **Rollup build process**. The project does not
use traditional unit tests with e.g. **Jest**, but rather automated browser tests that test actually rendered components.

## Test Architecture

### Playwright for End-to-End Tests

-   **Test Framework**: Playwright is used for automated browser tests
-   **Browser**: Microsoft Edge (configured in `playwright.config.ts`)
-   **Test Files**: `*.automation.spec.ts` and `*.spec.ts`, files in component directories
-   **Test Stories**: Components are tested via `*.test.stories.tsx` files
-   **Headless Mode**: Tests run by default without a visible browser window

### Istanbul for Code Coverage

-   **Coverage Tool**: NYC (New York City) - an Istanbul command-line interface
-   **Integration**: Istanbul is injected via **babel-plugin-istanbul** during the **Rollup build process**
-   **Instrumentation**: Code is automatically instrumented during **Rollup build for tests** (not at runtime)
-   **Build-Level Coverage**: Instrumentation happens at build level, not test level
-   **Configuration**: `.nycrc.json` defines coverage settings and output formats

## Coverage Instrumentation in Detail

### Rollup Test Build with Istanbul

Test coverage is implemented through the **babel-plugin-istanbul** in `rollup.test.config.mjs`:

```javascript
// rollup.test.config.mjs
babel({
    extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
    presets: ["@babel/preset-typescript"],
    plugins: [
        [
            "istanbul",
            {
                exclude: ["**/*.test.stories.tsx", "**/*.stories.tsx", "**/*.spec.ts"],
            },
        ],
    ],
    sourceMaps: "inline",
});
```

### The Role of playwright-test-coverage

The **`playwright-test-coverage`** package is a crucial component that bridges Playwright testing with Istanbul coverage
collection. It extends the standard Playwright test framework with coverage-specific functionality:

#### Key Responsibilities:

1. **Coverage Data Collection**: Automatically collects coverage data from the browser's `window.__coverage__` object
   after each test execution
2. **Multi-Worker Coordination**: Manages coverage data across multiple Playwright workers running tests in parallel
3. **Data Aggregation**: Merges coverage data from all workers into a consolidated dataset
4. **NYC Integration**: Interfaces with NYC (Istanbul) to generate final coverage reports

#### The window.**coverage** Object

When Istanbul instruments code during the Rollup build process, it injects coverage tracking code that populates a
global `window.__coverage__` object in the browser context:

```javascript
// Example of what Istanbul injects into instrumented code
window.__coverage__ = window.__coverage__ || {};
window.__coverage__["src/components/Button/Button.tsx"] = {
    path: "src/components/Button/Button.tsx",
    statementMap: {
        /* statement locations */
    },
    fnMap: {
        /* function locations */
    },
    branchMap: {
        /* branch locations */
    },
    s: {
        /* statement hit counts */
    },
    f: {
        /* function hit counts */
    },
    b: {
        /* branch hit counts */
    },
};

// Each executed line increments counters
window.__coverage__["src/components/Button/Button.tsx"].s["1"]++; // Statement 1 executed
window.__coverage__["src/components/Button/Button.tsx"].f["0"]++; // Function 0 called
```

#### Coverage Collection Workflow

1. **Pre-Test Setup**:

    ```typescript
    // playwright-test-coverage automatically sets up hooks
    test.beforeEach(async ({ page }) => {
        // Clear previous coverage data
        await page.evaluate(() => {
            window.__coverage__ = {};
        });
    });
    ```

2. **During Test Execution**:

    ```typescript
    // As tests run, instrumented code populates window.__coverage__
    await page.click("#my-button"); // This increments coverage counters
    await page.fill("#input", "test"); // This also increments counters
    ```

3. **Post-Test Collection**:
    ```typescript
    // playwright-test-coverage automatically extracts data after each test
    test.afterEach(async ({ page }) => {
        const coverage = await page.evaluate(() => window.__coverage__);
        // Store coverage data for this test/worker
        global.__coverage__ = mergeCoverage(global.__coverage__, coverage);
    });
    ```

### Multi-Worker Coverage Coordination

Playwright runs tests in parallel using multiple workers for performance. Each worker runs in its own browser context
with its own `window.__coverage__` object:

#### Worker Isolation Challenge:

```
Worker 1 Browser          Worker 2 Browser          Worker 3 Browser
├── window.__coverage__   ├── window.__coverage__   ├── window.__coverage__
│   ├── Button.tsx        │   ├── TextField.tsx     │   ├── Select.tsx
│   └── Checkbox.tsx      │   └── DatePicker.tsx    │   └── Radio.tsx
```

#### Playwright-Test-Coverage Solution:

1. **Per-Worker Collection**:

    ```typescript
    // Each worker maintains its own coverage accumulator
    let workerCoverage = {};

    test.afterEach(async ({ page, workerInfo }) => {
        const testCoverage = await page.evaluate(() => window.__coverage__);
        workerCoverage = mergeCoverage(workerCoverage, testCoverage);
    });
    ```

2. **Worker Data Merging**:

    ```typescript
    // After all tests complete, playwright-test-coverage merges all worker data
    test.afterAll(async ({ workerInfo }) => {
        // Write worker coverage to temporary file
        const workerFile = `.nyc_output/worker-${workerInfo.workerIndex}.json`;
        await fs.writeFile(workerFile, JSON.stringify(workerCoverage));
    });
    ```

3. **Final Report Generation**:
    ```bash
    # NYC automatically finds and merges all worker files
    nyc report --reporter=lcov --reporter=text
    ```

### Coverage Data Flow Diagram

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Rollup Build  │    │  Playwright Test │    │  NYC Reporting  │
│                 │    │   Execution      │    │                 │
│ ┌─────────────┐ │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ │   Istanbul  │ │    │ │   Worker 1   │ │    │ │   Merge     │ │
│ │ Instruments │ ├────┤ │              │ │    │ │  Coverage   │ │
│ │    Code     │ │    │ │window.__cov..│ ├────┤ │    Data     │ │
│ └─────────────┘ │    │ └──────────────┘ │    │ └─────────────┘ │
│                 │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ ┌─────────────┐ │    │ │   Worker 2   │ │    │ │  Generate   │ │
│ │   Bundle    │ │    │ │              │ │    │ │   Reports   │ │
│ │ dist/test/  │ │    │ │window.__cov..│ ├────┤ │ (HTML/LCOV) │ │
│ │  index.js   │ │    │ └──────────────┘ │    │ └─────────────┘ │
│ └─────────────┘ │    │ ┌──────────────┐ │    └─────────────────┘
└─────────────────┘    │ │   Worker N   │ │
                       │ │              │ │
                       │ │window.__cov..│ │
                       │ └──────────────┘ │
                       └──────────────────┘
```

### Configuration Integration

The integration is configured in the test setup:

```typescript
// playwright.config.ts
export default defineConfig({
    // playwright-test-coverage is imported instead of standard @playwright/test
    testDir: "src",
    testMatch: ["src/**/*.spec.ts"],

    use: {
        // Coverage collection is automatic - no additional configuration needed
        // playwright-test-coverage handles window.__coverage__ extraction
    },

    // Multiple workers enable parallel testing with coverage
    workers: 6,
});
```

```json
// .nycrc.json - NYC processes the merged coverage data
{
    "temp-dir": ".nyc_output", // Where worker coverage files are stored
    "report-dir": "../../coverage",
    "reporter": ["lcov", "text"]
    // NYC merges all files in temp-dir automatically
}
```

### Debugging Coverage Collection

To troubleshoot coverage collection issues:

```typescript
// Check if window.__coverage__ is populated
test("Debug coverage data", async ({ page }) => {
    await page.goto("http://localhost:3000");

    const coverageExists = await page.evaluate(() => {
        return typeof window.__coverage__ !== "undefined" && Object.keys(window.__coverage__).length > 0;
    });

    if (coverageExists) {
        const files = await page.evaluate(() => Object.keys(window.__coverage__));
        console.log("Coverage collected for files:", files);
    } else {
        console.log("No coverage data found - check Istanbul instrumentation");
    }
});
```

### Performance Considerations

The playwright-test-coverage integration has minimal performance impact:

-   **Memory**: Each worker maintains its own coverage object (~1-5MB per worker)
-   **Network**: No additional network requests - coverage data is in-memory
-   **Disk I/O**: Worker files are written only after test completion
-   **Merging**: NYC efficiently merges JSON coverage data using optimized algorithms

This architecture ensures accurate coverage collection across parallel test execution while maintaining Playwright's
performance benefits.

### How Instrumentation Works

1.  **Rollup Build**: `npm run test:build` creates the test bundle
2.  **Babel Processing**: All TypeScript/JavaScript files are processed through Babel
3.  **Istanbul Injection**: The babel-plugin-istanbul injects coverage code into every instrumented file
4.  **Exclude Filter**: Certain files/packages are excluded from instrumentation
5.  **Bundle Creation**: The instrumented bundle is created in `dist/test/`
6.  **Test Execution**: Playwright runs tests against the instrumented bundle
7.  **Coverage Collection**: NYC collects coverage data and generates reports

### Instrumentation Exclusions

The babel-plugin-istanbul excludes the following files from coverage **Note: subject to change!**:

-   `**/*.stories.tsx` - Regular story files
-   `**/*.spec.ts` - Test specification files

**Important**: These excludes work at **build level**, not test level. Code that is not instrumented cannot contribute
to coverage, even if it is executed.

## Running Tests Locally

### 1. Complete Test Run

```bash
npm run test
```

**What happens:**

1.  Build test environment (`npm run test:build`)
2.  Start local test server (on free port starting from 8080)
3.  Rollup bundles components with Istanbul instrumentation (rollup.test.config.mjs)
4.  Playwright executes browser tests
5.  NYC collects coverage data and generates reports
6.  Server is automatically stopped

### 2. Test Development Mode

```bash
npm run test:watch
```

-   Watches files for changes
-   Rebuilds automatically on changes
-   Ideal for test development

### 3. Tests Without Rebuild

```bash
npm run test:playwright-skip-build
```

-   Skips the build step
-   Uses existing `dist/test/` files
-   Faster for repeated test runs

## Coverage Configuration (.nycrc.json)

Note: Excludes are subject to change. As of 10/2025 we are still experimenting with configuration.

```json
{
    "statements": 0,
    "branches": 0,
    "functions": 0,
    "lines": 0,
    "all": false,
    "check-coverage": true,
    "report-dir": "../../coverage",
    "reporter": ["lcov", "text"],
    "include": ["src/components/**/*.ts", "src/components/**/*.tsx"],
    "exclude": [
        "src/components/**/*.spec.ts",
        "src/components/**/*.stories.tsx",
        "src/components/**/*.test.stories.tsx"
    ]
}
```

**Important Settings:**

-   **Output Directory**: `../../coverage` (project root level)
-   **Reporter**: LCOV (for HTML reports) and text (for terminal output)
-   **Include**: All TypeScript/tsx-files in components
-   **Exclude**: Test files, test stories and index files

**Note**: NYC excludes work **after** Istanbul instrumentation and are additional filters for reporting. Primary
filtering happens via babel-plugin-istanbul.

## Coverage Reports

### Terminal Output

After `npm run test`, a coverage summary appears:

```
================================================================================
 Coverage summary
================================================================================
Statements   : 85.23% ( 1234/1447 )
Branches     : 78.45% ( 567/723 )
Functions    : 92.11% ( 234/254 )
Lines        : 84.67% ( 1123/1327 )
================================================================================
```

### HTML Report

-   **Path**: `../../coverage/lcov-report/index.html` (from project root)
-   **Content**: Detailed coverage per file with highlighting of uncovered lines
-   **Navigation**: Drill-down into individual components and files possible

Open the report in a web-browser by clicking on the file 'index.html'. Do not use npx serve.

### LCOV File

-   **Path**: `../../coverage/lcov.info`
-   **Format**: Standardized LCOV format for CI/CD integration (https://sonarqube.intranet.commerzbank.com/)
-   **Usage**: Read by TeamCity and other tools

## TeamCity & CI/CD Integration

### Build Process

1.  **TeamCity** runs `npm run test`
2.  **Coverage reports** are generated in subfolder `coverage/`
3.  **LCOV files** are saved as build artifacts // Todo: where?
4.  **HTML reports** are provided for download // Todo: where?

### Bitbucket Integration

-   **Coverage Badge**: Can be generated via LCOV data
-   **Pull Request Reports**: Coverage changes are displayed (if configured)
-   **Artifact Download**: HTML coverage reports via TeamCity links

## Playwright Configuration Highlights

```typescript
// playwright.config.ts
export default defineConfig({
    testDir: "src",
    testMatch: ["src/**/*.spec.ts"],
    timeout: 300000, // 5 minutes per test
    reporter: [["html"]], // HTML test reports
    workers: 6, // Parallelization
    use: {
        baseURL: process.env.SERVER_URL, // Dynamic server URL
        launchOptions: {
            executablePath: "Microsoft Edge", // Browser path
            headless: true,
        },
    },
});
```

## Viewing Test Reports

### Playwright Test Reports

```bash
npm run test:show-report
```

-   Opens HTML report at `http://localhost:9400`
-   Shows test results, screenshots, videos on failures

### View Coverage Report Locally

```bash
# After npm run test
open ../../coverage/lcov-report/index.html  # macOS
# or
start ../../coverage/lcov-report/index.html # Windows
```

## Debugging and Development

### Running Specific Tests

```bash
# Test specific component
npm run test -- --grep="TextField"

# Specific test file
npm run test -- src/**/Button*.spec.ts
```

### Debug Mode

```bash
# Playwright in debug mode (visible browser)
PWDEBUG=1 npm run test
```

### Manual Test Server Start

```bash
npm run test:build    # Build test bundle
npm run test:serve    # Server at http://localhost:3000
```

## Setup Peculiarities

1.  **No Jest Tests**: Project exclusively uses Playwright for browser-based tests
2.  **Story-based Tests**: Components are tested via Storybook stories (`.test.stories.tsx`)
3.  **Real Browser Tests**: All tests run in actual browser environments
4.  **Build-Time Instrumentation**: Istanbul code is injected at **build time**, not test time
5.  **Edge Browser**: Uses Microsoft Edge instead of Chrome for better enterprise compatibility
6.  **Double Filtering**: Both babel-plugin-istanbul and NYC have exclude patterns
7.  **Cross-Package Protection**: Prevents coverage pollution from other packages (e.g., pages.test)

## Coverage Workflow in Detail

### Build Phase

1.  **Rollup starts**: `rollup.test.config.mjs` is executed
2.  **File Processing**: All `.ts(x)` files are read
3.  **Babel Transform**: TypeScript is compiled to JavaScript
4.  **Istanbul Injection**: Coverage code is injected into every function/statement
5.  **Exclude Application**: Defined files are excluded from instrumentation
6.  **Bundle Output**: Instrumented bundle is written to `dist/test/`

### Test Phase

1.  **Server Start**: Test server loads the instrumented bundle
2.  **Playwright Execution**: Browser tests are executed against instrumented components
3.  **Coverage Recording**: Every code execution is captured by Istanbul
4.  **Data Collection**: Coverage data is collected in the global `__coverage__` object

### Report Phase

1.  **NYC Processing**: NYC reads the collected coverage data
2.  **Additional Filtering**: `.nycrc.json` exclude patterns are applied
3.  **Report Generation**: LCOV and text reports are created
4.  **File Output**: Reports are saved to `../../coverage/`

## Debugging Coverage Issues

### Unexpected Coverage

If a component has unexpected coverage:

1.  **Check babel-plugin-istanbul excludes** in `rollup.test.config.mjs`
2.  **Check cross-package imports** (other packages using the component)
3.  **Check test bundle** in `dist/test/index.js` for instrumented code

### Missing Coverage

If a component has no coverage despite being tested:

1.  **Check include patterns** in `.nycrc.json`
2.  **Check if component was instrumented** (search for `__cov_` in bundle)
3.  **Check if tests actually execute the component**

### Coverage Cleanup

To get clean coverage numbers:

1.  **Extend babel-plugin-istanbul excludes** for unwanted files
2.  **Don't** only use NYC excludes - these work too late
3.  **Explicitly exclude** cross-package dependencies
