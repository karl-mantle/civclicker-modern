import { atom } from "jotai";
import { farmersAtom, woodcuttersAtom } from "./population";
import { foodPerSecond, woodPerSecond } from "../engine/formulas";

export const foodPerSecondAtom = atom((get) => foodPerSecond(get(farmersAtom)));

export const woodPerSecondAtom = atom((get) =>
  woodPerSecond(get(woodcuttersAtom))
);
