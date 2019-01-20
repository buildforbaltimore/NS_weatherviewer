import { SELECT_LOCATION } from "./types";

export const selectLocation = loc => {
  return { type: SELECT_LOCATION, payload: loc };
};
