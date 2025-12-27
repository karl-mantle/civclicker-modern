export const BASE_FOOD_PER_FARMER = 0.2;
export const BASE_WOOD_PER_WOODCUTTER = 0.15;

export function foodPerSecond(farmers: number): number {
  return farmers * BASE_FOOD_PER_FARMER;
}

export function woodPerSecond(woodcutters: number): number {
  return woodcutters * BASE_WOOD_PER_WOODCUTTER;
}

export function maxPopulation(huts: number): number {
  return huts * 2;
}
