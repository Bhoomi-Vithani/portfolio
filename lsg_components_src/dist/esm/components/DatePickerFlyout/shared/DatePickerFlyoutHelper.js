import { subDays, addDays, isSameDay, closestTo, isEqual, startOfDay, isBefore, isAfter, startOfMonth, addMonths, subMonths } from 'date-fns';

// @ts-strict-ignore
const minDefaultDate = new Date(1900, 0, 1);
const maxDefaultDate = (today) => {
    const baseDate = today || new Date();
    return new Date(baseDate.getFullYear() + 50, baseDate.getMonth(), baseDate.getDate());
};
const isSameDateInList = (date, dateArr) => {
    if (!dateArr || !date)
        return false;
    let result = false;
    dateArr.forEach(d => (result = result || isEqual(startOfDay(d), startOfDay(date))));
    return result;
};
const getFirstValidDate = ({ minDate, disabledDates, selectableDates, weekendsDisabled, }) => {
    let firstDate = minDate || minDefaultDate;
    if (selectableDates) {
        const firstSelectableDate = selectableDates
            .filter(d => !(weekendsDisabled && [0, 6].includes(d.getDay())) && d >= firstDate)
            .sort((d1, d2) => d1.getTime() - d2.getTime())
            .shift();
        firstDate = minDate && firstSelectableDate < minDate ? minDate : firstSelectableDate;
    }
    else {
        while ((weekendsDisabled && [0, 6].includes(firstDate.getDay())) ||
            (disabledDates && isSameDateInList(firstDate, disabledDates))) {
            firstDate = addDays(firstDate, 1);
        }
    }
    return firstDate;
};
const getLastValidDate = ({ maxDate, disabledDates, selectableDates, weekendsDisabled, today, }) => {
    let lastDate = maxDate || maxDefaultDate(today);
    if (selectableDates) {
        const lastSelectableDate = selectableDates
            .filter(d => !(weekendsDisabled && [0, 6].includes(d.getDay())) && d <= lastDate)
            .sort((d1, d2) => d2.getTime() - d1.getTime())
            .shift();
        lastDate = maxDate && lastSelectableDate > maxDate ? maxDate : lastSelectableDate;
    }
    else {
        while ((weekendsDisabled && [0, 6].includes(lastDate.getDay())) ||
            (disabledDates && isSameDateInList(lastDate, disabledDates))) {
            lastDate = subDays(lastDate, 1);
        }
    }
    return lastDate;
};
const getValidPreviousDate = (date, { minDate, disabledDates, selectableDates, weekendsDisabled }) => {
    let previousDate = subDays(date, 1);
    if (minDate && previousDate < minDate) {
        return;
    }
    if (selectableDates) {
        previousDate = selectableDates
            .filter(d => !(weekendsDisabled && [0, 6].includes(d.getDay())) && !(minDate && d < minDate) && d <= previousDate)
            .sort((d1, d2) => (d1.getTime() < d2.getTime() ? -1 : 1))
            .pop();
    }
    else {
        while ((weekendsDisabled && [0, 6].includes(previousDate.getDay())) ||
            (disabledDates && isSameDateInList(previousDate, disabledDates))) {
            previousDate = subDays(previousDate, 1);
        }
    }
    return previousDate;
};
const getValidNextDate = (date, { maxDate, disabledDates, selectableDates, weekendsDisabled }) => {
    let nextDate = addDays(date, 1);
    if (isSameDay(nextDate, maxDate)) {
        return maxDate;
    }
    if (maxDate && nextDate > maxDate) {
        return;
    }
    if (selectableDates) {
        nextDate = selectableDates
            .filter(d => !(weekendsDisabled && [0, 6].includes(d.getDay())) && !(maxDate && d > maxDate) && d >= nextDate)
            .sort((d1, d2) => (d1.getTime() < d2.getTime() ? 1 : -1))
            .pop();
    }
    else {
        while ((weekendsDisabled && [0, 6].includes(nextDate.getDay())) ||
            (disabledDates && isSameDateInList(nextDate, disabledDates))) {
            nextDate = addDays(nextDate, 1);
        }
    }
    return nextDate;
};
const isDateSelectable = (d, { minDate, maxDate, disabledDates, selectableDates, weekendsDisabled }) => {
    // 0. Any Date is enabled but:
    // 1. disabledDates prop: If this date is in this list, disable it
    // 2. selectableDates prop: If this prop exists, enable these dates only,
    //    ignore disabledDates.
    // 3. minDate, maxDate props: Disable date if date < minDate or date > maxDate.
    //    Overrides dates in the selectableDates list.
    //    So if selectableDates contains 16.12.2021 and maxDate=15.12.2021, the 16.12.2021 is disabled.
    // 4. weekendsDisabled prop: In any case, weekends (Saturdays, Sundays) are disabled.
    const date = startOfDay(d);
    const dow = date.getDay();
    let isSelectable = true;
    // 1. disabledDates
    if (disabledDates && !selectableDates) {
        disabledDates.forEach(dl => {
            if (isEqual(startOfDay(dl), date)) {
                isSelectable = false;
            }
        });
    }
    // 2. selectableDates
    if (selectableDates) {
        isSelectable = false;
        selectableDates.forEach(dl => {
            if (isEqual(startOfDay(dl), date)) {
                isSelectable = true;
            }
        });
    }
    // 3. minDate
    if (minDate) {
        isSelectable = isSelectable && !isBefore(date, startOfDay(minDate));
    }
    // 3. maxDate
    if (maxDate) {
        isSelectable = isSelectable && !isAfter(date, startOfDay(maxDate));
    }
    // 4. weekends disabled?
    if (weekendsDisabled && (dow === 0 || dow === 6)) {
        isSelectable = false;
    }
    return isSelectable;
};
const isMonthSelectable = (date, { minDate, maxDate, disabledDates, selectableDates }) => {
    const firstOfMonth = startOfMonth(date);
    // 1. disabledDates: If the first day of the month is in disabledDates, disable the month
    if (disabledDates && !selectableDates) {
        if (disabledDates.some(dl => isEqual(startOfDay(dl), firstOfMonth))) {
            return false;
        }
    }
    // 2. selectableDates: If set, only the month whose first day is in selectableDates is selectable
    if (selectableDates) {
        if (!selectableDates.some(dl => isEqual(startOfDay(dl), firstOfMonth))) {
            return false;
        }
    }
    // 3. minDate/maxDate: Disable the month if outside the range
    if (minDate && isBefore(firstOfMonth, startOfDay(minDate))) {
        return false;
    }
    if (maxDate && isAfter(firstOfMonth, startOfDay(maxDate))) {
        return false;
    }
    return true;
};
const getValidNextMonth = (date, params) => {
    let nextMonth = startOfMonth(addMonths(date, 1));
    const maxMonth = params.maxDate ? startOfMonth(params.maxDate) : maxDefaultDate(params.today);
    while (nextMonth <= maxMonth) {
        if (isMonthSelectable(nextMonth, params)) {
            return nextMonth;
        }
        nextMonth = startOfMonth(addMonths(nextMonth, 1));
    }
    return undefined;
};
const getValidPreviousMonth = (date, params) => {
    let previousMonth = startOfMonth(subMonths(date, 1));
    const minMonth = params.minDate ? startOfMonth(params.minDate) : minDefaultDate;
    while (previousMonth >= minMonth) {
        if (isMonthSelectable(previousMonth, params)) {
            return previousMonth;
        }
        previousMonth = startOfMonth(subMonths(previousMonth, 1));
    }
    return undefined;
};
const getClosestValidDate = (date, params) => {
    if (isDateSelectable(date, params)) {
        return date;
    }
    const validPreviousDate = getValidPreviousDate(date, params);
    const validNextDate = getValidNextDate(date, params);
    return closestTo(date, [validPreviousDate, validNextDate].filter(Boolean));
};

export { getClosestValidDate, getFirstValidDate, getLastValidDate, getValidNextDate, getValidNextMonth, getValidPreviousDate, getValidPreviousMonth, isDateSelectable, isMonthSelectable, maxDefaultDate, minDefaultDate };
