import type { SaveV1 } from "./save";
import { MAX_OFFLINE_SECONDS } from "./constants";
import { foodPerSecond, woodPerSecond } from "./resources";

export function applyOfflineProgress(save: SaveV1): SaveV1 {
  const now = Date.now();
  const elapsedSeconds = Math.min(
    (now - save.lastSavedAt) / 1000,
    MAX_OFFLINE_SECONDS
  );

  if (elapsedSeconds <= 0) return save;

  const foodRate = foodPerSecond(save.population.farmers, save.buildings.farms);
  const woodRate = woodPerSecond(
    save.population.woodcutters,
    save.buildings.lumberCamps
  );

  return {
    ...save,
    resources: {
      food: save.resources.food + foodRate * elapsedSeconds,
      wood: save.resources.wood + woodRate * elapsedSeconds,
    },
    lastSavedAt: now,
  };
}
