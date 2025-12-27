import { atom } from "jotai";
import { farmersAtom, woodcuttersAtom } from "./population";
import { farmsAtom, lumberCampsAtom } from "./buildings";
import { foodPerSecond, woodPerSecond } from "../engine/resources";

export const foodPerSecondAtom = atom((get) =>
  foodPerSecond(get(farmersAtom), get(farmsAtom))
);

export const woodPerSecondAtom = atom((get) =>
  woodPerSecond(get(woodcuttersAtom), get(lumberCampsAtom))
);
