import * as React from 'react';
import { getViewportSize, addViewportCallback, removeViewportCallback } from '../../utils/windowEvents/ResizeEvents.js';
import { TabsPresentation } from '../Tabs/shared/TabsPresentation.js';

/**
 * This is a stateful version of `<Tabs>`.
 * The `<Tabs.Stateful>` variant is made for showcase purposes and non-React environments.
 * It should not be used in a React application. Please have a look at the section on "Stateful Components" in the
 * developer guidelines.
 * Check `<Tabs>` for implementation examples.
 */
class TabsStateful extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            openIndex: this.props.initialOpenIndex || 0,
            isMobile: ["sm", "xs"].includes(getViewportSize()),
        };
        this.onViewportChange = (viewportSize) => {
            this.setState(() => ({ isMobile: ["sm", "xs"].includes(viewportSize) }));
        };
        this.handleChange = (openIndex) => {
            this.setState(() => ({
                openIndex,
            }));
        };
    }
    componentDidMount() {
        addViewportCallback(this.onViewportChange);
    }
    componentWillUnmount() {
        removeViewportCallback(this.onViewportChange);
    }
    render() {
        return React.createElement(TabsPresentation, { ...this.props, ...this.state, onChange: this.handleChange });
    }
}
TabsStateful.displayName = "Tabs.Stateful";

export { TabsStateful };
