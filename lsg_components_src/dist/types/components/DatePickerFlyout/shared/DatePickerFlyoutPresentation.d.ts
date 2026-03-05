import React from "react";
import type { IDatePickerFlyoutPresentationProps, IValidDateParams } from "./DatePickerFlyoutHelper";
export declare const handleKeyDownYearSelection: (ev: React.KeyboardEvent<HTMLElement>, focYear: number, setFocYear: (value: number) => void, validDateParams: IValidDateParams & {
    datepickerFormat: IDatePickerFlyoutPresentationProps["datepickerFormat"];
}, onYearSelected: (year: number) => void, focussedRef: any) => void;
export declare const handleKeyDown: (ev: React.KeyboardEvent<HTMLElement>, focValue: Date, onChange: (value: Date) => void, onFocusValue: (value: Date) => void, onClose: () => void, validDateParams: IValidDateParams & {
    datepickerFormat: IDatePickerFlyoutPresentationProps["datepickerFormat"];
}, focussedRef: any) => void;
export declare const DatePickerFlyoutPresentation: {
    ({ className, noMargin, onChange, value, id, maxDate, minDate, open, onClose, toggleContainerElement, hostRef, name, datepickerFormat, toggleElement, disabledDates, selectableDates, weekendsDisabled, chipVariant, noYearPicker, today: todayProp, }: IDatePickerFlyoutPresentationProps): React.JSX.Element;
    displayName: string;
};
