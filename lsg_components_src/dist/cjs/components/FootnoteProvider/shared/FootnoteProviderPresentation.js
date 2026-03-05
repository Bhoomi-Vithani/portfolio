'use strict';

var React__default = require('react');

// @ts-strict-ignore
const FootnoteContext = /*#__PURE__*/React__default.createContext({
  lastClickedFootnote: null,
  setLastClickedFootnote: () => {}
});
// The purpose of a FootnoteProvider is to sync the last clicked footnote to the FootnoteItems. If the link back to
// the anchor is clicked, the last anchor will be focused.
const FootnoteProviderPresentation = ({
  children
}) => {
  const [lastClickedFootnote, setLastClickedFootnote] = React__default.useState("");
  const value = React__default.useMemo(() => ({
    lastClickedFootnote,
    setLastClickedFootnote
  }), [lastClickedFootnote]);
  return /*#__PURE__*/React__default.createElement(FootnoteContext.Provider, {
    value: value
  }, children);
};
const useFootnote = () => React__default.useContext(FootnoteContext);

exports.FootnoteProviderPresentation = FootnoteProviderPresentation;
exports.useFootnote = useFootnote;
