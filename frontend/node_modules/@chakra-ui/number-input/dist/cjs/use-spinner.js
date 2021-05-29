"use strict";

exports.__esModule = true;
exports.useSpinner = useSpinner;

var _hooks = require("@chakra-ui/hooks");

var _react = require("react");

/**
 * When click and hold on a button - the speed of auto changing the value.
 */
var CONTINUOUS_CHANGE_INTERVAL = 50;
/**
 * When click and hold on a button - the delay before auto changing the value.
 */

var CONTINUOUS_CHANGE_DELAY = 300;

/**
 * React hook used in the number input to spin its
 * value on long press of the spin buttons
 *
 * @param increment the function to increment
 * @param decrement the function to decrement
 */
function useSpinner(increment, decrement) {
  /**
   * To keep incrementing/decrementing on press, we call that `spinning`
   */
  var _useState = (0, _react.useState)(false),
      isSpinning = _useState[0],
      setIsSpinning = _useState[1]; // This state keeps track of the action ("increment" or "decrement")


  var _useState2 = (0, _react.useState)(null),
      action = _useState2[0],
      setAction = _useState2[1]; // To increment the value the first time you mousedown, we call that `runOnce`


  var _useState3 = (0, _react.useState)(true),
      runOnce = _useState3[0],
      setRunOnce = _useState3[1]; // Store the timeout instance id in a ref, so we can clear the timeout later


  var timeoutRef = (0, _react.useRef)(null); // Clears the timeout from memory

  var removeTimeout = function removeTimeout() {
    return clearTimeout(timeoutRef.current);
  };
  /**
   * useInterval hook provides a performant way to
   * update the state value at specific interval
   */


  (0, _hooks.useInterval)(function () {
    if (action === "increment") {
      increment();
    }

    if (action === "decrement") {
      decrement();
    }
  }, isSpinning ? CONTINUOUS_CHANGE_INTERVAL : null); // Function to activate the spinning and increment the value

  var up = (0, _react.useCallback)(function () {
    // increment the first fime
    if (runOnce) {
      increment();
    } // after a delay, keep incrementing at interval ("spinning up")


    timeoutRef.current = setTimeout(function () {
      setRunOnce(false);
      setIsSpinning(true);
      setAction("increment");
    }, CONTINUOUS_CHANGE_DELAY);
  }, [increment, runOnce]); // Function to activate the spinning and increment the value

  var down = (0, _react.useCallback)(function () {
    // decrement the first fime
    if (runOnce) {
      decrement();
    } // after a delay, keep decrementing at interval ("spinning down")


    timeoutRef.current = setTimeout(function () {
      setRunOnce(false);
      setIsSpinning(true);
      setAction("decrement");
    }, CONTINUOUS_CHANGE_DELAY);
  }, [decrement, runOnce]); // Function to stop spinng (useful for mouseup, keyup handlers)

  var stop = (0, _react.useCallback)(function () {
    setRunOnce(true);
    setIsSpinning(false);
    removeTimeout();
  }, []);
  /**
   * If the component unmounts while spinning,
   * let's clear the timeout as well
   */

  (0, _hooks.useUnmountEffect)(removeTimeout);
  return {
    up: up,
    down: down,
    stop: stop
  };
}
//# sourceMappingURL=use-spinner.js.map