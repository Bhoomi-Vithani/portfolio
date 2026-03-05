import { forwardRef } from 'react';
import { functionalHelpers } from './FunctionalHelpers.js';

/** @deprecated: Use standard react definitions */
function fRef(render, defaultProps) {
    return forwardRef((props, ref) => {
        const mergedProps = functionalHelpers(props, defaultProps);
        return render({ ...mergedProps, ref });
    });
}

export { fRef };
