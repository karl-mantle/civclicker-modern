import { ResourcePanel } from "./ResourcePanel";
import { PopulationPanel } from "./PopulatonPanel";

export function Game() {
  return (
    <div>
      <h1>CivClicker</h1>
      <ResourcePanel />
      <PopulationPanel />
    </div>
  );
}
