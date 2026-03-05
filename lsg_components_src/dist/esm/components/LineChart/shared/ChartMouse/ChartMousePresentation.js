import React__default, { useState } from 'react';

// @ts-strict-ignore
const ChartMousePresentation = ({ width, height, children, toDataPoint }) => {
    const [hoverPt, setHoverPt] = useState(undefined);
    const getMouse = (e, elementWidth, elementHeight) => {
        const dims = e.currentTarget.getBoundingClientRect();
        const rawX = e.clientX - dims.left;
        const rawY = e.clientY - dims.top;
        const x = (rawX / dims.width) * elementWidth;
        const y = (rawY / dims.height) * elementHeight;
        return { x, y };
    };
    const equals = (a, b) => {
        if (a === b)
            return true;
        if (a instanceof Date && b instanceof Date)
            return a.getTime() === b.getTime();
        if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
            return a === b;
        if (a.prototype !== b.prototype)
            return false;
        const keys = Object.keys(a);
        if (keys.length !== Object.keys(b).length)
            return false;
        return keys.every(k => equals(a[k], b[k]));
    };
    const handleMouseMove = (e) => {
        const mouse = getMouse(e, width, height);
        const newPt = toDataPoint(mouse);
        if (!equals(hoverPt, newPt)) {
            setHoverPt(newPt);
        }
    };
    const handleMouseLeave = () => {
        setHoverPt(undefined);
    };
    const handleMouseUp = () => {
        // This is intentional
    };
    return (React__default.createElement(React__default.Fragment, null,
        children && children(hoverPt),
        React__default.createElement("rect", { width: width, height: height, pointerEvents: "all", fill: "none", stroke: "none", onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave, onMouseUp: handleMouseUp })));
};
ChartMousePresentation.displayName = "ChartMousePresentation";

export { ChartMousePresentation };
