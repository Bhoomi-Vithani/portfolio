import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IDatePickerCalendarGridProps extends IBasicPropsInternal {
    id?: string;
    name?: string;
    value?: Date;
    minDate?: Date;
    maxDate?: Date;
    datepickerFormat: "day" | "month";
    onChange?: (value: Date, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    onKeyDown?: (ev: React.KeyboardEvent<HTMLElement>) => void;
    focussedValue?: Date;
    onFocussedValueChange?: (newValue: Date) => void;
    onClose?: () => void;
    disabledDates?: Date[];
    weekendsDisabled?: boolean;
    selectableDates?: Date[];
    referenceDate?: Date;
    tabIndexRef?: any;
    focussedRef?: any;
    yearPickerRef?: any;
    minYear?: number;
    maxYear?: number;
    isYearSelection?: boolean;
    onYearSelected?: (year: number) => void;
    focussedYear?: number;
    onFocussedYearChange?: (year: number) => void;
    yearPickerId?: string;
    hoverValue?: Date;
    onHoverValueChange?: (newValue: Date) => void;
    today?: Date;
}
export declare const DatePickerCalendarGrid: {
    ({ id, focussedValue, onFocussedValueChange, onChange, value, maxDate, minDate, onClose, onKeyDown, name, datepickerFormat, disabledDates, weekendsDisabled, selectableDates, tabIndexRef, referenceDate, focussedRef, yearPickerRef, isYearSelection, onYearSelected, focussedYear, yearPickerId, hoverValue, onHoverValueChange, today: todayProp, }: IDatePickerCalendarGridProps): any;
    displayName: string;
};
