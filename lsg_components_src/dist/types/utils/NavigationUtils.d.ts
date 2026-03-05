import { INavigationItem, INavigationTree, IRichNavigationItem } from "../interfaces/NavigationTree";
/**
 * Recursive function that adds a name field (if missing) to the given navigation tree items and all their children
 */
export declare const getNamedNavigationTree: (navigationTree: INavigationItem[], path?: string) => (INavigationItem & INavigationTree & {
    name: string;
})[];
export declare function deepGenerateNavObject(navigationObject: INavigationItem[], id: string, path?: string): IRichNavigationItem[];
export declare function deepFlatten(navigationObject: IRichNavigationItem[]): IRichNavigationItem[];
export declare function hasItemChildren(item: any, navTree: any): boolean;
