import React__default from 'react';
import { createRoot } from 'react-dom/client';
import { reactStyles } from '../components/Headline/shared/Headline.styles.js';
import { HeadlinePresentation } from '../components/Headline/shared/HeadlinePresentation.js';
import { reactStyles as reactStyles$2 } from '../components/Paragraph/shared/Paragraph.styles.js';
import { ParagraphPresentation } from '../components/Paragraph/shared/ParagraphPresentation.js';
import { reactStyles as reactStyles$1 } from '../components/Section/shared/Section.styles.js';
import { SectionPresentation } from '../components/Section/shared/SectionPresentation.js';

// @ts-strict-ignore
// eslint-disable-next-line max-classes-per-file
function registerContentIncludes() {
    if (typeof HTMLElement !== "undefined") {
        try {
            class Lsg extends HTMLElement {
                constructor(renderProps, styles) {
                    super();
                    this.renderProps = renderProps;
                    this.attachShadow({ mode: "open" });
                    const styleTag = document.createElement("style");
                    styleTag.textContent = styles;
                    this.shadowRoot.append(styleTag);
                    const wrapper = document.createElement("div");
                    this.root = createRoot(wrapper);
                    this.shadowRoot.append(wrapper);
                }
                connectedCallback() {
                    this.render();
                }
                attributeChangedCallback() {
                    this.render();
                }
                render() {
                    this.root.render(this.renderProps({}));
                }
            }
            class LsgH1 extends Lsg {
                constructor() {
                    super(props => (React__default.createElement(HeadlinePresentation, { ...props, size: "h1" },
                        React__default.createElement("slot", null))), reactStyles);
                }
            }
            class LsgH2 extends Lsg {
                constructor() {
                    super(props => (React__default.createElement(HeadlinePresentation, { ...props, size: "h2" },
                        React__default.createElement("slot", null))), reactStyles);
                }
            }
            class LsgH3 extends Lsg {
                constructor() {
                    super(props => (React__default.createElement(HeadlinePresentation, { ...props, size: "h3" },
                        React__default.createElement("slot", null))), reactStyles);
                }
            }
            class LsgH4 extends Lsg {
                constructor() {
                    super(props => (React__default.createElement(HeadlinePresentation, { ...props, size: "h4" },
                        React__default.createElement("slot", null))), reactStyles);
                }
            }
            class LsgH5 extends Lsg {
                constructor() {
                    super(props => (React__default.createElement(HeadlinePresentation, { ...props, size: "h5" },
                        React__default.createElement("slot", null))), reactStyles);
                }
            }
            class LsgTextSection extends Lsg {
                constructor() {
                    super(props => (React__default.createElement(SectionPresentation, { ...props },
                        React__default.createElement("slot", null))), reactStyles$1);
                }
            }
            class LsgParagraph extends Lsg {
                constructor() {
                    super(props => (React__default.createElement(ParagraphPresentation, { ...props },
                        React__default.createElement("slot", null))), reactStyles$2);
                }
            }
            const listStyles = `
:host {
    display: block;
    margin-bottom: 16px;
    list-style: none outside none;
    padding: 0;
    padding-left: 24px;
    text-indent: -24px;
}
@media screen and (min-width: 1024px) {
    :host {
        margin-bottom: 24px;
    }
}
`;
            const listItemStyles = `
:host {
    display: block;
    list-style: none outside none;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.1px;
    font-family: var(--lsg-font-family-400, "Gotham", sans-serif);
    font-weight: var(--lsg-font-weight-400, 400);
    max-width: 400px;
}
:host:before {
    content: "-";
    width: 24px;
    display: inline-block;
    text-indent: 0;
}
@media screen and (min-width: 1024px) {
    :host {
        font-size: 17px;
        line-height: 28px;
        letter-spacing: 0;
        font-family: var(--lsg-font-family-400, "Gotham", sans-serif);
        font-weight: var(--lsg-font-weight-400, 400);
        max-width: 480px;
    }
}
`;
            class LsgList extends HTMLElement {
                constructor() {
                    super();
                    this.attachShadow({ mode: "open" });
                    const styleTag = document.createElement("style");
                    styleTag.textContent = listStyles;
                    this.shadowRoot.append(styleTag);
                    this.shadowRoot.append(document.createElement("slot"));
                }
            }
            class LsgListItem extends HTMLElement {
                constructor() {
                    super();
                    this.attachShadow({ mode: "open" });
                    const styleTag = document.createElement("style");
                    styleTag.textContent = listItemStyles;
                    this.shadowRoot.append(styleTag);
                    this.shadowRoot.append(document.createElement("slot"));
                }
            }
            if (!customElements.get("lsg-h1")) {
                // @ts-ignore
                window.LsgH1 = LsgH1;
                customElements.define("lsg-h1", LsgH1);
                // @ts-ignore
                window.LsgH2 = LsgH2;
                customElements.define("lsg-h2", LsgH2);
                // @ts-ignore
                window.LsgH3 = LsgH3;
                customElements.define("lsg-h3", LsgH3);
                // @ts-ignore
                window.LsgH4 = LsgH4;
                customElements.define("lsg-h4", LsgH4);
                // @ts-ignore
                window.LsgH5 = LsgH5;
                customElements.define("lsg-h5", LsgH5);
                // @ts-ignore
                window.LsgTextSection = LsgTextSection;
                customElements.define("lsg-textsection", LsgTextSection);
                // @ts-ignore
                window.LsgParagraph = LsgParagraph;
                customElements.define("lsg-paragraph", LsgParagraph);
                // @ts-ignore
                window.LsgList = LsgList;
                customElements.define("lsg-list", LsgList);
                // @ts-ignore
                window.LsgListItem = LsgListItem;
                customElements.define("lsg-li", LsgListItem);
            }
        }
        catch (e) {
            // eslint-disable-next-line no-console
            console.error("Could not load components for content includes", e);
        }
    }
}

export { registerContentIncludes };
