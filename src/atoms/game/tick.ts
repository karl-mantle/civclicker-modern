import { atom } from "jotai";
import { growPopulationAtom } from "@atoms/population";
import { foodAtom, woodAtom } from "@atoms/resources";
import { foodPerSecondAtom, woodPerSecondAtom } from "@atoms/resources/rates";

let lastTick = Date.now();
let popGrowthTimer = 0;

export function resetTick() {
  lastTick = Date.now();
  popGrowthTimer = 0;
}

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
