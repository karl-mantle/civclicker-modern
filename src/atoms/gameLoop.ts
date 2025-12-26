import { atom } from "jotai";
import { foodAtom } from "./resources";

let lastTick = Date.now();

export const tickAtom = atom(null, (get, set) => {
  const now = Date.now();
  const delta = (now - lastTick) / 1000;
  lastTick = now;

  /* temp */
  set(foodAtom, (food) => food + delta * 0.1);
});
