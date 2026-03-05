'use strict';

var React__default = require('react');
var client = require('react-dom/client');
var Headline_styles = require('../components/Headline/shared/Headline.styles.js');
var HeadlinePresentation = require('../components/Headline/shared/HeadlinePresentation.js');
var Paragraph_styles = require('../components/Paragraph/shared/Paragraph.styles.js');
var ParagraphPresentation = require('../components/Paragraph/shared/ParagraphPresentation.js');
var Section_styles = require('../components/Section/shared/Section.styles.js');
var SectionPresentation = require('../components/Section/shared/SectionPresentation.js');

// @ts-strict-ignore
// eslint-disable-next-line max-classes-per-file
function registerContentIncludes() {
  if (typeof HTMLElement !== "undefined") {
    try {
      class Lsg extends HTMLElement {
        constructor(renderProps, styles) {
          super();
          this.renderProps = renderProps;
          this.attachShadow({
            mode: "open"
          });
          const styleTag = document.createElement("style");
          styleTag.textContent = styles;
          this.shadowRoot.append(styleTag);
          const wrapper = document.createElement("div");
          this.root = client.createRoot(wrapper);
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
          super(props => (/*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
            ...props,
            size: "h1"
          }, /*#__PURE__*/React__default.createElement("slot", null))), Headline_styles.reactStyles);
        }
      }
      class LsgH2 extends Lsg {
        constructor() {
          super(props => (/*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
            ...props,
            size: "h2"
          }, /*#__PURE__*/React__default.createElement("slot", null))), Headline_styles.reactStyles);
        }
      }
      class LsgH3 extends Lsg {
        constructor() {
          super(props => (/*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
            ...props,
            size: "h3"
          }, /*#__PURE__*/React__default.createElement("slot", null))), Headline_styles.reactStyles);
        }
      }
      class LsgH4 extends Lsg {
        constructor() {
          super(props => (/*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
            ...props,
            size: "h4"
          }, /*#__PURE__*/React__default.createElement("slot", null))), Headline_styles.reactStyles);
        }
      }
      class LsgH5 extends Lsg {
        constructor() {
          super(props => (/*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
            ...props,
            size: "h5"
          }, /*#__PURE__*/React__default.createElement("slot", null))), Headline_styles.reactStyles);
        }
      }
      class LsgTextSection extends Lsg {
        constructor() {
          super(props => (/*#__PURE__*/React__default.createElement(SectionPresentation.SectionPresentation, {
            ...props
          }, /*#__PURE__*/React__default.createElement("slot", null))), Section_styles.reactStyles);
        }
      }
      class LsgParagraph extends Lsg {
        constructor() {
          super(props => (/*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
            ...props
          }, /*#__PURE__*/React__default.createElement("slot", null))), Paragraph_styles.reactStyles);
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
          this.attachShadow({
            mode: "open"
          });
          const styleTag = document.createElement("style");
          styleTag.textContent = listStyles;
          this.shadowRoot.append(styleTag);
          this.shadowRoot.append(document.createElement("slot"));
        }
      }
      class LsgListItem extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({
            mode: "open"
          });
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
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("Could not load components for content includes", e);
    }
  }
}

exports.registerContentIncludes = registerContentIncludes;
