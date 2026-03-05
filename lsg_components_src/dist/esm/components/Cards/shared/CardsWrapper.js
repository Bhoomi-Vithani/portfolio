import React__default from 'react';
import { fragmentMap } from '../../../utils/ReactUtils.js';
import { CardsPresentation } from './CardsPresentation.js';

class CardsWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { children, itemsPerRow, ...otherProps } = this.props;
        return (React__default.createElement(CardsPresentation, { ...otherProps }, fragmentMap(children, (child) => React__default.cloneElement(child, { itemsPerRow }))));
    }
}
CardsWrapper.defaultProps = {
    itemsPerRow: 4,
    type: "NoInput",
};

export { CardsWrapper };
