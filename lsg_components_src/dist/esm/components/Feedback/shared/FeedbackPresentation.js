import { communication_feedback_happy, communication_feedback_neutral } from '@lsg/icons';
import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { hostClass } from './Feedback.styles.js';

// @ts-strict-ignore
const FeedbackPresentation = ({ id, className, noMargin, isStencilHost, textBefore, textAfter, textResult = texts.lsg.component.Feedback.result, textButtonTrue = texts.lsg.component.Feedback.trueButton, textButtonFalse = texts.lsg.component.Feedback.falseButton, result, onTrueClick, onFalseClick, animationHide, }) => {
    const showResult = result !== undefined && !animationHide;
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}-hide`]: animationHide && result !== undefined,
        }), isStencilHost: isStencilHost },
        !showResult && (React__default.createElement(React__default.Fragment, null,
            React__default.createElement("div", { className: `${hostClass}-text-before` }, textBefore),
            React__default.createElement(IconLinkGroupWrapper, { noMargin: true },
                React__default.createElement(IconLinkWrapper, { icon: communication_feedback_happy, onClick: onTrueClick, label: textButtonTrue }),
                React__default.createElement(IconLinkWrapper, { icon: communication_feedback_neutral, onClick: onFalseClick, label: textButtonFalse })),
            React__default.createElement("div", { className: `${hostClass}-text-after` }, textAfter))),
        showResult && React__default.createElement("div", { className: `${hostClass}-text-result` }, textResult)));
};
FeedbackPresentation.displayName = "FeedbackPresentation";

export { FeedbackPresentation };
