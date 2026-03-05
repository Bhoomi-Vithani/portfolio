interface IPageStyle {
    padding?: string;
    width?: string;
    maxWidth?: string;
    pageMaxWidth?: string;
}
interface IPageStyles {
    noSidebarContent: IPageStyle;
    sidebarContent: IPageStyle;
    layer: IPageStyle;
    layer75: IPageStyle;
    sidemenu: IPageStyle;
}
export declare const sectionMeasurements: IPageStyles;
export {};
