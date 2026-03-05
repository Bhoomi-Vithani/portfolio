import * as React from 'react';
import { texts } from '../../utils/Localization.js';
import { BreadCrumbsItem } from '../BreadCrumbsItem/BreadCrumbsItem.js';
import { BreadcrumbsPresentation } from './shared/BreadcrumbsPresentation.js';

class BreadCrumbs extends React.Component {
    render() {
        return React.createElement(BreadcrumbsPresentation, { ...this.props });
    }
}
BreadCrumbs.displayName = "BreadCrumbs";
BreadCrumbs.defaultProps = {
    title: texts.lsg.component.BreadCrumbs.title,
    separatorBottom: true,
    alwaysVisible: false,
};
BreadCrumbs.Item = BreadCrumbsItem;

export { BreadCrumbs };
