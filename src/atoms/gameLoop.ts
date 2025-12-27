import { atom } from "jotai";
import { foodAtom, woodAtom } from "./resources";
import { foodPerSecondAtom, woodPerSecondAtom } from "./rates";

let lastTick = Date.now();

export const tickAtom = atom(null, (get, set) => {
  const now = Date.now();
  const delta = (now - lastTick) / 1000;
  lastTick = now;

  set(foodAtom, (food) => food + get(foodPerSecondAtom) * delta);
  set(woodAtom, (wood) => wood + get(woodPerSecondAtom) * delta);
});
