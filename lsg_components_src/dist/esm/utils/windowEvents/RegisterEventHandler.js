import { setLsgTimeout } from '../timing.js';

const registerEventHandler = (eventType, runCallbacks) => {
    const runHandler = () => {
        setLsgTimeout(runCallbacks);
    };
    window.addEventListener(eventType, runHandler);
    const handlerObj = {
        running: false,
        unsetRunning: () => (handlerObj.running = false),
        unsubscribe: () => window.removeEventListener(eventType, runHandler),
    };
    return handlerObj;
};

export { registerEventHandler };
