import { styled } from './styled.js';

// @ts-strict-ignore
/**
 * Uses the prefers-reduced-motion CSS media feature to detect if the user has requested that the system should
 * minimize the amount of non-essential motion (system-setting e.g. "Show animations in Windows" on/off).
 * See: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
 */
const stylePreferReducedMotion = (styling) => styled `
    @media screen and (prefers-reduced-motion: reduce) {
        ${styling}
    }
`;
/**
 * Uses the prefers-reduced-motion CSS media feature to detect if the user has requested that the system should
 * minimize the amount of non-essential motion (system-setting e.g. "Show animations in Windows" on/off).
 * See: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
 */
const stylePreferMotion = (styling) => styled `
    @media screen and (prefers-reduced-motion: no-preference) {
        ${styling}
    }
`;

export { stylePreferMotion, stylePreferReducedMotion };
