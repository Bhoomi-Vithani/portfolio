import React__default from 'react';
import { cleanupClassObject } from '../../../../utils/DomUtils.js';
import { Host } from '../../../../utils/Host.js';
import { fRef } from '../../../../utils/React.js';
import { hostClass } from './ElevatorAnimation.styles.js';

// @ts-strict-ignore
const defaultProps = {
    active: true,
};
const ElevatorAnimationPresentation = fRef(props => {
    const { children, noMargin, className, isVisible, hostRef, active } = props;
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [className]: className,
            [hostClass]: true,
            [`${hostClass}no-margin`]: noMargin,
        }), ref: hostRef },
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-inner`]: true,
                [`${hostClass}-inner__visible`]: isVisible && active,
            }) }, children),
        active && (React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-overlay`]: true,
                [`${hostClass}-overlay__visible`]: isVisible,
            }) }))));
}, defaultProps);
ElevatorAnimationPresentation.displayName = "ElevatorAnimationPresentation";

export { ElevatorAnimationPresentation, defaultProps };
