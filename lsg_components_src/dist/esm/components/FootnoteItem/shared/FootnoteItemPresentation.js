import { banking_transfer_transferStandard } from '@lsg/icons';
import React__default, { useState, useEffect } from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { texts } from '../../../utils/Localization.js';
import { ActionPresentation } from '../../Action/shared/ActionPresentation.js';
import { useFootnote } from '../../FootnoteProvider/shared/FootnoteProviderPresentation.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { ParagraphPresentation } from '../../Paragraph/shared/ParagraphPresentation.js';
import { mainClass } from './FootnoteItem.styles.js';

// @ts-strict-ignore
const FootnoteItemPresentation = ({ id, className, children, identifier }) => {
    const { lastClickedFootnote } = useFootnote() || {};
    const safeLastClickedFootnote = lastClickedFootnote ?? "";
    const [anchorId, setAnchorId] = useState(undefined);
    const [arrowFocus, setArrowFocus] = useState(false);
    // This is the attempt to check if the last clicked FootnoteAnchor is actually matching the number of the
    // Footnote link that is clicked. This is necessary if several anchors point to the same footnote (1:n).
    // Example: Last clicked anchor: 1 & "Go Back" link clicked on footnote #2 -> Go to first reference of #2
    // Example 2: Last clicked anchor: 1 & "Go Back" Link clicked of #1 -> Go back to last clicked ref of #1
    useEffect(() => {
        const elements = document.getElementsByClassName(id);
        if (elements.length > 0) {
            const anchorElement = elements[0].querySelector("a");
            if (anchorElement) {
                setAnchorId(anchorElement.id);
            }
        }
    }, [id]);
    return (React__default.createElement("li", { className: cleanupClassObject({
            [mainClass]: true,
            [className]: !!className,
        }), id: id },
        React__default.createElement("div", { className: `${mainClass}-identifier` }, identifier),
        React__default.createElement(ParagraphPresentation, { size: "helper-text" },
            children,
            (safeLastClickedFootnote.includes(id) || anchorId) && (React__default.createElement(ActionPresentation, { htmlAttrs: { "aria-label": texts.lsg.component.FootNoteItem.jumpBack }, href: `#${safeLastClickedFootnote.includes(id) ? safeLastClickedFootnote : anchorId}`, onKeyboardFocusChange: newFocus => setArrowFocus(newFocus), hasKeyboardFocus: arrowFocus },
                React__default.createElement(IconPresentation, { className: `${mainClass}-icon-link`, icon: banking_transfer_transferStandard, variant: "solid", inline: true, noMargin: true, size: "xsmall", title: texts.lsg.component.FootNoteItem.jumpBack }))))));
};
FootnoteItemPresentation.displayName = "FootnoteItemPresentation";

export { FootnoteItemPresentation };
