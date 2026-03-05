import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IDatePickerFlyoutPresentationProps extends IBasicPropsInternal {
    name?: string;
    value?: Date;
    minDate?: Date;
    maxDate?: Date;
    datepickerFormat: "day" | "month";
    onChange?: (value: Date, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    focussedValue?: Date;
    onFocussedValueChange?: (newValue: Date) => void;
    onKeyDown?: (ev: React.KeyboardEvent<HTMLElement>) => void;
    toggleContainerElement?: HTMLElement;
    toggleElement?: HTMLElement;
    hostRef?: any;
    open: boolean;
    onClose?: () => void;
    disabledDates?: Date[];
    weekendsDisabled: boolean;
    selectableDates?: Date[];
    chipVariant?: boolean;
    noYearPicker?: boolean;
    today?: Date;
}
export interface IValidDateParams {
    minDate?: IDatePickerFlyoutPresentationProps["minDate"];
    maxDate?: IDatePickerFlyoutPresentationProps["maxDate"];
    disabledDates?: IDatePickerFlyoutPresentationProps["disabledDates"];
    selectableDates?: IDatePickerFlyoutPresentationProps["selectableDates"];
    weekendsDisabled?: IDatePickerFlyoutPresentationProps["weekendsDisabled"];
    today?: IDatePickerFlyoutPresentationProps["today"];
}
export declare const minDefaultDate: Date;
export declare const maxDefaultDate: (today?: Date) => Date;
export declare const getFirstValidDate: ({ minDate, disabledDates, selectableDates, weekendsDisabled, }: IValidDateParams) => Date;
export declare const getLastValidDate: ({ maxDate, disabledDates, selectableDates, weekendsDisabled, today, }: IValidDateParams) => Date;
export declare const isYearSelectable: (year: number, { minDate, maxDate, disabledDates, selectableDates, weekendsDisabled }: IValidDateParams) => boolean;
export declare const getValidPreviousDate: (date: Date, { minDate, disabledDates, selectableDates, weekendsDisabled }: IValidDateParams) => Date;
export declare const getValidNextDate: (date: Date, { maxDate, disabledDates, selectableDates, weekendsDisabled }: IValidDateParams) => Date;
export declare const isDateSelectable: (d: Date, { minDate, maxDate, disabledDates, selectableDates, weekendsDisabled }: IValidDateParams) => boolean;
export declare const isMonthSelectable: (date: Date, { minDate, maxDate, disabledDates, selectableDates }: IValidDateParams) => boolean;
export declare const getValidNextMonth: (date: Date, params: IValidDateParams) => Date | undefined;
export declare const getValidPreviousMonth: (date: Date, params: IValidDateParams) => Date | undefined;
export declare const getClosestValidDate: (date: Date, params: IValidDateParams) => Date;
