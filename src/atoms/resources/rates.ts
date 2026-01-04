import { foodPerSecond, woodPerSecond } from "@engine/resources";
/* atoms */
import { atom } from "jotai";
import { farmersAtom, woodcuttersAtom } from "@atoms/population";
import { farmsAtom, lumberCampsAtom } from "@atoms/buildings";

export const foodPerSecondAtom = atom((get) =>
  foodPerSecond(get(farmersAtom), get(farmsAtom))
);

export const woodPerSecondAtom = atom((get) =>
  woodPerSecond(get(woodcuttersAtom), get(lumberCampsAtom))
);
