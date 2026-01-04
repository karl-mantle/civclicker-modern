import { BUILDINGS, type BuildingType } from "@engine/buildings";
/* atoms */
import { atom } from "jotai";
import { hutsAtom, farmsAtom, lumberCampsAtom } from "@atoms/buildings/";
import { foodAtom, woodAtom } from "@atoms/resources/";

const RESOURCE_ATOMS = {
  wood: woodAtom,
  food: foodAtom,
} as const;

export const buildBuildingAtom = atom(
  null,
  (get, set, buildingType: BuildingType) => {
    const building = BUILDINGS[buildingType];

    /* 1. Check affordability */
    for (const [resource, amount] of Object.entries(building.cost)) {
      const resourceAtom =
        RESOURCE_ATOMS[resource as keyof typeof RESOURCE_ATOMS];
      if (!resourceAtom) return;
      if (get(resourceAtom) < amount) return;
    }

    /* 2. Deduct resources */
    for (const [resource, amount] of Object.entries(building.cost)) {
      const resourceAtom =
        RESOURCE_ATOMS[resource as keyof typeof RESOURCE_ATOMS];
      set(resourceAtom, (v) => v - amount);
    }

    /* 3. Increment building count */
    if (buildingType === "hut") set(hutsAtom, (h) => h + 1);
    if (buildingType === "farm") set(farmsAtom, (h) => h + 1);
    if (buildingType === "lumberCamp") set(lumberCampsAtom, (h) => h + 1);
  }
);
