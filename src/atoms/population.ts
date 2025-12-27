import { atom } from "jotai";
import { populationCapAtom } from "./populationCap";

export const populationAtom = atom(1);

export const farmersAtom = atom(0);
export const woodcuttersAtom = atom(0);

export const idlePopulationAtom = atom((get) => {
  const total = get(populationAtom);
  const used = get(farmersAtom) + get(woodcuttersAtom);
  return total - used;
});

export const growPopulationAtom = atom(null, (get, set) => {
  const cap = get(populationCapAtom);
  const pop = get(populationAtom);

  if (pop < cap) {
    set(populationAtom, pop + 1);
  }
});
