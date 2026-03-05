import { setLsgTimeout, clearLsgTimeout } from './timing.js';

var STATES;
(function (STATES) {
    STATES["entering"] = "entering";
    STATES["exited"] = "exited";
    STATES["exiting"] = "exiting";
    STATES["entered"] = "entered";
    STATES["unmounted"] = "unmounted";
})(STATES || (STATES = {}));
// Todo: reduced motion - Switch from TransitionHandler to Web Animations API?
// See also: https://confluence.intranet.commerzbank.com/display/LSG/Finite+State+Automaton
class TransitionHandler {
    constructor() {
        // private mediaQueryLists: MediaQueryList[] = [];
        // this creates an Object of type ITransitionState; init is the state that is set to true, all other
        // properties are false. Example: makeTransitionState(STATES.exiting) returns this object:
        // {entering: false, exiting: false, entered: false, unmounted: false, exited: true}
        this.makeTransitionState = (init) => ({
            ...Object.keys(STATES)
                .filter(state => state !== init)
                .reduce((acc, curr) => ({ ...acc, [curr]: false }), {}),
            [init]: true,
        });
        // This is the main routine to perform a transition. A transition consists of a workflow of states.
        // Example: Layer: Use the Timeout Function to place a Background, for example
        // The initialTransitionState could be:{entering: false, exited: false, exiting: false, entered: false, unmounted: true}
        // Open a layer with the command:
        // transition(true, 100,initialTransitionState, <listeners>)
        // the Lifecycle is:
        // onChange(this.makeTransitionState(STATES.exited)) <-- only when previous state was unmounted
        // onChanged(this.makeTransitionState(STATES.entering))
        // < timeout of saveTimeout.enter >
        // onChange(this.makeTransitionState(STATES.entered))
        //
        // Close the Layer with the command:
        // transition(false, 100, <current transition state>, <listeners>)
        // the Lifecycle is:
        // onChange(this.makeTransitionState(STATES.exiting))
        // onChanged(this.makeTransitionState(STATES.exited))
        // < timeout of saveTimeout.exit >
        // onChange(this.makeTransitionState(STATES.unmounted))
        //
        // Also have a look at DrawerWrapper for reference. The transitionState is used as a state property,
        // causing a rendering on any onChange() event.
        this.transition = (isEnter, timeout, prevState, onChange = () => {
            /* empty */
        }) => {
            const saveTimeout = typeof timeout === "number" ? { enter: timeout, exit: timeout } : timeout;
            const performEnter = () => {
                onChange(this.makeTransitionState(STATES.entering));
                clearLsgTimeout(this.timeout);
                this.timeout = setLsgTimeout(() => {
                    onChange(this.makeTransitionState(STATES.entered));
                }, saveTimeout.enter);
            };
            const performExit = () => {
                onChange(this.makeTransitionState(STATES.exiting));
                clearLsgTimeout(this.timeout);
                this.timeout = setLsgTimeout(() => {
                    onChange(this.makeTransitionState(STATES.exited));
                    this.timeout = setLsgTimeout(() => {
                        onChange(this.makeTransitionState(STATES.unmounted));
                    }, 0);
                }, saveTimeout.exit);
            };
            if (isEnter) {
                if (prevState.unmounted) {
                    onChange(this.makeTransitionState(STATES.exited));
                    this.timeout = setLsgTimeout(performEnter, 0);
                }
                if (prevState.exited || prevState.exiting) {
                    performEnter();
                }
            }
            else if (prevState.entered || prevState.entering) {
                performExit();
            }
        };
    }
    stopTransitions() {
        // always stop an existing timeout in componentWillUnmount() to prevent "Set state on unmounted Component" error
        clearLsgTimeout(this.timeout);
    }
}

export { TransitionHandler };
