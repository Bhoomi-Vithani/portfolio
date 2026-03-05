import { enUS } from 'date-fns/locale';

const en_US = {
    formats: {
        date: "mm/dd/yyyy",
        dateMonth: "mm/yyyy",
        weekStartsOnSunday: true,
        dateLocale: enUS,
    },
    texts: {
        lsg: {
            component: {
                Datepicker: {
                    placeholder: "MM/DD/YYYY",
                    placeholderMonthYear: "MM/YYYY",
                },
            },
        },
    },
};

export { en_US };
