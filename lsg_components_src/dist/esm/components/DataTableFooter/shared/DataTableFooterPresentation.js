import React__default from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { hostClass } from '../../DataTable/shared/DataTable.styles.js';
import { DataTableRowPresentation } from '../../DataTableRow/shared/DataTableRowPresentation.js';

const DataTableFooterPresentation = (props) => (React__default.createElement(DataTableRowPresentation, { ...props, visibility: "visible", className: cleanupClassObject({
        [`${hostClass}-footer`]: true,
        [`${hostClass}-footer__default`]: true,
    }) }));
DataTableFooterPresentation.displayName = "DataTableFooterPresentation";

export { DataTableFooterPresentation };
