import { FOOD_COST, GROWTH_INTERVAL } from "./constants";

interface PopulationState {
  total: number;
  cap: number;
}

export function applyPopulationGrowth(
  population: PopulationState,
  food: number,
  elapsedSeconds: number
): {
  population: PopulationState;
  food: number;
} {
  let availableGrowths = Math.floor(elapsedSeconds / GROWTH_INTERVAL);
  let newPopulation = population.total;
  let remainingFood = food;

  while (
    availableGrowths > 0 &&
    newPopulation < population.cap &&
    remainingFood >= FOOD_COST
  ) {
    newPopulation += 1;
    remainingFood -= FOOD_COST;
    availableGrowths -= 1;
  }

  return {
    population: {
      ...population,
      total: newPopulation,
    },
    food: remainingFood,
  };
}

export function getPopulationCap(huts: number): number {
  return huts * 2;
}
