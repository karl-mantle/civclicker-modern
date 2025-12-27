export type BuildingType = "hut" | "farm" | "lumberCamp";

export const BUILDINGS = {
  hut: {
    name: "Hut",
    cost: { wood: 10 },
    populationCap: 2,
  },
  farm: {
    name: "Farm",
    cost: { wood: 10, food: 5 },
    foodBonusPerFarmer: 0.1,
  },
  lumberCamp: {
    name: "Lumber Camp",
    cost: { wood: 5, food: 10 },
    woodBonusPerWorker: 0.1,
  },
} as const;
