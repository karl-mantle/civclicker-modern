import { getPopulationCap } from "@engine/population";
/* atoms */
import { atom } from "jotai";
import { hutsAtom } from "@atoms/buildings";

export const populationCapAtom = atom((get) => getPopulationCap(get(hutsAtom)));
