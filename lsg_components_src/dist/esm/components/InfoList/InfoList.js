import * as React from 'react';
import { InfoListItemPresentation } from '../InfoListItem/shared/InfoListItemPresentation.js';
import { InfoListPresentation } from './shared/InfoListPresentation.js';

/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Info List Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/info-list-pattern/index.html
 */
class InfoList extends React.Component {
    render() {
        const { children, ...props } = this.props;
        return React.createElement(InfoListPresentation, { ...props }, children);
    }
}
InfoList.displayName = "InfoList";
InfoList.Item = ({ ...props }) => (React.createElement(InfoListItemPresentation, { ...props }));
// eslint-disable-next-line react/static-property-placement
InfoList.Item.displayName = "InfoList.Item";

export { InfoList };
