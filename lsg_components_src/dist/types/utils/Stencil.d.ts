type RefRenderFunction<T, P = {}> = (props: P & {
    ref: (instance: T | null) => void;
}) => any;
export declare function fRef<T, P = {}>(render: RefRenderFunction<T, P>, defaultProps?: Partial<P>): (props: any, children: any) => any;
type RenderFunction<P = {}> = (props: P) => any;
export declare function fComp<P = {}>(render: RenderFunction<P>, defaultProps?: Partial<P>): (props: any, children: any) => any;
export {};
