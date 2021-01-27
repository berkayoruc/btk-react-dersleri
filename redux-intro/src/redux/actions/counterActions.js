import * as actionTypes from "./actionTypes";

export const increaseCounter = () => ({
  type: actionTypes.INCREASE_COUNTER,
  payload: 1,
});
export const decreaseCounter = () => ({
  type: actionTypes.DECREASE_COUNTER,
  payload: 1,
});
export const increaseDoubleCounter = () => ({
  type: actionTypes.INCREASE_DOUBLE_COUNTER,
  payload: 2,
});
