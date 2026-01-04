import type { SaveV1 } from "@engine/save";
/* atoms */
import { atom } from "jotai";
import { hutsAtom, farmsAtom, lumberCampsAtom } from "@atoms/buildings";
import {
  populationAtom,
  farmersAtom,
  woodcuttersAtom,
} from "@atoms/population";
import { foodAtom, woodAtom } from "@atoms/resources";

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
