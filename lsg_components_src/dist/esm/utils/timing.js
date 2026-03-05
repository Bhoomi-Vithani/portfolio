const clearLsgTimeout = (id) => {
    if (id) {
        window.clearTimeout(id);
    }
};
const setLsgTimeout = (callback, duration = 0) => {
    if (typeof window === "undefined") {
        return;
    }
    // @ts-ignore
    if (window.requestAnimationFrame && (duration === 0 || "production" === "test")) {
        window.requestAnimationFrame(callback);
        return;
    }
    return window.setTimeout(callback, duration || 1);
};

export { clearLsgTimeout, setLsgTimeout };
