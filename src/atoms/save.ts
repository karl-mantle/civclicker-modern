import { atom } from "jotai";
import { foodAtom, woodAtom } from "./resources";
import { populationAtom, farmersAtom, woodcuttersAtom } from "./population";
import { hutsAtom, farmsAtom, lumberCampsAtom } from "./buildings";
import type { SaveV1 } from "../engine/save";

export const saveAtom = atom<SaveV1>((get) => ({
  version: 1,
  lastSavedAt: Date.now(),

  resources: {
    food: get(foodAtom),
    wood: get(woodAtom),
  },

  population: {
    total: get(populationAtom),
    farmers: get(farmersAtom),
    woodcutters: get(woodcuttersAtom),
  },

  buildings: {
    huts: get(hutsAtom),
    farms: get(farmsAtom),
    lumberCamps: get(lumberCampsAtom),
  },
}));
