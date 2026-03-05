import React__default from 'react';
import { useViewport } from '../../../utils/Hooks/index.js';
import { fragmentCount, fragmentMap } from '../../../utils/ReactUtils.js';
import { IconLinkGroupPresentation } from './IconLinkGroupPresentation.js';

const IconLinkGroupWrapper = (props) => {
    // INFO: There is a bug in safari obviously. On special condition in conjunction with noText option
    // the icon link don't have a correct appearance. Means there is a overlay of icon links. Therefore
    // a workaround is implemented to avoid the initial(fall back) xs viewport, but still support the forced viewport, which is set from outside
    const { children, as: asProp, iconOnly, ...otherProps } = props;
    const forceUl = !asProp && fragmentCount(children) > 1;
    const as = forceUl ? "ul" : asProp;
    const viewport = useViewport();
    return (React__default.createElement(IconLinkGroupPresentation, { ...otherProps, viewport: viewport, as: as }, fragmentMap(children, (child) => React__default.cloneElement(child, {
        as: as === "ul" || as === "ol" ? "li" : child.props.as,
        appearance: iconOnly ? "no-text" : child.props.appearance,
    }))));
};

export { IconLinkGroupWrapper };
