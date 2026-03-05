'use strict';

var React__default = require('react');
var Keys = require('../../utils/Keys.js');
var PaginationPresentation = require('./PaginationPresentation.js');

// @ts-strict-ignore
// eslint-disable-next-line max-classes-per-file
/*
    A11y pattern: https://www.a11ymatters.com/pattern/pagination/
    https://a11y-style-guide.com/style-guide/section-navigation.html
    MUI-Example, similar to our implementation: https://mui.com/material-ui/react-pagination/
 */
class PaginationWrapper extends React__default.Component {
  constructor() {
    super(...arguments);
    this.pageLinks = [];
    this.handleKey = e => {
      if (e.shiftKey || e.ctrlKey || e.altKey) {
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      const iterator = new FocusElementIterator(this.findPaginationBtns());
      const focusActions = {
        [Keys.Key.ArrowRight]: () => iterator.next().focus(),
        [Keys.Key.PageDown]: () => iterator.next().focus(),
        [Keys.Key.ArrowLeft]: () => iterator.prev().focus(),
        [Keys.Key.PageUp]: () => iterator.prev().focus(),
        [Keys.Key.Home]: () => iterator.first().focus(),
        [Keys.Key.End]: () => iterator.last().focus(),
        // @ts-ignore Key.Space=" " not working well.
        [Keys.Key.Space]: () => this.selectAndUpdateFocus(iterator),
        [Keys.Key.Enter]: () => this.selectAndUpdateFocus(iterator)
      };
      // eslint-disable-next-line no-prototype-builtins
      if (!focusActions.hasOwnProperty(e.key)) {
        return;
      }
      focusActions[e.key]();
      e.preventDefault();
    };
    this.findPaginationBtns = () => [...(!(this.props.activePage <= 1) ? [this.leftArrow] : []), ...this.pageLinks, ...(!(this.props.activePage >= this.props.numPages) ? [this.rightArrow] : [])].filter(Boolean);
  }
  selectAndUpdateFocus(iterator) {
    const cur = iterator.cur();
    cur.click();
    if (cur === this.leftArrow && this.props.activePage - 1 <= 1) {
      // focus first page if left arrow was focused but is now set to disabled
      iterator.next().focus();
    } else if (cur === this.rightArrow && this.props.activePage + 1 >= this.props.numPages) {
      // focus last page if right arrow was focused but is now set to disabled
      iterator.prev().focus();
    }
  }
  render() {
    return /*#__PURE__*/React__default.createElement(PaginationPresentation.PaginationPresentation, {
      ...this.props,
      handleKey: this.handleKey,
      rightArrowRef: rightArrow => this.rightArrow = rightArrow,
      leftArrowRef: leftArrow => this.leftArrow = leftArrow,
      pageLinksRefs: (i, link) => {
        this.pageLinks[i] = link;
      }
    });
  }
}
PaginationWrapper.defaultProps = {};
class FocusElementIterator {
  constructor(elements) {
    this.next = () => this.idx === this.elements.length - 1 ? this.first() : this.get(this.idx + 1);
    this.prev = () => this.idx === 0 ? this.last() : this.get(this.idx - 1);
    this.last = () => this.get(this.elements.length - 1);
    this.first = () => this.get(0);
    this.cur = () => this.get(this.idx);
    /** This central getter makes it easier to add debug logging or other logic to all actions. */
    this.get = i => this.elements[i];
    this.idx = Math.max(elements.indexOf(document.activeElement), 0);
    this.elements = elements;
  }
}

exports.PaginationWrapper = PaginationWrapper;
