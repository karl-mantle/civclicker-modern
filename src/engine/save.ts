export interface SaveV1 {
  version: 1;

  resources: {
    food: number;
    wood: number;
  };

  population: {
    total: number;
    farmers: number;
    woodcutters: number;
  };

  buildings: {
    huts: number;
    farms: number;
    lumberCamps: number;
  };
}
