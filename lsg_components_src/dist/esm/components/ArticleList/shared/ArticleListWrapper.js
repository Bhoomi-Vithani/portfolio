import React__default from 'react';
import { fragmentMap } from '../../../utils/ReactUtils.js';
import { ArticleListPresentation } from './ArticleListPresentation.js';

// @ts-strict-ignore
class ArticleListWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { children, horizontalAlignment, ...otherProps } = this.props;
        return (React__default.createElement(ArticleListPresentation, { ...otherProps, horizontalAlignment: horizontalAlignment }, fragmentMap(children, (child) => React__default.cloneElement(child, { horizontalAlignment }))));
    }
}

export { ArticleListWrapper };
