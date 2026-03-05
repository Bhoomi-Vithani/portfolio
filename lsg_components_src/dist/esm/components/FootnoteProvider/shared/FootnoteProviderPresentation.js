import React__default, { createContext, useState, useMemo, useContext } from 'react';

// @ts-strict-ignore
const FootnoteContext = createContext({
    lastClickedFootnote: null,
    setLastClickedFootnote: () => { },
});
// The purpose of a FootnoteProvider is to sync the last clicked footnote to the FootnoteItems. If the link back to
// the anchor is clicked, the last anchor will be focused.
const FootnoteProviderPresentation = ({ children }) => {
    const [lastClickedFootnote, setLastClickedFootnote] = useState("");
    const value = useMemo(() => ({ lastClickedFootnote, setLastClickedFootnote }), [lastClickedFootnote]);
    return React__default.createElement(FootnoteContext.Provider, { value: value }, children);
};
const useFootnote = () => useContext(FootnoteContext);

export { FootnoteProviderPresentation, useFootnote };
