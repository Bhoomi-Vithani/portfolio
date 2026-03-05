'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var Localization = require('../../../utils/Localization.js');
var ActionPresentation = require('../../Action/shared/ActionPresentation.js');
var FootnoteProviderPresentation = require('../../FootnoteProvider/shared/FootnoteProviderPresentation.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var ParagraphPresentation = require('../../Paragraph/shared/ParagraphPresentation.js');
var FootnoteItem_styles = require('./FootnoteItem.styles.js');

// @ts-strict-ignore
const FootnoteItemPresentation = ({
  id,
  className,
  children,
  identifier
}) => {
  const {
    lastClickedFootnote
  } = FootnoteProviderPresentation.useFootnote() || {};
  const safeLastClickedFootnote = lastClickedFootnote ?? "";
  const [anchorId, setAnchorId] = React__default.useState(undefined);
  const [arrowFocus, setArrowFocus] = React__default.useState(false);
  // This is the attempt to check if the last clicked FootnoteAnchor is actually matching the number of the
  // Footnote link that is clicked. This is necessary if several anchors point to the same footnote (1:n).
  // Example: Last clicked anchor: 1 & "Go Back" link clicked on footnote #2 -> Go to first reference of #2
  // Example 2: Last clicked anchor: 1 & "Go Back" Link clicked of #1 -> Go back to last clicked ref of #1
  React__default.useEffect(() => {
    const elements = document.getElementsByClassName(id);
    if (elements.length > 0) {
      const anchorElement = elements[0].querySelector("a");
      if (anchorElement) {
        setAnchorId(anchorElement.id);
      }
    }
  }, [id]);
  return /*#__PURE__*/React__default.createElement("li", {
    className: DomUtils.cleanupClassObject({
      [FootnoteItem_styles.mainClass]: true,
      [className]: !!className
    }),
    id: id
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${FootnoteItem_styles.mainClass}-identifier`
  }, identifier), /*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
    size: "helper-text"
  }, children, (safeLastClickedFootnote.includes(id) || anchorId) && (/*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
    htmlAttrs: {
      "aria-label": Localization.texts.lsg.component.FootNoteItem.jumpBack
    },
    href: `#${safeLastClickedFootnote.includes(id) ? safeLastClickedFootnote : anchorId}`,
    onKeyboardFocusChange: newFocus => setArrowFocus(newFocus),
    hasKeyboardFocus: arrowFocus
  }, /*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    className: `${FootnoteItem_styles.mainClass}-icon-link`,
    icon: icons.banking_transfer_transferStandard,
    variant: "solid",
    inline: true,
    noMargin: true,
    size: "xsmall",
    title: Localization.texts.lsg.component.FootNoteItem.jumpBack
  })))));
};
FootnoteItemPresentation.displayName = "FootnoteItemPresentation";

exports.FootnoteItemPresentation = FootnoteItemPresentation;
