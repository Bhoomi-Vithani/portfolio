const makeIcon = (path: string) => ({ svgAttrs = {} }: { svgAttrs?: Record<string, string> }) => {
    const attrsStr = Object.entries(svgAttrs).map(([k, v]) => `${k}="${v}"`).join(' ');
    return `<svg viewBox="0 0 24 24" ${attrsStr} xmlns="http://www.w3.org/2000/svg"><path d="${path}"/></svg>`;
};

// Real icons used in the portfolio
export const communication___envelope = makeIcon("M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z");
export const social___linkedin = makeIcon("M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z");
export const arrow___download = makeIcon("M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z");
export const location___globe = makeIcon("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z");
export const interaction___search = makeIcon("M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z");
export const object___lock = makeIcon("M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z");
export const communication___call = makeIcon("M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z");

// Other mocks
export const interaction_arrows_chevronUp = makeIcon("");
export const interaction_arrows_chevronDown = makeIcon("");
export const interaction_arrows_arrowDown = makeIcon("");
export const interaction_arrows_arrowUp = makeIcon("");
export const interaction_arrows_chevronRight = makeIcon("");
export const interaction_arrows_arrowLeft = makeIcon("");
export const interaction_arrows_chevronLeft = makeIcon("");
export const interaction_arrows_arrowRight = makeIcon("M16.01 11H4v2h12.01v3L20 12l-3.99-4z");
export const symbols___error = makeIcon("");
export const symbols___infoCircle = makeIcon("");
export const interaction___menu = makeIcon("");
export const interaction___checkmark = makeIcon("");
export const object_devices_keyboard = makeIcon("");
export const interaction___slider = makeIcon("");
export const interaction___close = makeIcon("");
export const interaction___eyeHide = makeIcon("");
export const interaction___eyeView = makeIcon("");
export const interaction___listTwo = makeIcon("");
export const interaction___dashShort = makeIcon("");
export const interaction___fullscreenExit = makeIcon("");
export const interaction___fullscreenEnter = makeIcon("");
export const interaction___playbutton = makeIcon("");
export const interaction___replay = makeIcon("");
export const interaction___pause = makeIcon("");
export const interaction___volumeOff = makeIcon("");
export const interaction___volume = makeIcon("");
export const interaction___volumeLow = makeIcon("");
export const interaction___send = makeIcon("");
export const interaction___filter01 = makeIcon("");
export const interaction___more02 = makeIcon("");
export const banking___phototan = makeIcon("");
export const banking_transfer_transferslip = makeIcon("");
export const banking___contactless = makeIcon("");
export const banking_transfer_transferStandard = makeIcon("");
export const communication_feedback_happy = makeIcon("");
export const communication_feedback_neutral = makeIcon("");
export const object___calender = makeIcon("");
export const people___profile = makeIcon("");
export const social___facebook = makeIcon("");
export const social___instagram = makeIcon("");
export const social___twitter = makeIcon("");
export const social___xing = makeIcon("");
export const social___youtube = makeIcon("");
export default {};
