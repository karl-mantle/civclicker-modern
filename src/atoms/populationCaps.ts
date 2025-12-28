import { atom } from "jotai";
import { hutsAtom } from "./buildings";
import { getPopulationCap } from "../engine/population";

export const populationCapAtom = atom((get) => getPopulationCap(get(hutsAtom)));
