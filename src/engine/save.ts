export interface SaveV1 {
  version: 1;
  lastSavedAt: number; // ms

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

const KEY = "civclicker-save";

export function saveLocal(save: SaveV1) {
  localStorage.setItem(KEY, JSON.stringify(save));
}

export function loadLocal(): SaveV1 | null {
  const raw = localStorage.getItem(KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as SaveV1;
  } catch {
    return null;
  }
}
