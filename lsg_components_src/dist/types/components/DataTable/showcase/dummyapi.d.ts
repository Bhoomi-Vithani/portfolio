export declare const getRecordCount: (table: string) => any;
export declare const getData: (table: string, options: {
    filter?: (record: any) => boolean;
    sortColumn?: string;
    sortComparator?: (a: any, b: any) => number;
    sortOrder?: "asc" | "desc";
    offset?: number;
    recordCount?: number;
}) => any[];
