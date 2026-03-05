/**
 * @experimental: The function can cause hydration errors when executed in a server environment. Make sure, the
 * animation is not started at first render. Use only, when a hook is not possible. Otherwise, use
 * usePreferReducedMotion.
 */
export declare const isPreferReducedMotion: () => boolean;
/**
 * Hook that returns true if the user prefers reduced motion. The method enables animations as default in SSR.
 */
export declare function usePreferReducedMotion(): boolean;
