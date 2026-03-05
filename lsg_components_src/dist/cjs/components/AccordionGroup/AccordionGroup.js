'use strict';

var React__default = require('react');
var AccordionGroupStateful = require('./AccordionGroupStateful.js');
var AccordionGroupWrapper = require('./shared/AccordionGroupWrapper.js');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__default__namespace = /*#__PURE__*/_interopNamespaceDefault(React__default);

function isStateless(props) {
  return props.multiple || props.openIndex !== undefined;
}
/** See Accordion Example for usage */
class AccordionGroup extends React__default__namespace.Component {
  // eslint-disable-next-line react/sort-comp
  constructor(props) {
    super(props);
    this.handleChange = open => this.setState(() => ({
      openIndex: open
    }));
    this.state = isStateless(props) ? {} : {
      openIndex: props.defaultOpenIndex
    };
  }
  render() {
    if (isStateless(this.props)) {
      return /*#__PURE__*/React__default__namespace.createElement(AccordionGroupWrapper.AccordionGroupWrapper, {
        ...this.props
      });
    }
    const {
      defaultOpenIndex: _1,
      ...nonMultipleProps
    } = this.props;
    return /*#__PURE__*/React__default__namespace.createElement(AccordionGroupWrapper.AccordionGroupWrapper, {
      ...nonMultipleProps,
      openIndex: this.state.openIndex,
      onChange: this.handleChange
    });
  }
}
AccordionGroup.displayName = "Accordion.Group";
AccordionGroup.defaultProps = {
  multiple: false,
  onChange: () => {
    /* empty */
  }
};
/** @deprecated Use `AccordionGroup` instead, without providing `openIndex`. If absent, `AccordionGroup` will be stateful. */
AccordionGroup.Stateful = AccordionGroupStateful.AccordionGroupStateful;

exports.AccordionGroup = AccordionGroup;
