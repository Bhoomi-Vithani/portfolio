import { useState, useLayoutEffect } from 'react';

// Initially set reduced animation, because there is no sense in animating when a page loads.
// After the first load, the animation settings are respected.
const ssrDefault = true;
let matchMediaAnimate = { matches: ssrDefault };
if (typeof window !== "undefined") {
    // This can be done statically (might be more performant)
    matchMediaAnimate = window.matchMedia("(prefers-reduced-motion: no-preference)");
}
/**
 * @experimental: The function can cause hydration errors when executed in a server environment. Make sure, the
 * animation is not started at first render. Use only, when a hook is not possible. Otherwise, use
 * usePreferReducedMotion.
 */
const isPreferReducedMotion = () => !matchMediaAnimate.matches;
/**
 * Hook that returns true if the user prefers reduced motion. The method enables animations as default in SSR.
 */
function usePreferReducedMotion() {
    const [isSSR, setIsSSR] = useState(true);
    useLayoutEffect(() => {
        setIsSSR(false);
    }, []);
    return isSSR ? ssrDefault : !matchMediaAnimate.matches;
}

export { isPreferReducedMotion, usePreferReducedMotion };
