import { atom } from "jotai";
import { foodAtom, woodAtom } from "./resources";
import { populationAtom, farmersAtom, woodcuttersAtom } from "./population";
import { hutsAtom, farmsAtom, lumberCampsAtom } from "./buildings";
import type { SaveV1 } from "../engine/save";

export const loadSaveAtom = atom(null, (_get, set, save: SaveV1) => {
  /* Resources */
  set(foodAtom, save.resources.food);
  set(woodAtom, save.resources.wood);

  /* Population */
  set(populationAtom, save.population.total);
  set(farmersAtom, save.population.farmers);
  set(woodcuttersAtom, save.population.woodcutters);

  /* Buildings */
  set(hutsAtom, save.buildings.huts);
  set(farmsAtom, save.buildings.farms);
  set(lumberCampsAtom, save.buildings.lumberCamps);
});
