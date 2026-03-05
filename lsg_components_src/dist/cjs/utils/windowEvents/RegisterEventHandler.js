'use strict';

var timing = require('../timing.js');

const registerEventHandler = (eventType, runCallbacks) => {
  const runHandler = () => {
    timing.setLsgTimeout(runCallbacks);
  };
  window.addEventListener(eventType, runHandler);
  const handlerObj = {
    running: false,
    unsetRunning: () => handlerObj.running = false,
    unsubscribe: () => window.removeEventListener(eventType, runHandler)
  };
  return handlerObj;
};

exports.registerEventHandler = registerEventHandler;
