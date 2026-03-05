/**
 * Configuration for available imports in live stories
 */
export interface LiveStoryConfig {
    components?: Record<string, unknown>;
    icons?: Record<string, unknown>;
    additionalImports?: Record<string, Record<string, unknown>>;
}
/**
 * Extracts a specific story's render function or args from raw story source code
 */
export declare function extractStoryRenderCode(rawSource: string, storyName: string): string | null;
/**
 * Creates a live-editable story from a story name in the source file
 *
 * @example
 * ```tsx
 * import storiesRaw from "./ActionButton.stories.tsx?raw";
 *
 * export const MyLiveStory = createLiveStoryFromSource(
 *   storiesRaw,
 *   "ActionButtonSimple",
 *   {
 *     components: { ActionButton, Headline },
 *     icons: { communication___call },
 *   }
 * );
 * ```
 */
export declare function createLiveStoryFromSource(rawSource: string, storyName: string, config: LiveStoryConfig): any;
/**
 * Extracts all story names from a source file
 *
 * @example
 * ```tsx
 * const storyNames = extractAllStoryNames(storiesRaw);
 * // Returns: ["ActionButtonSimple", "ActionButtonLoading", ...]
 * ```
 */
export declare function extractAllStoryNames(rawSource: string): string[];
/**
 * Batch creates multiple live stories from a source file
 *
 * @example
 * ```tsx
 * // Manual story selection
 * const liveStories = createLiveStoriesFromSource(storiesRaw, {
 *   storyNames: ["ActionButtonSimple", "ActionButtonLoading"],
 *   config: {
 *     components: { ActionButton, Headline },
 *     icons: { communication___call, interaction___download },
 *   }
 * });
 *
 * // Automatic extraction of all stories
 * const allLiveStories = createLiveStoriesFromSource(storiesRaw, {
 *   config: {
 *     components: { ActionButton, Headline },
 *     icons: { communication___call, interaction___download },
 *   }
 * });
 *
 * export const Simple = liveStories.ActionButtonSimple;
 * export const Loading = liveStories.ActionButtonLoading;
 * ```
 */
export declare function createLiveStoriesFromSource(rawSource: string, options: {
    storyNames?: string[];
    config: LiveStoryConfig;
    excludeStories?: string[];
}): Record<string, any>;
