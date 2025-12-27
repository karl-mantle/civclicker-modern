import { atom } from "jotai";
import { farmersAtom, woodcuttersAtom, idlePopulationAtom } from "./population";

export const assignFarmerAtom = atom(null, (get, set) => {
  if (get(idlePopulationAtom) > 0) {
    set(farmersAtom, (n) => n + 1);
  }
});

export const unassignFarmerAtom = atom(null, (get, set) => {
  if (get(farmersAtom) > 0) {
    set(farmersAtom, (n) => n - 1);
  }
});

export const assignWoodcutterAtom = atom(null, (get, set) => {
  if (get(woodcuttersAtom) > 0) {
    set(woodcuttersAtom, (n) => n + 1);
  }
});

export const unassignWoodcutterAtom = atom(null, (get, set) => {
  if (get(woodcuttersAtom) > 0) {
    set(woodcuttersAtom, (n) => n - 1);
  }
});
