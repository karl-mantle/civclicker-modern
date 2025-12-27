import { BASE_FOOD_PER_FARMER, BASE_WOOD_PER_WOODCUTTER } from "./constants";

export function foodPerSecond(farmers: number, farms: number): number {
  return farmers * (BASE_FOOD_PER_FARMER + farms * 0.1);
}

export function woodPerSecond(
  woodcutters: number,
  lumberCamps: number
): number {
  return woodcutters * (BASE_WOOD_PER_WOODCUTTER + lumberCamps * 0.1);
}
