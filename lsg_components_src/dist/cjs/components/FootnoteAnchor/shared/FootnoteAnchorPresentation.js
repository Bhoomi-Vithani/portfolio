'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Localization = require('../../../utils/Localization.js');
var timing = require('../../../utils/timing.js');
var FootnoteProviderPresentation = require('../../FootnoteProvider/shared/FootnoteProviderPresentation.js');
var LinkWrapper = require('../../Link/shared/LinkWrapper.js');
var FootNoteAnchor_styles = require('./FootNoteAnchor.styles.js');

// @ts-strict-ignore
const FootnoteAnchorPresentation = ({
  label,
  className,
  idItem,
  ariaDescribedBy
}) => {
  const [identifier, setIdentifier] = React__default.useState("?");
  const {
    setLastClickedFootnote
  } = FootnoteProviderPresentation.useFootnote() || {};
  const updateIdentifier = () => {
    const footnoteElement = document.getElementById(idItem);
    const identifierElement = footnoteElement && footnoteElement.querySelector(`.${prefix.lsgPre}footnote-item-identifier`);
    const identifierNew = identifierElement && identifierElement.innerHTML;
    if (identifierNew) {
      setIdentifier(identifierNew);
    }
  };
  React__default.useEffect(() => {
    timing.setLsgTimeout(updateIdentifier);
  }, []);
  const uniqueId = index.useUniqueId(`${idItem}`);
  return /*#__PURE__*/React__default.createElement(LinkWrapper.LinkWrapper, {
    className: DomUtils.cleanupClassObject({
      [className]: true,
      [idItem]: true
    }),
    look: "footnote",
    id: `${uniqueId}`,
    href: `#${idItem}`,
    htmlAttrs: {
      "aria-describedby": ariaDescribedBy
    },
    onClick: () => {
      if (setLastClickedFootnote) {
        setLastClickedFootnote(uniqueId);
      } else {
        console.warn("Footnote provider is not available.");
      }
    },
    label: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, label, /*#__PURE__*/React__default.createElement("p", {
      className: `${FootNoteAnchor_styles.hostClass}__text-visually-hidden`
    }, ", ", Localization.texts.lsg.component.FootNoteAnchor.footnote, " "), /*#__PURE__*/React__default.createElement("sup", null, identifier))
  });
};
FootnoteAnchorPresentation.displayName = "FootnoteAnchorPresentation";

exports.FootnoteAnchorPresentation = FootnoteAnchorPresentation;
