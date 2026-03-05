import * as React from 'react';
import { BadgePresentation } from '../Badge/shared/BadgePresentation.js';
import { IconPresentation } from './shared/IconPresentation.js';

class Icon extends React.Component {
    render() {
        return (React.createElement(IconPresentation, { ...this.props, transform: undefined, hover: undefined, badge: this.props.showBadge && React.createElement(BadgePresentation, null, this.props.badgeText) }));
    }
}
Icon.displayName = "Icon";
Icon.defaultProps = {
    color: "default",
    size: "small",
    variant: "outline",
};

export { Icon };
