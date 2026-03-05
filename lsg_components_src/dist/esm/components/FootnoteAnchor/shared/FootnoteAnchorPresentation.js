import React__default, { useState, useEffect } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { texts } from '../../../utils/Localization.js';
import { setLsgTimeout } from '../../../utils/timing.js';
import { useFootnote } from '../../FootnoteProvider/shared/FootnoteProviderPresentation.js';
import { LinkWrapper } from '../../Link/shared/LinkWrapper.js';
import { hostClass } from './FootNoteAnchor.styles.js';

// @ts-strict-ignore
const FootnoteAnchorPresentation = ({ label, className, idItem, ariaDescribedBy, }) => {
    const [identifier, setIdentifier] = useState("?");
    const { setLastClickedFootnote } = useFootnote() || {};
    const updateIdentifier = () => {
        const footnoteElement = document.getElementById(idItem);
        const identifierElement = footnoteElement && footnoteElement.querySelector(`.${lsgPre}footnote-item-identifier`);
        const identifierNew = identifierElement && identifierElement.innerHTML;
        if (identifierNew) {
            setIdentifier(identifierNew);
        }
    };
    useEffect(() => {
        setLsgTimeout(updateIdentifier);
    }, []);
    const uniqueId = useUniqueId(`${idItem}`);
    return (React__default.createElement(LinkWrapper, { className: cleanupClassObject({
            [className]: true,
            [idItem]: true,
        }), look: "footnote", id: `${uniqueId}`, href: `#${idItem}`, htmlAttrs: { "aria-describedby": ariaDescribedBy }, onClick: () => {
            if (setLastClickedFootnote) {
                setLastClickedFootnote(uniqueId);
            }
            else {
                console.warn("Footnote provider is not available.");
            }
        }, label: React__default.createElement(React__default.Fragment, null,
            label,
            React__default.createElement("p", { className: `${hostClass}__text-visually-hidden` },
                ", ",
                texts.lsg.component.FootNoteAnchor.footnote,
                " "),
            React__default.createElement("sup", null, identifier)) }));
};
FootnoteAnchorPresentation.displayName = "FootnoteAnchorPresentation";

export { FootnoteAnchorPresentation };
