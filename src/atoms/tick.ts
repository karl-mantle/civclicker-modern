import { atom } from "jotai";
import { foodAtom, woodAtom } from "./resources";
import { foodPerSecondAtom, woodPerSecondAtom } from "./production";
import { growPopulationAtom } from "./population";

let lastTick = Date.now();
let popGrowthTimer = 0;

export const tickAtom = atom(null, (get, set) => {
  const now = Date.now();
  const delta = (now - lastTick) / 1000;
  lastTick = now;

  set(foodAtom, (food) => food + get(foodPerSecondAtom) * delta);
  set(woodAtom, (wood) => wood + get(woodPerSecondAtom) * delta);

  popGrowthTimer += delta;
  if (popGrowthTimer >= 20) {
    popGrowthTimer -= 20;
    set(growPopulationAtom);
  }
});

export function resetTick() {
  lastTick = Date.now();
  popGrowthTimer = 0;
}
