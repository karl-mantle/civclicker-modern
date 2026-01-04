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

export const loadSaveAtom = atom(null, (_get, set, save: SaveV1) => {
  /* resources */
  set(foodAtom, save.resources.food);
  set(woodAtom, save.resources.wood);

  /* population */
  set(populationAtom, save.population.total);
  set(farmersAtom, save.population.farmers);
  set(woodcuttersAtom, save.population.woodcutters);

  /* buildings */
  set(hutsAtom, save.buildings.huts);
  set(farmsAtom, save.buildings.farms);
  set(lumberCampsAtom, save.buildings.lumberCamps);
});
