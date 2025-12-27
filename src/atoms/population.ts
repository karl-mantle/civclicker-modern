import { atom } from "jotai";

export const populationAtom = atom(1);

export const farmersAtom = atom(0);
export const woodcuttersAtom = atom(0);

export const idlePopulationAtom = atom((get) => {
  const total = get(populationAtom);
  const used = get(farmersAtom) + get(woodcuttersAtom);
  return total - used;
});
