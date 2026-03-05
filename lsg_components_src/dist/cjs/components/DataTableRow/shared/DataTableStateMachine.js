'use strict';

var timing = require('../../../utils/timing.js');

// @ts-strict-ignore
function stateMachineGraph(_events, _defaultParams, graph) {
  return graph;
}
class StateMachine {
  constructor(graph, transitionFunction, params) {
    this.cleanupFunction = () => {};
    this.transitionFunction = () => {};
    this.internalTransitionFunction = state => {
      this.transitionFunction(state);
      if (this.cleanupFunction) this.cleanupFunction();
      this.cleanupFunction = this.graph[state](this.internalTransitionFunction, undefined, this.params);
    };
    this.transition = (state, event) => {
      if (this.cleanupFunction) this.cleanupFunction();
      this.cleanupFunction = this.graph[state](this.internalTransitionFunction, event, this.params);
    };
    this.graph = graph;
    this.transitionFunction = transitionFunction;
    this.params = params;
  }
}
const threeStepShowHide = stateMachineGraph(["show", "hide"],
// TODO default values are ignored for now. They are only used to determine the type with generic constraints
{
  animationDurationShow: 100,
  animationDurationHide: 100
}, {
  hidden: (transitionFunction, event) => {
    if (event === "show") transitionFunction("init-opening");
  },
  "init-opening": (transitionFunction, event) => {
    if (!event) {
      const animationFrame = window.requestAnimationFrame(() => transitionFunction("opening"));
      return () => window.cancelAnimationFrame(animationFrame);
    }
    if (event === "hide") transitionFunction("hidden");
  },
  opening: (transitionFunction, event, params) => {
    if (!event) {
      const timeout = timing.setLsgTimeout(() => transitionFunction("visible"), params.animationDurationShow);
      return () => timing.clearLsgTimeout(timeout);
    }
    if (event === "hide") transitionFunction("hiding");
    if (event === "show") return;
  },
  visible: (transitionFunction, event) => {
    if (event === "hide") transitionFunction("init-hiding");
  },
  "init-hiding": (transitionFunction, event) => {
    if (!event) {
      const animationFrame = window.requestAnimationFrame(() => transitionFunction("hiding"));
      return () => window.cancelAnimationFrame(animationFrame);
    }
    if (event === "hide") return;
    if (event === "show") transitionFunction("visible");
  },
  hiding: (transitionFunction, event, params) => {
    if (!event) {
      const timeout = timing.setLsgTimeout(() => transitionFunction("hidden"), params.animationDurationHide);
      return () => timing.clearLsgTimeout(timeout);
    }
    if (event === "hide") return;
    if (event === "show") transitionFunction("opening");
  }
});

exports.StateMachine = StateMachine;
exports.stateMachineGraph = stateMachineGraph;
exports.threeStepShowHide = threeStepShowHide;
