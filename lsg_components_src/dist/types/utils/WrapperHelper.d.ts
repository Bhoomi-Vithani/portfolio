import { IIcon } from "@lsg/icons";
import { ReactNode } from "react";
interface ITree10 {
    hideMenuItem?: boolean;
    targetValue?: string;
    onClick?: (e: MouseEvent) => void;
    label: ReactNode;
    href?: string;
    newColumn?: boolean;
    target?: string;
    icon?: IIcon;
    noMobile?: boolean;
    className?: string;
    isTileGroup?: boolean;
    tileSize?: number;
    children?: ITree10[];
    inFooter?: string[];
}
interface ITree {
    active?: boolean;
    id?: string;
    public?: boolean;
    text?: string;
    url: string;
    isNew?: boolean;
    newColumn?: boolean;
    params?: string;
    target: string;
    targetParams: string;
    hasPermission?: boolean;
    class?: string;
    fixedSubdomain?: string;
    noMobile?: boolean;
    children?: ITree[];
    inFooter?: string;
}
declare const mapTree: (tree: ITree, isLogin: boolean, isFk: boolean) => ITree10;
declare const getSingleData: (dataField: string) => any;
declare const getData: () => any;
export { mapTree, getSingleData, getData };
