import * as actions from "./actionTypes";
import { bindActionCreators } from "redux";

export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: "bug2",
  },
});

export const bugRemoved = (id) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id,
  },
});
export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
});
// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: "bug1",
//     },
//   };
// }
