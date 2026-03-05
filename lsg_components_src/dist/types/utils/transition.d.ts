export interface ITransitionState {
    entering: boolean;
    entered: boolean;
    exiting: boolean;
    exited: boolean;
    unmounted: boolean;
}
export declare class TransitionHandler {
    timeout: any;
    makeTransitionState: (init: string) => ITransitionState;
    stopTransitions(): void;
    transition: (isEnter: boolean, timeout: number | {
        enter?: number;
        exit?: number;
    }, prevState: ITransitionState, onChange?: (newState: ITransitionState) => void) => void;
}
