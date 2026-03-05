import React from "react";
interface FootnoteContextType {
    lastClickedFootnote: string | null;
    setLastClickedFootnote: (id: string | null) => void;
}
export declare const FootnoteProviderPresentation: ({ children }: {
    children: any;
}) => React.JSX.Element;
export declare const useFootnote: () => FootnoteContextType;
export {};
