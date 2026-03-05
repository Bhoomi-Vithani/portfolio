import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { SpacingContext } from './SpacingContext.js';

const FormContainerPresentation = ({ id, className, children, as = "form", style, htmlAttrs, spacing, }) => {
    const Container = as;
    const hostClass = `${lsgPre}form-container`;
    const classes = cleanupClassObject({
        [hostClass]: true,
        [className]: !!className,
        [`${hostClass}__dense`]: spacing === "dense",
    });
    const contextValue = React__default.useMemo(() => ({ spacing }), [spacing]);
    //  https://react.dev/learn/passing-data-deeply-with-context
    return (React__default.createElement(Container, { id: id, className: classes, style: style, ...htmlAttrs },
        React__default.createElement(SpacingContext.Provider, { value: contextValue }, children)));
};

export { FormContainerPresentation };
