import * as React from 'react';
import { AutoCompletePresentation } from './shared/AutoCompletePresentation.js';

// @ts-strict-ignore
class Autocomplete extends React.Component {
    render() {
        const { optional, label, ...props } = this.props;
        return (React.createElement(AutoCompletePresentation, { ...props, 
            // @ts-ignore
            label: label, onKeyDown: props.onKeyDown, readonly: props.readOnly, optional: !!optional, optionalText: typeof optional === "string" ? optional : undefined }));
    }
}
Autocomplete.displayName = "Autocomplete";
Autocomplete.defaultProps = {
    options: [],
    onKeyDown: () => { },
    onFocus: () => { },
    onBlur: () => { },
    onChange: () => { },
    clearIcon: true,
};

export { Autocomplete };
