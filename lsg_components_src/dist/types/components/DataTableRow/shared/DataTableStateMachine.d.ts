type Graph<StateType extends string, EventType extends string, ParamFieldsType extends {
    [key: string]: any;
}> = {
    [P in StateType]: (transitionFunction: (x: StateType) => void, event: EventType, params: ParamFieldsType) => void;
};
export declare function stateMachineGraph<StateType extends string, EventType extends string, ParamFieldsType extends {
    [key: string]: any;
}>(_events: EventType[], _defaultParams: ParamFieldsType, graph: Graph<StateType, EventType, ParamFieldsType>): Graph<StateType, EventType, ParamFieldsType>;
export declare class StateMachine<StateType extends string, EventType extends string, ParamFieldsType extends {
    [key: string]: any;
}> {
    private graph;
    private cleanupFunction;
    private transitionFunction;
    private params;
    constructor(graph: Graph<StateType, EventType, ParamFieldsType>, transitionFunction: (x: StateType) => void, params: ParamFieldsType);
    internalTransitionFunction: (state: StateType) => void;
    transition: (state: StateType, event?: EventType) => void;
}
export declare const threeStepShowHide: Graph<"hidden" | "init-opening" | "opening" | "visible" | "init-hiding" | "hiding", "show" | "hide", {
    animationDurationShow: number;
    animationDurationHide: number;
}>;
export {};
