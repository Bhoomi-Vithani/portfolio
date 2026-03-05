import React__default from 'react';
import { cleanupClassObject } from './DomUtils.js';
import { fRef } from './React.js';

// @ts-strict-ignore
const StencilHost = props => React__default.createElement("div", { ...props });
// @deprecated. Use `div` or `span` or </> instead.
const Host = fRef(props => {
    const { hostClass, className, isStencilHost, children, as, htmlAttrs = {}, ...otherProps } = props;
    const HostComponent = isStencilHost ? StencilHost : as || "div";
    return (React__default.createElement(HostComponent, { ...htmlAttrs, className: cleanupClassObject({
            [hostClass]: !!hostClass,
            [className]: !!className,
        }), ...otherProps }, children));
});

export { Host };
