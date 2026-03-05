import React, { ComponentType } from "react";
interface IHostProps extends React.HTMLAttributes<HTMLElement> {
    hostClass?: string;
    className?: string;
    ref?: (r: HTMLElement) => void;
    isStencilHost?: boolean;
    as?: keyof JSX.IntrinsicElements | ComponentType<any> | string;
    htmlAttrs?: React.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
}
export declare const Host: React.ForwardRefExoticComponent<Omit<IHostProps, "ref"> & React.RefAttributes<HTMLElement>>;
export {};
