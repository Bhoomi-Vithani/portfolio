import { enGB } from 'date-fns/locale';

const en_GB = {
    formats: {
        date: "dd.mm.yyyy",
        dateMonth: "mm.yyyy",
        weekStartsOnSunday: false,
        dateLocale: enGB,
        quotationMarkOpening: "‘",
        quotationMarkClosing: "’",
    },
    texts: {
        lsg: {
            component: {
                Datepicker: {
                    placeholder: "DD.MM.YYYY",
                    placeholderMonthYear: "MM.YYYY",
                },
            },
        },
    },
};

export { en_GB };
