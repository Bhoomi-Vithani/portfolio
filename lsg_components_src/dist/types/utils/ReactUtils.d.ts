import { ReactElement, ReactNode } from "react";
interface IFragmentMap {
    <T>(children: ReactNode, callback: (value: ReactElement, index?: number) => T, includeString?: boolean | undefined): T[];
    <T>(children: ReactNode, callback: (value: ReactElement | string, index?: number) => T, includeString: true): T[];
}
export declare const fragmentMap: IFragmentMap;
export declare const fragmentMapReverse: IFragmentMap;
export declare const fragmentCount: (children: ReactNode, includeString?: boolean) => number;
export {};
