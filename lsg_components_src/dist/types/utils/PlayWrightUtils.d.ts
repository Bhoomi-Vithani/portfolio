export interface ITestStep {
    description: string;
    testMethod: "log" | "expectEquals" | "expectNotEquals" | "expectNotNull" | "expectTrue" | "expectNotEmptyString";
    expectedResult: any;
    result: any;
    resultText?: string;
}
export interface IPlayWrightTest {
    testName: string;
    testSteps: ITestStep[];
}
export interface IPlayWrightTestOptions {
    /** Show detailed JSON output */
    showDetailedJson?: boolean;
    /** Show human readable summary */
    showHumanReadableSummary?: boolean;
    /** Show individual test step logs */
    showStepLogs?: boolean;
    /** Show failed test details */
    showFailedDetails?: boolean;
    /** Custom log prefix for identification */
    logPrefix?: string;
    /** Log level: 'minimal', 'standard', 'detailed', 'verbose' */
    logLevel?: 'minimal' | 'standard' | 'detailed' | 'verbose';
}
export declare const evaluatePlayWrightTest: (testDefinition: any, page: any, options?: IPlayWrightTestOptions) => Promise<void>;
/**
 * PlayWrightTest class with enhanced pause functionality
 */
export declare class PlayWrightTest {
    /**
     * Pause execution for the specified duration
     * @param duration Can be:
     *   - A named duration (lowercase): "short", "medium", "long", "debug"
     *   - A PauseDuration enum value: PauseDuration.MEDIUM
     *   - A custom number in milliseconds: 500, 2000, etc.
     *
     * @example
     * ```typescript
     * // Named durations (preferred)
     * await PlayWrightTest.pause("short");        // 50ms
     * await PlayWrightTest.pause("medium");       // 100ms
     * await PlayWrightTest.pause("long");         // 300ms
     * await PlayWrightTest.pause("debug");        // 5000ms (for debugging)
     *
     * // Enum values
     * await PlayWrightTest.pause(PauseDuration.MEDIUM); // 100ms
     *
     * // Custom milliseconds (for specific timing or debugging)
     * await PlayWrightTest.pause(100);            // 100ms
     * await PlayWrightTest.pause(2000);           // 2 seconds (debugging)
     * ```
     */
    static pause(milliseconds: number): Promise<void>;
}
/**
 * Global pause function - same as PlayWrightTest.pause() but globally available
 * @param duration Pause duration (lowercase string, enum, or milliseconds)
 */
export declare function pause(milliseconds: number): Promise<void>;
