'use strict';

var React__default = require('react');
var ReactUtils = require('../../../utils/ReactUtils.js');
var ArticleListPresentation = require('./ArticleListPresentation.js');

// @ts-strict-ignore
class ArticleListWrapper extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      children,
      horizontalAlignment,
      ...otherProps
    } = this.props;
    return /*#__PURE__*/React__default.createElement(ArticleListPresentation.ArticleListPresentation, {
      ...otherProps,
      horizontalAlignment: horizontalAlignment
    }, ReactUtils.fragmentMap(children, child => /*#__PURE__*/React__default.cloneElement(child, {
      horizontalAlignment
    })));
  }
}

exports.ArticleListWrapper = ArticleListWrapper;
