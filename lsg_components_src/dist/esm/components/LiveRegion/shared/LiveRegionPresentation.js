import React__default, { forwardRef, useState, useImperativeHandle } from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { hostClass } from './LiveRegion.styles.js';

const LiveRegionPresentation = forwardRef(({ ariaLive = "assertive" }, ref) => {
    const [content, setContent] = useState("");
    useImperativeHandle(ref, () => ({
        announce: (announcement, callback) => {
            // reset announcement if it is not changing, so that it will be read again
            setContent(prevContent => (prevContent !== announcement ? announcement : ""));
            requestAnimationFrame(() => {
                setContent(announcement);
                requestAnimationFrame(() => {
                    callback?.();
                });
            });
        },
    }), []);
    return (React__default.createElement("div", { className: cleanupClassObject({
            [hostClass]: true,
        }), "aria-live": ariaLive, "aria-atomic": true }, typeof content === "function" ? content() : content));
});

export { LiveRegionPresentation };
