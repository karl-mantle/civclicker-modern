import { atom } from "jotai";
import { farmersAtom, woodcuttersAtom, idlePopulationAtom } from "./population";

export const assignFarmerAtom = atom(null, (get, set) => {
  if (get(idlePopulationAtom) > 0) {
    set(farmersAtom, (f) => f + 1);
  }
});

export const unassignFarmerAtom = atom(null, (get, set) => {
  if (get(farmersAtom) > 0) {
    set(farmersAtom, (f) => f - 1);
  }
});
