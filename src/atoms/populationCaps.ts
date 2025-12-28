import { atom } from "jotai";
import { hutsAtom } from "./buildings";
import { populationCap } from "../engine/population";

export const populationCapAtom = atom((get) => populationCap(get(hutsAtom)));
