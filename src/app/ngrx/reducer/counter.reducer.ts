import { CounterAction, CounterActionTypes } from '../actions/counter.action';

export const initialState = 0;

export function counterReducer(state = initialState, action: CounterAction) {
  switch (action.type) {
    case CounterActionTypes.Increment:
      return state + 1;
    case CounterActionTypes.Decrement:
      return state - 1;
    default:
      return state;
  }
}
