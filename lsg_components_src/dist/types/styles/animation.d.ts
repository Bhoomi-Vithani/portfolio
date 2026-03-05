/**
 * Uses the prefers-reduced-motion CSS media feature to detect if the user has requested that the system should
 * minimize the amount of non-essential motion (system-setting e.g. "Show animations in Windows" on/off).
 * See: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
 */
declare const stylePreferReducedMotion: (styling?: any) => string;
/**
 * Uses the prefers-reduced-motion CSS media feature to detect if the user has requested that the system should
 * minimize the amount of non-essential motion (system-setting e.g. "Show animations in Windows" on/off).
 * See: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
 */
declare const stylePreferMotion: (styling?: any) => string;
export { stylePreferReducedMotion, stylePreferMotion };
